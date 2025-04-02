"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  Edit,
  Gift,
  History,
  LogOut,
  Save,
  Settings,
  Star,
  Ticket,
  User,
  Calendar,
  MapPin,
} from "lucide-react"
import { MovingBorder } from "@/components/ui/aceternity/moving-border"

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  memberSince: "January 2022",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  level: "Gold Member",
  points: 1250,
}

// Mock booking history
const bookingHistory = [
  {
    id: 1,
    movie: "Interstellar: Beyond Time",
    date: "May 15, 2023",
    time: "8:15 PM",
    theater: "Cineplex Downtown",
    seats: ["A12", "A13"],
    amount: "$25.98",
    image: "/images/baninter.jpg",
  },
  {
    id: 2,
    movie: "The Last Guardian",
    date: "April 22, 2023",
    time: "6:30 PM",
    theater: "MovieMax Central",
    seats: ["C8", "C9", "C10"],
    amount: "$38.97",
    image: "/images/central.png",
  },
  {
    id: 3,
    movie: "Echoes of Tomorrow",
    date: "March 10, 2023",
    time: "7:45 PM",
    theater: "Starplex Cinema",
    seats: ["F5", "F6"],
    amount: "$25.98",
    image: "/images/echoes.png",
  },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={userData.avatar || "/placeholder.svg"}
                      alt={userData.name}
                      fill
                      className="object-cover rounded-full border-4 border-primary/20"
                    />
                  </div>
                  <h2 className="text-xl font-bold">{userData.name}</h2>
                  <p className="text-sm text-muted-foreground">{userData.email}</p>

                  <div className="mt-4 w-full">
                    <MovingBorder
                      className="p-2 font-medium text-sm"
                      borderRadius="0.5rem"
                      colors={["#ef4444", "#8b5cf6"]}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-xs uppercase tracking-wider">{userData.level}</span>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{userData.points} points</span>
                        </div>
                      </div>
                    </MovingBorder>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-card rounded-lg overflow-hidden">
              <nav className="flex flex-col">
                <Button variant="ghost" className="justify-start gap-3 rounded-none h-12 px-4">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </Button>
                <Button variant="ghost" className="justify-start gap-3 rounded-none h-12 px-4">
                  <Ticket className="w-4 h-4" />
                  <span>My Bookings</span>
                </Button>
                <Button variant="ghost" className="justify-start gap-3 rounded-none h-12 px-4">
                  <CreditCard className="w-4 h-4" />
                  <span>Payment Methods</span>
                </Button>
                <Button variant="ghost" className="justify-start gap-3 rounded-none h-12 px-4">
                  <Gift className="w-4 h-4" />
                  <span>Rewards</span>
                </Button>
                <Button variant="ghost" className="justify-start gap-3 rounded-none h-12 px-4">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </Button>
                <Button variant="ghost" className="justify-start gap-3 rounded-none h-12 px-4 text-destructive">
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </Button>
              </nav>
            </div>
          </div>

          <div>
            <Tabs defaultValue="profile">
              <TabsList className="mb-6">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="bookings">My Bookings</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Personal Information</CardTitle>
                    <Button variant="ghost" size="sm" className="gap-2" onClick={() => setIsEditing(!isEditing)}>
                      {isEditing ? (
                        <>
                          <Save className="w-4 h-4" />
                          Save
                        </>
                      ) : (
                        <>
                          <Edit className="w-4 h-4" />
                          Edit
                        </>
                      )}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue={userData.name} disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={userData.email} disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue={userData.phone} disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="member-since">Member Since</Label>
                        <Input id="member-since" defaultValue={userData.memberSince} disabled />
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-4">Membership Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Badge variant="outline" className="text-primary border-primary">
                            Gold
                          </Badge>
                          <span>Free popcorn on your birthday</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="outline" className="text-primary border-primary">
                            Gold
                          </Badge>
                          <span>10% discount on all concessions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="outline" className="text-primary border-primary">
                            Gold
                          </Badge>
                          <span>Priority booking for premieres</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bookings">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <History className="w-5 h-5" />
                      Booking History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {bookingHistory.map((booking) => (
                        <div key={booking.id} className="flex gap-4 p-4 rounded-lg bg-card/50 border">
                          <div className="relative w-20 h-28 rounded overflow-hidden hidden sm:block">
                            <Image
                              src={booking.image || "/placeholder.svg"}
                              alt={booking.movie}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{booking.movie}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-2 text-sm">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-3 h-3 text-muted-foreground" />
                                <span>
                                  {booking.date}, {booking.time}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-3 h-3 text-muted-foreground" />
                                <span>{booking.theater}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <User className="w-3 h-3 text-muted-foreground" />
                                <span>Seats: {booking.seats.join(", ")}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CreditCard className="w-3 h-3 text-muted-foreground" />
                                <span>Total: {booking.amount}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm" className="whitespace-nowrap">
                              View Ticket
                            </Button>
                            <Button variant="ghost" size="sm" className="whitespace-nowrap">
                              Get Receipt
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-4">Notification Settings</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="email-notifications">Email Notifications</Label>
                            <input type="checkbox" id="email-notifications" className="toggle" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="sms-notifications">SMS Notifications</Label>
                            <input type="checkbox" id="sms-notifications" className="toggle" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="push-notifications">Push Notifications</Label>
                            <input type="checkbox" id="push-notifications" className="toggle" />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-4">Movie Preferences</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Action</Badge>
                          <Badge>Sci-Fi</Badge>
                          <Badge>Drama</Badge>
                          <Badge variant="outline">Comedy</Badge>
                          <Badge variant="outline">Horror</Badge>
                          <Badge variant="outline">Romance</Badge>
                          <Badge variant="outline">Thriller</Badge>
                          <Badge variant="outline">Animation</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

