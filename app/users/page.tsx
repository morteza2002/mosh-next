import React, { Suspense } from 'react'
import UserTable from './UserTable'
import { log } from 'console'
import Link from 'next/link'

interface props {
  searchParams: {sortOrder: string}
}

const UserPage = async ({searchParams: {sortOrder}}: props) => {


  return (
    <>
    <h1>Users</h1>
    <Link href="/users/new" className='btn'>New User</Link>
    <Suspense fallback={<p>loading...</p>}>
    <UserTable sortOrder={sortOrder} />
    </Suspense>
  </>
    )
}

export default UserPage