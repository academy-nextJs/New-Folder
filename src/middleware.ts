import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { publicRoutes, privateRoutes, authRoutes } from './core/config/routes'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  if (authRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (privateRoutes.includes(pathname)) {
    if (!token) {
      const redirectUrl = new URL('/login', request.url)
      return NextResponse.redirect(redirectUrl)
    }
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/completeRegister',
    '/verifyCode'
  ]
} 