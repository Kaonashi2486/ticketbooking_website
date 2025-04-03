"use client"

import { useState } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, Play, Star, ThumbsUp, User } from "lucide-react"

// Mock data for movie details
const movieDetails = {
  id: 1,
  title: "Interstellar: Beyond Time",
  genre: "Sci-Fi/Adventure",
  rating: "9.2",
  duration: "2h 49m",
  releaseDate: "May 15, 2023",
  director: "Christopher Nolan",
  cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
  synopsis:
    "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. As they journey to another galaxy, they face the harsh realities of space travel and the mysteries of the universe.",
  image: "/images/inter.jpg",
  banner: "/images/baninter.jpg",
  trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  reviews: [
    {
      id: 1,
      user: "MovieFan123",
      rating: 5,
      comment: "One of the best sci-fi movies I've ever seen. The visuals are stunning and the story is captivating.",
    },
    {
      id: 2,
      user: "CinemaLover",
      rating: 4,
      comment: "Great performances by the entire cast. The score by Hans Zimmer is phenomenal.",
    },
  ],
};


// Mock data for showtimes
const showtimes = [
  {
    id: 1,
    theater: "Cineplex Downtown",
    date: "Today",
    times: ["10:30 AM", "1:45 PM", "5:00 PM", "8:15 PM", "11:30 PM"],
  },
  {
    id: 2,
    theater: "MovieMax Central",
    date: "Today",
    times: ["11:00 AM", "2:15 PM", "5:30 PM", "8:45 PM"],
  },
  {
    id: 3,
    theater: "Starplex Cinema",
    date: "Today",
    times: ["12:00 PM", "3:15 PM", "6:30 PM", "9:45 PM"],
  },
]

export default function MovieDetail() {
  const params = useParams()
  const [selectedDate, setSelectedDate] = useState("Today")

  // In a real app, you would fetch the movie details based on the ID
  const movieId = params.id

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="relative h-[60vh]">
        <Image
          src={movieDetails.banner || "/placeholder.svg"}
          alt={movieDetails.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-overlay" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 text-white">
          <div className="container mx-auto flex flex-col md:flex-row gap-8">
            <div className="relative h-[300px] w-[200px] rounded-lg overflow-hidden shadow-2xl hidden md:block">
              <Image
                src={movieDetails.image || "/placeholder.svg"}
                alt={movieDetails.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-end">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{movieDetails.title}</h1>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Badge variant="secondary">{movieDetails.genre}</Badge>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{movieDetails.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{movieDetails.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{movieDetails.releaseDate}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
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
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="mb-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Synopsis</h3>
                  <p className="text-muted-foreground">{movieDetails.synopsis}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Cast & Crew</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-medium">Director</p>
                      <p className="text-muted-foreground">{movieDetails.director}</p>
                    </div>
                    {movieDetails.cast.map((actor, index) => (
                      <div key={index}>
                        <p className="font-medium">Actor</p>
                        <p className="text-muted-foreground">{actor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">User Reviews</h3>
                  <Button variant="outline" size="sm">
                    Write a Review
                  </Button>
                </div>

                {movieDetails.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-5 h-5" />
                      <span className="font-medium">{review.user}</span>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-400"}`}
                          fill={i < review.rating ? "currentColor" : "none"}
                        />                        
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Helpful
                      </Button>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Showtimes</h3>

              <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {["Today", "Tomorrow", "Wed", "Thu", "Fri"].map((date) => (
                  <Button
                    key={date}
                    variant={selectedDate === date ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDate(date)}
                  >
                    {date}
                  </Button>
                ))}
              </div>

              <div className="space-y-6">
                {showtimes.map((showtime) => (
                  <div key={showtime.id} className="border-b pb-4">
                    <h4 className="font-medium mb-2">{showtime.theater}</h4>
                    <div className="flex flex-wrap gap-2">
                      {showtime.times.map((time, index) => (
                        <Button key={index} variant="outline" size="sm">
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { useParams } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { Calendar, Clock, Play, Star, ThumbsUp, User } from "lucide-react"

// // Mock data for movie details
// const movieDetails = [
// {
//   id: 1,
//   title: "Interstellar: Beyond Time",
//   genre: "Sci-Fi/Adventure",
//   rating: "9.2",
//   duration: "2h 49m",
//   releaseDate: "May 15, 2023",
//   director: "Christopher Nolan",
//   cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
//   synopsis:
//     "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. As they journey to another galaxy, they face the harsh realities of space travel and the mysteries of the universe.",
//   image: "/images/inter.jpg",
//   banner: "/images/baninter.jpg",
//   trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   reviews: [
//     {
//       id: 1,
//       user: "MovieFan123",
//       rating: 5,
//       comment: "One of the best sci-fi movies I've ever seen. The visuals are stunning and the story is captivating.",
//     },
//     {
//       id: 2,
//       user: "CinemaLover",
//       rating: 4,
//       comment: "Great performances by the entire cast. The score by Hans Zimmer is phenomenal.",
//     },
//   ],
// }
// ];


// // Mock data for showtimes
// const showtimes = [
//   {
//     id: 1,
//     theater: "Cineplex Downtown",
//     date: "Today",
//     times: ["10:30 AM", "1:45 PM", "5:00 PM", "8:15 PM", "11:30 PM"],
//   },
//   {
//     id: 2,
//     theater: "MovieMax Central",
//     date: "Today",
//     times: ["11:00 AM", "2:15 PM", "5:30 PM", "8:45 PM"],
//   },
//   {
//     id: 3,
//     theater: "Starplex Cinema",
//     date: "Today",
//     times: ["12:00 PM", "3:15 PM", "6:30 PM", "9:45 PM"],
//   },
// ]

// export default function MovieDetail() {
//   const params = useParams()
//   const [selectedDate, setSelectedDate] = useState("Today")

//   // In a real app, you would fetch the movie details based on the ID
//   const movieId = params.id

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       <div className="relative h-[60vh]">
//         <Image
//           src={movieDetails.banner || "/placeholder.svg"}
//           alt={movieDetails.title}
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 gradient-overlay" />

//         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 text-white">
//           <div className="container mx-auto flex flex-col md:flex-row gap-8">
//             <div className="relative h-[300px] w-[200px] rounded-lg overflow-hidden shadow-2xl hidden md:block">
//               <Image
//                 src={movieDetails.image || "/placeholder.svg"}
//                 alt={movieDetails.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div className="flex flex-col justify-end">
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{movieDetails.title}</h1>

//               <div className="flex flex-wrap items-center gap-4 mb-4">
//                 <Badge variant="secondary">{movieDetails.genre}</Badge>
//                 <div className="flex items-center">
//                   <Star className="w-4 h-4 text-yellow-400 mr-1" />
//                   <span>{movieDetails.rating}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Clock className="w-4 h-4 mr-1" />
//                   <span>{movieDetails.duration}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-1" />
//                   <span>{movieDetails.releaseDate}</span>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-4 mt-4">
//                 <Button size="lg" className="gap-2">
//                   Book Tickets
//                 </Button>
//                 <Button variant="outline" size="lg" className="gap-2">
//                   <Play className="w-4 h-4" />
//                   Watch Trailer
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <Tabs defaultValue="about">
//               <TabsList className="mb-6">
//                 <TabsTrigger value="about">About</TabsTrigger>
//                 <TabsTrigger value="reviews">Reviews</TabsTrigger>
//               </TabsList>

//               <TabsContent value="about" className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">Synopsis</h3>
//                   <p className="text-muted-foreground">{movieDetails.synopsis}</p>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">Cast & Crew</h3>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                     <div>
//                       <p className="font-medium">Director</p>
//                       <p className="text-muted-foreground">{movieDetails.director}</p>
//                     </div>
//                     {movieDetails.cast.map((actor, index) => (
//                       <div key={index}>
//                         <p className="font-medium">Actor</p>
//                         <p className="text-muted-foreground">{actor}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </TabsContent>

//               <TabsContent value="reviews" className="space-y-6">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-xl font-semibold">User Reviews</h3>
//                   <Button variant="outline" size="sm">
//                     Write a Review
//                   </Button>
//                 </div>

//                 {movieDetails.reviews.map((review) => (
//                   <div key={review.id} className="border-b pb-4">
//                     <div className="flex items-center gap-2 mb-2">
//                       <User className="w-5 h-5" />
//                       <span className="font-medium">{review.user}</span>
//                       <div className="flex">
//                         {Array.from({ length: 5 }).map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-400"}`}
//                             fill={i < review.rating ? "currentColor" : "none"}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                     <p className="text-muted-foreground">{review.comment}</p>
//                     <div className="flex items-center gap-2 mt-2">
//                       <Button variant="ghost" size="sm" className="h-8 px-2">
//                         <ThumbsUp className="w-4 h-4 mr-1" />
//                         Helpful
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//               </TabsContent>
//             </Tabs>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-card rounded-lg p-6 shadow-sm">
//               <h3 className="text-xl font-semibold mb-4">Showtimes</h3>

//               <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
//                 {["Today", "Tomorrow", "Wed", "Thu", "Fri"].map((date) => (
//                   <Button
//                     key={date}
//                     variant={selectedDate === date ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setSelectedDate(date)}
//                   >
//                     {date}
//                   </Button>
//                 ))}
//               </div>

//               <div className="space-y-6">
//                 {showtimes.map((showtime) => (
//                   <div key={showtime.id} className="border-b pb-4">
//                     <h4 className="font-medium mb-2">{showtime.theater}</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {showtime.times.map((time, index) => (
//                         <Button key={index} variant="outline" size="sm">
//                           {time}
//                         </Button>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }













