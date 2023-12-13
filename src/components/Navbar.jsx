import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-end text-white gap-10 mt-2">
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
