import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // /admin is the login page
  if (pathname === "/admin") {
    return NextResponse.next();
  }

  const adminToken = request.cookies.get("admin_token")?.value;

  // Not logged in
  if (!adminToken || adminToken !== process.env.ADMIN_SECRET) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Logged in
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};