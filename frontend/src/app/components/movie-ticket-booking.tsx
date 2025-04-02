"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import Navbar from "./Navbar";  // Import your new Navbar component

// The MyComponent snippet you had is kept for reference; you can remove it if it's not needed.
const MyComponent = () => {
  const [randomValue, setRandomValue] = useState(0);

  useEffect(() => {
    setRandomValue(Math.random());
  }, []);

  return <div>{randomValue}</div>;
};

export default function MovieTicketBooking() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredEvents = [
    {
      id: 1,
      title: "Anu Malik Live in Concert",
      date: "APRIL 12",
      location: "MUMBAI",
      image: "/placeholder.svg?height=400&width=1200",
      organizer: "TOP NOTCH EVENTS",
    },
    {
      id: 2,
      title: "Summer Music Festival",
      date: "MAY 15",
      location: "MUMBAI",
      image: "/placeholder.svg?height=400&width=1200",
      organizer: "LIVE NATION",
    },
    {
      id: 3,
      title: "Comedy Night Special",
      date: "JUNE 5",
      location: "MUMBAI",
      image: "/placeholder.svg?height=400&width=1200",
      organizer: "LAUGH FACTORY",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredEvents.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredEvents.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Use the Navbar component */}
      <Navbar />

      <main className="flex-1">
        {/* Featured Events Carousel */}
        <div className="relative overflow-hidden bg-gray-100">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredEvents.map((event) => (
              <div key={event.id} className="w-full flex-shrink-0 relative">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={1200}
                  height={400}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                  <div className="container mx-auto px-4 md:px-8 text-white">
                    <div className="max-w-lg">
                      <div className="text-sm mb-2">PRESENTS</div>
                      <h2 className="text-4xl md:text-6xl font-bold mb-2">{event.title}</h2>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mt-4">
                        <div className="text-2xl md:text-3xl font-bold">{event.date}</div>
                        <div className="text-2xl md:text-3xl font-bold">{event.location}</div>
                      </div>
                      <div className="mt-6">
                        <div className="text-xs">EVENT MANAGED BY</div>
                        <div className="text-sm font-bold">{event.organizer}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {featuredEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn("w-2 h-2 rounded-full", currentSlide === index ? "bg-white" : "bg-white/50")}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Rest of your main content goes here... */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold">
                <span className="text-black">book</span>
                <span className="bg-red-500 text-white px-1 rounded">my</span>
                <span className="text-black">show</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                About Us
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                Contact Us
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                Terms of Use
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                FAQs
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            © 2023 BookMyShow. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
