"use client"

import { useState } from "react"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin } from "lucide-react"

// Mock data for the movie
const movieData = {
  id: 1,
  title: "Interstellar: Beyond Time",
  image: "/images/groot.png",
  duration: "2h 49m",
  theater: "Cineplex Downtown",
  date: "May 15, 2023",
  time: "8:15 PM",
  price: 12.99,
}

// Seat layout configuration
const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]
const seatsPerRow = 12

// Generate seats
const generateSeats = () => {
  const seats = []
  for (const row of rows) {
    for (let i = 1; i <= seatsPerRow; i++) {
      // Randomly mark some seats as booked
      const isBooked = Math.random() > 0.7
      seats.push({
        id: `${row}${i}`,
        row,
        number: i,
        status: isBooked ? "booked" : "available",
      })
    }
  }
  return seats
}

export default function BookingPage() {
  const params = useParams()
  const router = useRouter()
  const [seats, setSeats] = useState(generateSeats())
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [ticketType, setTicketType] = useState("standard")

  // In a real app, you would fetch the movie and showtime details based on the ID
  // const bookingId = params.id

  const handleSeatClick = (seatId: string) => {
    const seat = seats.find((s) => s.id === seatId)
    if (seat && seat.status === "booked") return

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
    } else {
      setSelectedSeats([...selectedSeats, seatId])
    }
  }

  const getSeatStatus = (seatId: string) => {
    const seat = seats.find((s) => s.id === seatId)
    if (seat?.status === "booked") return "booked"
    return selectedSeats.includes(seatId) ? "selected" : "available"
  }

  const totalPrice = selectedSeats.length * (ticketType === "premium" ? 16.99 : 12.99)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl font-bold mb-6">Select Seats</h1>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-sm border border-primary"></div>
                    <span className="text-sm">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-sm bg-primary"></div>
                    <span className="text-sm">Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-sm bg-muted"></div>
                    <span className="text-sm">Booked</span>
                  </div>
                </div>

                <Select value={ticketType} onValueChange={setTicketType}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Ticket Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard ($12.99)</SelectItem>
                    <SelectItem value="premium">Premium ($16.99)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full bg-muted/30 p-4 rounded-lg mb-8">
                <div className="w-full h-2 bg-muted mb-12 rounded-full">
                  <div className="text-center text-sm text-muted-foreground">Screen</div>
                </div>

                <div className="grid grid-cols-12 gap-2 max-w-3xl mx-auto">
                  {seats.map((seat) => (
                    <button
                      key={seat.id}
                      className={`
                        aspect-square rounded-md text-xs font-medium flex items-center justify-center
                        ${getSeatStatus(seat.id) === "available" ? "border border-primary hover:bg-primary/20" : ""}
                        ${getSeatStatus(seat.id) === "selected" ? "bg-primary text-primary-foreground" : ""}
                        ${getSeatStatus(seat.id) === "booked" ? "bg-muted cursor-not-allowed" : ""}
                      `}
                      onClick={() => handleSeatClick(seat.id)}
                      disabled={getSeatStatus(seat.id) === "booked"}
                    >
                      {seat.id}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4 mb-6">
                  <div className="relative h-[150px] w-[100px] rounded overflow-hidden">
                    <Image
                      src={movieData.image || "/placeholder.svg"}
                      alt={movieData.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">{movieData.title}</h2>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <Clock className="w-4 h-4" />
                      <span>{movieData.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{movieData.theater}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {movieData.date}, {movieData.time}
                      </span>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Ticket Type</span>
                    <span className="font-medium">{ticketType === "premium" ? "Premium" : "Standard"}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Selected Seats</span>
                    <span className="font-medium">{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tickets</span>
                    <span className="font-medium">
                      {selectedSeats.length} × ${ticketType === "premium" ? "16.99" : "12.99"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Booking Fee</span>
                    <span className="font-medium">$1.99</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(totalPrice + 1.99).toFixed(2)}</span>
                  </div>

                  <Button className="w-full" size="lg" disabled={selectedSeats.length === 0}>
                    Proceed to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

