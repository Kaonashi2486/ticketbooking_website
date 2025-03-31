"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { X } from "lucide-react";

export default function SigninModal() {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
        {/* Close Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Get Started</h2>
          <button className="text-gray-500 hover:text-gray-800">
            <X size={20} />
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="mt-4 space-y-3">
          <Button variant="outline" className="w-full flex items-center gap-3">
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </Button>

          <Button variant="outline" className="w-full flex items-center gap-3">
            📧 Continue with Email
          </Button>

          <Button variant="outline" className="w-full flex items-center gap-3">
            🍏 Continue with Apple
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Mobile Number Input */}
        <div className="relative">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
            🇮🇳 +91
          </span>
          <Input
            type="text"
            placeholder="Continue with mobile number"
            className="pl-12"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        {/* Terms & Conditions */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          I agree to the{" "}
          <a href="#" className="text-blue-600 underline">
            Terms & Conditions
          </a>{" "}
          &{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
