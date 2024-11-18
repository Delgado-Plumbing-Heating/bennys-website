import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="text-white sm:text-lg md:text-xl">
      <ul className="flex items-end gap-5 mt-2">
        <Link className="hover:text-black" smooth to="#about">
          About
        </Link>
        <Link className="hover:text-black" smooth to="#services">
          Services
        </Link>
        <Link className="hover:text-black" smooth to="#contact">
          Contact
        </Link>
      </ul>
    </nav>
  );
}
