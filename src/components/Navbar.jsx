import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="text-white sm:text-lg md:text-xl">
      <ul className="flex items-end gap-5 mt-2">
        <Link className="hover:text-black">About</Link>
        <Link className="hover:text-black">Services</Link>
        <Link className="hover:text-black">Contact</Link>
      </ul>
    </nav>
  );
}
