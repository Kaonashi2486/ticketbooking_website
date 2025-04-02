"use client"
import { JSX, useState } from "react";
import { Menu, Search } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar(): JSX.Element {
  const [location, setLocation] = useState<string>("Mumbai");

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-lg">
      {/* Left Section - Logo & Search */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-red-500">book<span className="text-white">my</span>show</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="bg-gray-800 text-white px-4 py-2 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 w-72"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="hidden md:flex gap-6 text-sm">
        {["Movies", "Stream", "Events", "Plays", "Sports", "Activities"].map((item) => (
          <a key={item} href="#" className="hover:text-red-500 transition">{item}</a>
        ))}
      </div>

      {/* Right Section - Location, Sign In, and Menu */}
      <div className="flex items-center gap-4">
        <span className="text-sm cursor-pointer hover:text-red-500 transition">{location} ▼</span>
        <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full">Sign in</Button>
        <Menu className="text-white cursor-pointer md:hidden" size={24} />
      </div>
    </nav>
  );
}
