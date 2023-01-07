import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-end">
      <ul className="flex flex-row gap-12">
        <li className="px-4 py-2">
          <Link href="/" className={router.pathname === "/" ? "font-bold underline" : ""}>
            Home
          </Link>
        </li>
        <li className="px-4 py-2">
          <Link href="/blog" className={router.pathname.includes("/blog") ? "font-bold underline" : ""}>
            Blog
          </Link>
        </li>
        <li className="px-4 py-2">
          <Link href="/about" className={router.pathname === "/about" ? "font-bold underline" : ""}>
            About
          </Link>
        </li>
        {/* TODO: Add projects Section */}
        {/* <li className="px-4 py-2">
          <Link href="/projects" className={router.pathname === "/projects" ? "font-bold underline" : ""}>
            Projects
          </Link>
        </li> */}
        <li className="px-4 py-2">
          <Link href="/contact" className={router.pathname === "/contact" ? "font-bold underline" : ""}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
