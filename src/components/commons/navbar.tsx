import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-200 p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="nav-logo">
            <Link href="/" className="flex items-center">
              <Avatar className="mr-2 bg-black text-white">
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-bold text-black">ShopMart</h1>
            </Link>
          </div>
          <div className="nav-links">
            <Link href="/" className="text-black hover:text-gray-700 mx-4">
              Home
            </Link>
            <Link
              href="/products"
              className="text-black hover:text-gray-700 mx-4"
            >
              Products
            </Link>
            <Link
              href="/brands"
              className="text-black hover:text-gray-700 mx-4"
            >
              Brands
            </Link>
            <Link
              href="/categories"
              className="text-black hover:text-gray-700 mx-4"
            >
              Categories
            </Link>
          </div>
          <div className="nav-icons"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
