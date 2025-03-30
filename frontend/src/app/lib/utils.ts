import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Combine Tailwind classes with clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format date for movie showtimes
export function formatShowDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date)
}

// Format time for movie showtimes
export function formatShowTime(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date)
}

// Calculate ticket price with fees
export function calculateTicketPrice(
  basePrice: number,
  quantity: number,
  premiumSeats = 0,
  premiumPrice = 0,
  hasBookingFee = true,
  bookingFeePercentage = 0.05, // 5% booking fee
  convenienceFee = 30, // Fixed convenience fee
): {
  subtotal: number
  bookingFee: number
  convenienceFee: number
  total: number
} {
  const standardSeats = quantity - premiumSeats
  const subtotal = basePrice * standardSeats + premiumPrice * premiumSeats
  const bookingFee = hasBookingFee ? subtotal * bookingFeePercentage : 0
  const total = subtotal + bookingFee + convenienceFee

  return {
    subtotal: Number.parseFloat(subtotal.toFixed(2)),
    bookingFee: Number.parseFloat(bookingFee.toFixed(2)),
    convenienceFee,
    total: Number.parseFloat(total.toFixed(2)),
  }
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}

// Seat selection utilities
export type Seat = {
  id: string
  row: string
  number: number
  type: "standard" | "premium" | "recliner"
  status: "available" | "selected" | "booked" | "blocked"
  price: number
}

export function generateTheaterLayout(
  rows: string[],
  seatsPerRow: number,
  premiumRows: string[] = [],
  reclinerRows: string[] = [],
  bookedSeats: string[] = [],
  blockedSeats: string[] = [],
  standardPrice = 200,
  premiumPrice = 300,
  reclinerPrice = 450,
): Seat[] {
  const seats: Seat[] = []

  rows.forEach((row) => {
    for (let i = 1; i <= seatsPerRow; i++) {
      const seatId = `${row}${i}`
      let type: Seat["type"] = "standard"
      let price = standardPrice

      if (premiumRows.includes(row)) {
        type = "premium"
        price = premiumPrice
      } else if (reclinerRows.includes(row)) {
        type = "recliner"
        price = reclinerPrice
      }

      let status: Seat["status"] = "available"
      if (bookedSeats.includes(seatId)) {
        status = "booked"
      } else if (blockedSeats.includes(seatId)) {
        status = "blocked"
      }

      seats.push({
        id: seatId,
        row,
        number: i,
        type,
        status,
        price,
      })
    }
  })

  return seats
}

// Check if seats are adjacent
export function areSeatsAdjacent(seats: Seat[]): boolean {
  if (seats.length <= 1) return true

  // Group seats by row
  const seatsByRow = seats.reduce(
    (acc, seat) => {
      if (!acc[seat.row]) {
        acc[seat.row] = []
      }
      acc[seat.row].push(seat)
      return acc
    },
    {} as Record<string, Seat[]>,
  )

  // Check if seats in each row are adjacent
  for (const row in seatsByRow) {
    const rowSeats = seatsByRow[row]
    if (rowSeats.length <= 1) continue

    // Sort seats by number
    rowSeats.sort((a, b) => a.number - b.number)

    // Check if numbers are consecutive
    for (let i = 1; i < rowSeats.length; i++) {
      if (rowSeats[i].number !== rowSeats[i - 1].number + 1) {
        return false
      }
    }
  }

  return true
}

// Filter movies by various criteria
export function filterMovies(
  movies: any[],
  filters: {
    language?: string[]
    genre?: string[]
    format?: string[]
    rating?: number
    price?: [number, number] // min, max
  },
): any[] {
  return movies.filter((movie) => {
    // Filter by language
    if (filters.language && filters.language.length > 0) {
      if (!filters.language.includes(movie.language)) {
        return false
      }
    }

    // Filter by genre
    if (filters.genre && filters.genre.length > 0) {
      const hasMatchingGenre = movie.genres.some((genre: string) => filters.genre?.includes(genre))
      if (!hasMatchingGenre) {
        return false
      }
    }

    // Filter by format
    if (filters.format && filters.format.length > 0) {
      const hasMatchingFormat = movie.formats.some((format: string) => filters.format?.includes(format))
      if (!hasMatchingFormat) {
        return false
      }
    }

    // Filter by rating
    if (filters.rating !== undefined) {
      if (movie.rating < filters.rating) {
        return false
      }
    }

    // Filter by price
    if (filters.price) {
      const [minPrice, maxPrice] = filters.price
      if (movie.minPrice < minPrice || movie.minPrice > maxPrice) {
        return false
      }
    }

    return true
  })
}

// Sort movies by different criteria
export function sortMovies(
  movies: any[],
  sortBy: "popularity" | "rating" | "releaseDate" | "alphabetical",
  order: "asc" | "desc" = "desc",
): any[] {
  const sortedMovies = [...movies]

  switch (sortBy) {
    case "popularity":
      sortedMovies.sort((a, b) => a.popularity - b.popularity)
      break
    case "rating":
      sortedMovies.sort((a, b) => a.rating - b.rating)
      break
    case "releaseDate":
      sortedMovies.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime())
      break
    case "alphabetical":
      sortedMovies.sort((a, b) => a.title.localeCompare(b.title))
      break
  }

  return order === "desc" ? sortedMovies.reverse() : sortedMovies
}

// Local storage utilities
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    if (typeof window === 'undefined') return defaultValue
    
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error(`Error getting item ${key} from localStorage:`, error)
      return defaultValue
    }
  },
  
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return
    
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting item ${key} in localStorage:`, error)
    }
  },
  
  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage:`, error)
    }
  }
}

// Form validation utilities
export const validate = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },
  
  phone: (phone: string): boolean => {
    // Validates 10-digit Indian phone numbers
    const phoneRegex = /^[6-9]\d{9}$/
    return phoneRegex.test(phone)
  },
  
  name: (name: string): boolean => {
    return name.trim().length >= 2
  },
  
  password: (password: string): boolean => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    return passwordRegex.test(password)
  },
  
  creditCard: (cardNumber: string): boolean => {
    // Remove spaces and dashes
    const sanitized = cardNumber.replace(/[\s-]/g, '')
    // Check if it contains only digits and has valid length
    return /^\d{13,19}$/.test(sanitized) && luhnCheck(sanitized)
  }
}

// Luhn algorithm for credit card validation
function luhnCheck(cardNumber: string): boolean {
  let sum = 0
  let shouldDouble = false
  
  // Loop from right to left
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));
    
    if (shouldDouble) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    
    sum += digit
    shouldDouble = !shouldDouble
  }
  
  return sum % 10 === 0
}

// Generate a unique booking reference
export function generateBookingReference(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // Omitting confusing characters like I, O, 0, 1
  let reference = ''
  
  // Generate a 6-character reference
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    reference += chars[randomIndex]
  }
  
  return reference
}

// Calculate distance between theaters and user location
export function calculateDistance(
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number {
  // Haversine formula to calculate distance between two points on Earth
  const R = 6371 // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  const distance = R * c // Distance in km
  
  return parseFloat(distance.toFixed(1))
}

// Get user's current location
export function getUserLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'))
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    }
  })
}

// Format movie duration from minutes to hours and minutes
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours === 0) {
    return `${mins}m`
  } else if (mins === 0) {
    return `${hours}h`
  } else {
    return `${hours}h ${mins}m`
  }
}

