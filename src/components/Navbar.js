import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <ul className="flex flex-wrap justify-center space-x-6 md:space-x-8 lg:space-x-10 max-w-5xl mx-auto text-sm sm:text-base">
        <li>
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/users"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Users
          </Link>
        </li>
        <li>
          <Link
            href="/movies"
            className="hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
}
