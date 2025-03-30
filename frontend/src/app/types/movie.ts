// Movie and theater related types for the booking application

export type Movie = {
    id: string
    title: string
    description: string
    posterUrl: string
    bannerUrl: string
    language: string
    subtitles: string[]
    duration: number // in minutes
    releaseDate: string
    endDate: string
    certification: "U" | "UA" | "A" | "S" // Indian movie certifications
    genres: string[]
    formats: string[] // 2D, 3D, IMAX, etc.
    cast: Person[]
    crew: Person[]
    rating: number // out of 5
    votes: number
    popularity: number
    trailerUrl?: string
  }
  
  export type Person = {
    id: string
    name: string
    role: string
    imageUrl?: string
  }
  
  export type Theater = {
    id: string
    name: string
    address: string
    city: string
    location: {
      latitude: number
      longitude: number
    }
    facilities: string[] // Parking, Food, etc.
    screens: Screen[]
  }
  
  export type Screen = {
    id: string
    name: string
    capacity: number
    format: string[] // 2D, 3D, IMAX, etc.
  }
  
  export type Showtime = {
    id: string
    movieId: string
    theaterId: string
    screenId: string
    startTime: string
    endTime: string
    date: string
    format: string
    language: string
    basePrice: number
    premiumPrice: number
    reclinerPrice: number
    availableSeats: number
    totalSeats: number
  }
  
  export type Booking = {
    id: string
    reference: string
    userId: string
    showtimeId: string
    movieId: string
    theaterId: string
    seats: Seat[]
    totalAmount: number
    paymentStatus: "pending" | "completed" | "failed" | "refunded"
    bookingStatus: "confirmed" | "cancelled"
    bookingTime: string
    qrCode?: string
  }
  
  export type Seat = {
    id: string
    row: string
    number: number
    type: "standard" | "premium" | "recliner"
    status: "available" | "selected" | "booked" | "blocked"
    price: number
  }
  
  export type User = {
    id: string
    name: string
    email: string
    phone: string
    preferences?: {
      favoriteTheaters: string[]
      favoriteGenres: string[]
      preferredLanguages: string[]
    }
    bookingHistory: string[] // Booking IDs
  }
  
  export type PaymentMethod = {
    id: string
    type: "credit_card" | "debit_card" | "upi" | "wallet" | "net_banking"
    name: string
    lastUsed?: string
    isDefault: boolean
    details: {
      cardNumber?: string
      cardHolderName?: string
      expiryDate?: string
      upiId?: string
      walletName?: string
      bankName?: string
    }
  }
  
  export type Offer = {
    id: string
    code: string
    description: string
    discountType: "percentage" | "fixed"
    discountValue: number
    minAmount?: number
    maxDiscount?: number
    validFrom: string
    validTo: string
    applicableOn: {
      movies?: string[]
      theaters?: string[]
      paymentMethods?: string[]
    }
    termsAndConditions: string[]
  }
  
  