// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/discord') {
    return NextResponse.redirect('https://discord.gg/yourInviteCodeHere')
  }
}
