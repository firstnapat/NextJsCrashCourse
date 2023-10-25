import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-ff7961 py-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="text-white text-lg font-bold">
                        <Link href="/">Logo</Link>
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="text-white hover:text-gray-300">
                               Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-gray-300">
                               About
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="text-white hover:text-gray-300">
                                Product
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
