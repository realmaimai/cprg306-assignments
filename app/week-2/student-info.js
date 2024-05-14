import Link from "next/link";

export default function StudentInfo() {
    const linkStyle="underline bg-sky-500 hover:bg-sky-700"
    return (
        <div>
            <h2>Yule Zhang</h2>
            <Link href="https://github.com/realmaimai" className={linkStyle}>Github page</Link>
        </div>
    );
}