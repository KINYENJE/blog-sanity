import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Lilita_One } from "next/font/google";
import { AddIcon } from "./Icons";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            X
            <span className="text-purple-500">Blog</span>
          </div>
        </Link>
        <div className="flex gap-4">
          <Link href="/studio">
            <div className="border border-purple-500 rounded-2xl hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-amber-50 p-2">
              <AddIcon />
            </div>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;