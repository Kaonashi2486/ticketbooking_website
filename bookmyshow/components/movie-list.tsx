"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"

const movies = [
  {
    id: 1,
    title: "Interstellar: Beyond Time",
    genre: "Sci-Fi",
    rating: "9.2",
    image: "/images/inter.jpg",
    releaseDate: "Now Showing",
  },
  {
    id: 2,
    title: "The Last Guardian",
    genre: "Action/Adventure",
    rating: "8.8",
    image: "/images/last.jpg",
    releaseDate: "Now Showing",
  },
  {
    id: 3,
    title: "Echoes of Tomorrow",
    genre: "Drama/Thriller",
    rating: "9.0",
    image: "/images/eot.jpg",
    releaseDate: "Now Showing",
  },
  {
    id: 4,
    title: "Midnight Chronicles",
    genre: "Horror",
    rating: "8.5",
    image: "/images/mc.jpg",
    releaseDate: "Now Showing",
  },
  {
    id: 5,
    title: "The Lost City",
    genre: "Adventure",
    rating: "8.7",
    image: "/images/tlc.jpg",
    releaseDate: "Now Showing",
  },
  {
    id: 6,
    title: "Eternal Sunshine",
    genre: "Romance/Drama",
    rating: "9.1",
    image: "/images/es.jpg",
    releaseDate: "Coming Soon",
  },
  {
    id: 7,
    title: "Quantum Break",
    genre: "Sci-Fi/Action",
    rating: "8.9",
    image: "/images/qb.jpg",
    releaseDate: "Coming Soon",
  },
  {
    id: 8,
    title: "The Dark Knight Returns",
    genre: "Action/Thriller",
    rating: "9.4",
    image: "/images/tdk.jpg",
    releaseDate: "Coming Soon",
  },
]

export function MovieList() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("movie-container")
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
        <h2 className="text-2xl font-bold">Movies</h2>
        <Link href="/movies" className="text-primary hover:underline">
          View All
        </Link>
      </div>

      <Tabs defaultValue="now-showing" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="now-showing">Now Showing</TabsTrigger>
          <TabsTrigger value="coming-soon">Coming Soon</TabsTrigger>
        </TabsList>

        <TabsContent value="now-showing" className="relative">
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
            id="movie-container"
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 pt-2 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {movies
              .filter((movie) => movie.releaseDate === "Now Showing")
              .map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
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
        </TabsContent>

        <TabsContent value="coming-soon" className="relative">
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
            id="movie-container"
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 pt-2 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {movies
              .filter((movie) => movie.releaseDate === "Coming Soon")
              .map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
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
        </TabsContent>
      </Tabs>
    </section>
  )
}

interface MovieCardProps {
  movie: {
    id: number
    title: string
    genre: string
    rating: string
    image: string
    releaseDate: string
  }
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <Card className="movie-card w-[220px] overflow-hidden border-0 rounded-lg shadow-lg bg-card/50">
        <CardContent className="p-0">
          <div className="relative h-[300px] w-full">
            <Image
              src={movie.image || "/placeholder.svg"}
              alt={movie.title}
              fill
              className="object-cover rounded-t-lg"
            />
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="flex gap-1 items-center">
                <span className="text-yellow-400">★</span>
                {movie.rating}
              </Badge>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-base line-clamp-1">{movie.title}</h3>
            <p className="text-sm text-muted-foreground">{movie.genre}</p>
            <Button className="w-full mt-3" size="sm">
              {movie.releaseDate === "Now Showing" ? "Book Now" : "Coming Soon"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

