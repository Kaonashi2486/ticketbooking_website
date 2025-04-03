"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

const featuredMovies = [
  {
    id: 1,
    title: "Interstellar: Beyond Time",
    genre: "Sci-Fi",
    rating: "9.2",
    image: "/images/inter.png",
    description: "A journey beyond the stars that challenges the very fabric of time and space.",
  },
  {
    id: 2,
    title: "The Last Guardian",
    genre: "Action/Adventure",
    rating: "8.8",
    image: "/images/tlg.jpg",
    description: "An epic tale of survival against impossible odds in a world on the brink of collapse.",
  },
  {
    id: 3,
    title: "Echoes of Tomorrow",
    genre: "Drama/Thriller",
    rating: "9.0",
    image: "/images/eot.png",
    description: "When the past and future collide, one woman must face the consequences of her choices.",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMovies.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {featuredMovies.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50" />
          <Image
            src={movie.image || "/placeholder.svg"}
            alt={movie.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 gradient-overlay" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 text-white">
            <div className="container mx-auto">
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Featured
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 max-w-2xl">{movie.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary">{movie.genre}</Badge>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{movie.rating}</span>
                </div>
              </div>
              <p className="text-lg max-w-xl mb-6 text-gray-200">{movie.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Book Tickets
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Play className="w-4 h-4" />
                  Watch Trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-6" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

