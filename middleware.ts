import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if the request is for the admin page
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // In a real application, you would implement proper authentication here
    // For now, we'll use a simple query parameter as a "password"
    const adminKey = request.nextUrl.searchParams.get("key")

    // This is a very basic protection - in a real app, use proper authentication
    if (adminKey !== "your-secret-admin-key") {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}
