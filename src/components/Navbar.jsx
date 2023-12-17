import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="text-white sm:text-lg md:text-xl">
      <ul className="flex items-end gap-5 mt-2">
        <Link className="hover:text-black">About</Link>
        <Link className="hover:text-black">Services</Link>
        <Link className="hover:text-black">Contact</Link>
      </ul>
      <Button
        style={{
          background: "white",
          color: "black",
          padding: "8px",
          borderRadius: "1000px",
          marginTop: "5px",
        }}
      >
        720-426-8745
      </Button>
    </nav>
  );
}
