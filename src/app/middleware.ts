// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { publicRoutes, privateRoutes, authRoutes } from '../core/config/routes'

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('token')?.value
//   const { pathname } = request.nextUrl

//   if (authRoutes.includes(pathname) && token) {
//     return NextResponse.redirect(new URL('/dashboard', request.url))
//   }

//   if (privateRoutes.includes(pathname) && !token) {
//     const redirectUrl = new URL('/login', request.url)
//     redirectUrl.searchParams.set('redirect', pathname)
//     return NextResponse.redirect(redirectUrl)
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// } 