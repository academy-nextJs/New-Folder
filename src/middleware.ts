import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { publicRoutes, privateRoutes, authRoutes } from "./core/config/routes";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request);
  if (intlResponse instanceof NextResponse && intlResponse.redirected) {
    return intlResponse;
  }

  const token = request.cookies.get('next-auth.session-token')?.value;
  const { pathname } = request.nextUrl;

  if (publicRoutes.includes(pathname)) {
    return intlResponse;
  }

  if (authRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (privateRoutes.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return intlResponse;
  }

  return intlResponse;
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
