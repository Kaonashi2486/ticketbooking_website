import type { AppProps } from "next/app";
import "./globals.css";
import Navbar from "./components/Navbar";
import LocationPopup from "./components/LocationPopup";
import MovieTicketBooking from "./components/movie-ticket-booking"; // Adjust path if needed

export default function Home() {
  return (
    <div>
      <LocationPopup />
      {/* <Navbar /> */}
      <MovieTicketBooking />  {/* Add the component here */}
    </div>
  );
}
