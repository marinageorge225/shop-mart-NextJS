import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-[0_1px_20px_rgba(0,0,0,0.04)]">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="nav-logo">
            <Link href="/" className="flex items-center group">
              <Avatar className="mr-2.5 bg-gradient-to-br from-slate-800 to-navy-900 bg-[#0f2244] text-white shadow-md shadow-slate-300 ring-2 ring-white transition-transform duration-300 group-hover:scale-105">
                <AvatarFallback className="bg-transparent font-semibold text-white">
                  S
                </AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-extrabold tracking-tight text-[#173b77]">
                Shop<span className="text-[#173b77]">Mart</span>
              </h1>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="nav-links hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/brands", label: "Brands" },
              { href: "/categories", label: "Categories" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[15px] font-medium text-slate-600 transition-colors duration-200 hover:text-[#0f2244] after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-[#0f2244] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="nav-icons flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button className="cursor-pointer p-2.5 rounded-full text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-[#0f2244]">
                    <UserRound className="w-5 h-5" />
                  </button>
                }
              ></DropdownMenuTrigger>

              <DropdownMenuContent className="rounded-xl border-slate-100 shadow-lg">
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="text-slate-500 text-xs uppercase tracking-wide">
                    My Account
                  </DropdownMenuLabel>
                  <Link href="/login">
                    <DropdownMenuItem className="cursor-pointer rounded-lg focus:bg-slate-100 focus:text-[#0f2244]">
                      Login
                    </DropdownMenuItem>
                  </Link>

                  <Link href="/register">
                    <DropdownMenuItem className="cursor-pointer rounded-lg focus:bg-slate-100 focus:text-[#0f2244]">
                      Register
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link href="/orders">
                    <DropdownMenuItem className="cursor-pointer rounded-lg focus:bg-slate-100 focus:text-[#0f2244]">
                      Your Orders
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/logout">
                    <DropdownMenuItem className="cursor-pointer rounded-lg focus:bg-slate-100 focus:text-[#0f2244]">
                      Logout
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/cart">
              <div className="cursor-pointer relative p-2.5 rounded-full text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-[#0f2244]">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#0f2244] text-white text-[11px] font-semibold p-0 shadow-sm shadow-slate-400">
                  2
                </Badge>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
