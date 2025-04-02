"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Kolkata"];
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const navItems = ["Movies", "Stream", "Events", "Plays", "Sports", "Activities"];
  const secondaryNavItems = ["ListYourShow", "Corporates", "Offers", "Gift Cards"];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setFilteredItems(
      navItems.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    );
  };


  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center">
            <div className="text-xl font-bold">
              <span className="text-black">book</span>
              <span className="bg-red-500 text-white px-1 rounded">my</span>
              <span className="text-black">show</span>
            </div>
          </div>
        </Link>

        {/* Search Bar - Hidden on mobile
        <div className="hidden md:flex flex-1 mx-6">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className="text-black w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary"
            />
          </div>
        </div> */}

        {/* Search Bar with Autocomplete */}
        <div className="hidden md:flex flex-1 mx-6 relative">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className="text-black w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary"
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchTerm && (
              <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded-md shadow-md z-10">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchTerm(item);
                        setFilteredItems([]);
                      }}
                    >
                      {item}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">No results found</li>
                )}
              </ul>
            )}
          </div>
        </div>


        {/* City Selector and Sign In */}
        <div className="flex items-center gap-3 relative">
          <div
            className="hidden md:flex items-center gap-1 cursor-pointer fill-black relative"
            onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
          >
            <span className="text-black">{selectedCity}</span>
            <ChevronDown className="h-4 w-4 fill-black" />
          </div>
          
          {cityDropdownOpen && (
            <div className="absolute top-5 left-3 mt-2 w-30 bg-white border border-gray-300 rounded-lg shadow-lg text-black">
              <ul className="py-2">
                {cities.map((city) => (
                  <li
                    key={city}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedCity(city);
                      setCityDropdownOpen(false);
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button className="bg-red-500 hover:bg-red-600 text-white">Sign in</Button>
          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden md:block border-t border-gray-100">
        <div className="container mx-auto px-4 flex justify-between">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item} className="py-3">
                <Link href="#" className="text-gray-700 hover:text-primary font-medium">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex space-x-6">
            {secondaryNavItems.map((item) => (
              <li key={item} className="py-3">
                <Link href="#" className="text-gray-700 hover:text-primary text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
