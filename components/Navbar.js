import Link from "next/link";
export default function Navbar() {
    return (
        <nav>
            <div>
                <h1>TangTor</h1>
            </div>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Project</Link>
            </ul>
        </nav>
    );
}
