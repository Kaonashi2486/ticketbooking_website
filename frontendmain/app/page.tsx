import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MovieList } from "@/components/movie-list"
import { EventList } from "@/components/event-list"
import { Footer } from "@/components/footer"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { TextReveal } from "@/components/ui/aceternity/text-reveal"
import { MovingBorder } from "@/components/ui/aceternity/moving-border"
import { Offers } from "@/components/offers"
import { Theaters } from "@/components/theaters"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <Header />
      <Hero />

      <div className="container px-4 py-8 mx-auto space-y-16">
        <div className="text-center mb-12">
          <TextReveal text="Discover the Magic of Cinema" className="text-3xl md:text-4xl font-bold mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book tickets for the latest movies, events, and shows. Experience entertainment like never before.
          </p>
        </div>

        <MovieList />

        <Spotlight className="p-8 rounded-3xl bg-black/5 dark:bg-white/5">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Premium Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Upgrade your movie experience with our premium theaters featuring state-of-the-art sound systems and
              luxurious seating.
            </p>
            <MovingBorder className="p-4 font-semibold" borderRadius="0.5rem" colors={["#ef4444", "#8b5cf6"]}>
              <Link href="/premium">Explore Premium Options</Link>
            </MovingBorder>
          </div>
        </Spotlight>

        <EventList />

        <Offers />

        <Theaters />
      </div>

      <Footer />
    </main>
  )
}

