"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Global Music Festival",
    category: "Music",
    date: "May 15",
    image: "/images/gmf1.jpg",
    location: "Central Park",
  },
  {
    id: 2,
    title: "Comedy Night Special",
    category: "Comedy",
    date: "May 20",
    image: "/images/cn.jpg",
    location: "Laugh Factory",
  },
  {
    id: 3,
    title: "Broadway: Hamilton",
    category: "Theater",
    date: "June 5",
    image: "/images/bh1.jpg",
    location: "Broadway Theater",
  },
  {
    id: 4,
    title: "Tech Conference 2023",
    category: "Conference",
    date: "June 12",
    image: "/images/tc.png",
    location: "Convention Center",
  },
]

export function EventList() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("event-container")
    if (container) {
      const scrollAmount = 330
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
        setScrollPosition(Math.max(0, scrollPosition - scrollAmount))
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
        setScrollPosition(scrollPosition + scrollAmount)
      }
    }
  }

  return (
    <section className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Events</h2>
        <Link href="/events" className="text-primary hover:underline">
          View All
        </Link>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
            onClick={() => scroll("left")}
            disabled={scrollPosition <= 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>

        <div
          id="event-container"
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 pt-2 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

interface EventCardProps {
  event: {
    id: number
    title: string
    category: string
    date: string
    image: string
    location: string
  }
}

function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`}>
      <Card className="movie-card w-[300px] overflow-hidden border-0 rounded-lg shadow-lg bg-card/50">
        <CardContent className="p-0">
          <div className="relative h-[180px] w-full">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-cover rounded-t-lg"
            />
            <div className="absolute top-2 right-2">
              <Badge variant="secondary">{event.category}</Badge>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-base line-clamp-1">{event.title}</h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
              <span>•</span>
              <span>{event.location}</span>
            </div>
            <Button className="w-full mt-3" size="sm">
              Book Tickets
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

