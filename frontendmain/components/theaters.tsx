"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { TextReveal } from "@/components/ui/aceternity/text-reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star } from "lucide-react"

const theaters = [
  {
    id: 1,
    name: "Cineplex Downtown",
    location: "123 Main St, Downtown",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop",
    features: ["IMAX", "Dolby Atmos", "Recliner Seats"],
  },
  {
    id: 2,
    name: "MovieMax Central",
    location: "456 Park Ave, Central",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
    features: ["4DX", "VIP Lounge", "Dine-in"],
  },
  {
    id: 3,
    name: "Starplex Cinema",
    location: "789 Broadway, Uptown",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=2079&auto=format&fit=crop",
    features: ["IMAX", "Premium Lounge", "Arcade"],
  },
]

export function Theaters() {
  const [activeTheater, setActiveTheater] = useState(0)

  return (
    <section className="py-8">
      <div className="text-center mb-10">
        <TextReveal text="Featured Theaters" className="text-2xl font-bold mb-4" />
        <p className="text-muted-foreground max-w-2xl mx-auto">Experience movies in our state-of-the-art theaters</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2">
          <CardContainer className="py-0">
            <CardBody className="w-full h-auto aspect-[16/9] rounded-xl">
              <CardItem translateZ="100" className="w-full h-full">
                <Image
                  src={theaters[activeTheater].image || "/placeholder.svg"}
                  alt={theaters[activeTheater].name}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full rounded-xl"
                />
              </CardItem>
              <CardItem
                translateZ="80"
                translateX="-120"
                translateY="-60"
                className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm p-4 rounded-xl"
              >
                <h3 className="text-xl font-bold">{theaters[activeTheater].name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>{theaters[activeTheater].rating}</span>
                </div>
              </CardItem>
              <CardItem
                translateZ="60"
                translateX="120"
                translateY="80"
                className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm p-3 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">{theaters[activeTheater].location}</span>
                </div>
              </CardItem>
              <CardItem
                translateZ="40"
                translateX="0"
                translateY="120"
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm p-3 rounded-xl"
              >
                <div className="flex gap-2">
                  {theaters[activeTheater].features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-4">
            {theaters.map((theater, index) => (
              <div
                key={theater.id}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  activeTheater === index ? "bg-primary/10 border border-primary/20" : "bg-card/50 hover:bg-card"
                }`}
                onClick={() => setActiveTheater(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{theater.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{theater.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{theater.location}</span>
                </div>
              </div>
            ))}
          </div>

          <Link href="/theaters">
            <Button className="w-full">View All Theaters</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

