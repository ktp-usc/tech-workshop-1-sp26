import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex gap-4 p-4 border-b">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contacts">Contact</Link>
        </nav>
    );
}