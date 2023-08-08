'use client'

import '../../app/global.css';
import { KeyboardEventHandler, useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      test page
      <Link href={'/nextjs'}>return to home</Link>
    </div>
  )
}
