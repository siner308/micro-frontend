'use client'

import Link from "next/link";
import '../../app/globals.css';

export default function Home() {
  return (
    <div className={'bg-blue-400'}>
      <>
        micro-frontend admin page with tailwind
      </>
      <h1>header</h1>
      <Link href={'/admin/test'}>Go to Test Page</Link>
    </div>
  )
}
