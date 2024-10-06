"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const logo = "https://flowbite.com/docs/images/logo.svg";

  return (
    <>
    <nav className="bg-gray-600 h-20 text-center text-white content-center border-gray-200 flex flex-wrap justify-around  dark:bg-gray-900 dark:border-gray-700">
     <div className="">
<Link href="#">

  <h1 className="hover:text-blue-400 hover:underline">E-Store</h1>
</Link>

     </div>
     <div className=" ">
      <ul className="flex flex-wrap gap-5">
       <Link  href="#"> <li className="hover:text-blue-400 hover:underline">Home</li></Link>
       <Link href="#"> <li className="hover:text-blue-400 hover:underline">Products</li></Link>
       <Link href="#"> <li className="hover:text-blue-400 hover:underline">Blogs</li></Link>
       <Link href="#"> <li className="hover:text-blue-400 hover:underline">Contacts</li></Link>
      </ul>
     </div>
    </nav>
    </>
  );
}
