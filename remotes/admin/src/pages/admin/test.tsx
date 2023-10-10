import Link from "next/link";

export default function Test() {
  return (
    <div>
      <h1>test</h1>
      <Link href={'/admin'}>Back to Home</Link>
    </div>
  )
}
