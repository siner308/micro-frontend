import Link from "next/link";

export default function Home() {
  return (
    <div className={'flex bg-blue-400'}>
      micro-frontend admin page with tailwind
      <h1>header</h1>
      <Link href={'/test'}>Go to Test Page</Link>
    </div>
  )
}
