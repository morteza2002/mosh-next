'use client';
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  const { status, data: session } = useSession();
  if (status === 'loading') return null;
  
  return (
    <div className='flex bg-slate-800 p-3 space-x-3'>
      <Link href="/" className='mr-5'>Next.js</Link>
      <Link href="/users">Users</Link>
      {status === 'authenticated' && 
      <div>
         {session.user!.name} 
         <Link href={"/api/auth/signout"} className='ml-3'>signOut</Link>
         </div>}
      {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}

export default NavBar
