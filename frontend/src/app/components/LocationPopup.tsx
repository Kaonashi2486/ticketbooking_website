"use client";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { X, MapPin } from "lucide-react";

const LocationPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const isLoggedIn: boolean = false; // Replace with actual login check
    if (!isLoggedIn) {
      setIsOpen(true);
    }
  }, []);

  const closePopup = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button onClick={closePopup} className="absolute top-2 right-2 text-gray-500">
          <X size={20} />
        </button>
        <h2 className="text-lg font-semibold mb-3">Select Your Location</h2>
        <div className="flex items-center border rounded-md p-2 mb-3">
          <Input placeholder="Search for your city" className="flex-grow border-none focus:ring-0" />
        </div>
        <Button variant="outline" className="w-full flex items-center justify-center gap-2 mb-4">
          <MapPin size={16} /> Detect my location
        </Button>
        <h3 className="text-sm font-medium mb-2">Popular Cities</h3>
        <div className="grid grid-cols-4 gap-3 text-center text-gray-700">
          {[
            "Mumbai",
            "Delhi-NCR",
            "Bengaluru",
            "Hyderabad",
            "Chandigarh",
            "Ahmedabad",
            "Chennai",
            "Pune",
            "Kolkata",
            "Kochi",
          ].map((city: string) => (
            <div key={city} className="flex flex-col items-center cursor-pointer hover:text-black">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <span className="text-xs mt-1">{city}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-red-500 text-center mt-3 cursor-pointer">View All Cities</p>
      </div>
    </div>
  );
};

export default LocationPopup;
