import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("session")?.value;

  const pathname = request.nextUrl.pathname;

  if (!currentUser && pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    return currentUser
      ? Response.redirect(new URL("/dashboard", request.url))
      : undefined;
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
