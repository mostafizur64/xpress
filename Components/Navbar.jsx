import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold">XpressD</Link>
      <Link href={"/addTopic"} className="bg-white p-2">AddXpress</Link>
    </nav>
  );
};

export default Navbar;
