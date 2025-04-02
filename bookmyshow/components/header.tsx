"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Film, MapPin, Menu, Search, Ticket, X } from "lucide-react"

export function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const [location, setLocation] = useState("New York")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold">
                  <Ticket className="w-6 h-6 text-primary" />
                  <span>CineTix</span>
                </Link>
                <Link href="/movies" className="flex items-center gap-2 text-lg">
                  <Film className="w-5 h-5" />
                  <span>Movies</span>
                </Link>
                <Link href="/events" className="flex items-center gap-2 text-lg">
                  <Ticket className="w-5 h-5" />
                  <span>Events</span>
                </Link>
                <Link href="/theaters" className="flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5" />
                  <span>Theaters</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Ticket className="w-6 h-6 text-primary" />
            <span className="hidden md:inline">CineTix</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                    <div className="grid gap-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/movies/now-showing"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Now Showing</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Check out movies currently in theaters
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="grid gap-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/movies/coming-soon"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Coming Soon</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Upcoming releases you can book in advance
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Events</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/theaters" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Theaters</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          {showSearch ? (
            <div className="relative flex items-center">
              <Input
                type="search"
                placeholder="Search for movies, events..."
                className="w-full md:w-[200px] lg:w-[300px]"
              />
              <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setShowSearch(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <MapPin className="w-4 h-4" />
            {location}
          </Button>

          <Link href="/signup">
          <Button variant="default" size="sm">
            Sign In
          </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

