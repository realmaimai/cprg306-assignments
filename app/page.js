import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const linkStyle="underline bg-sky-500 hover:bg-sky-700"

  return (
    <main className="h-screen">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link href="./week-2" className={linkStyle}>week 2 assignment</Link></li>
        <li><Link href="./week-3" className={linkStyle}>week 3 assignment</Link></li>
        <li><Link href="./week-4" className={linkStyle}>week 4 assignment</Link></li>
        <li><Link href="./week-5" className={linkStyle}>week 5 assignment</Link></li>
        <li><Link href="./week-6" className={linkStyle}>week 6 assignment</Link></li>
        <li><Link href="./week-7" className={linkStyle}>week 7 assignment</Link></li>
        <li><Link href="./week-8" className={linkStyle}>week 8 assignment</Link></li>
        <li><Link href="./week-9" className={linkStyle}>week 9 assignment</Link></li>
        <li><Link href="./week-10" className={linkStyle}>week 10 assignment</Link></li>
      </ul>
    </main>
  );
}
