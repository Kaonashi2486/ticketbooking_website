"use client"

import { ExpandableCard } from "@/components/ui/aceternity/expandable-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TextReveal } from "@/components/ui/aceternity/text-reveal"
import { Clock, CreditCard, Percent, Tag, Ticket } from "lucide-react"

const offers = [
  {
    id: 1,
    title: "Weekend Special",
    discount: "20% OFF",
    code: "WEEKEND20",
    description: "Get 20% off on all movie tickets booked for weekend shows. Valid for all theaters and movies.",
    validUntil: "May 31, 2024",
    icon: <Clock className="w-5 h-5 text-primary" />,
  },
  {
    id: 2,
    title: "Credit Card Offer",
    discount: "15% OFF",
    code: "CARD15",
    description: "Get 15% off when you pay with any credit card. Maximum discount of $20 per transaction.",
    validUntil: "June 15, 2024",
    icon: <CreditCard className="w-5 h-5 text-primary" />,
  },
  {
    id: 3,
    title: "First Time User",
    discount: "50% OFF",
    code: "FIRST50",
    description: "New to CineTix? Get 50% off on your first booking. Maximum discount of $15.",
    validUntil: "Ongoing",
    icon: <Ticket className="w-5 h-5 text-primary" />,
  },
  {
    id: 4,
    title: "Group Booking",
    discount: "25% OFF",
    code: "GROUP25",
    description: "Book 5 or more tickets and get 25% off on the total amount. Valid for all movies.",
    validUntil: "July 10, 2024",
    icon: <Percent className="w-5 h-5 text-primary" />,
  },
]

export function Offers() {
  return (
    <section className="py-8">
      <div className="text-center mb-10">
        <TextReveal text="Exclusive Offers" className="text-2xl font-bold mb-4" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Take advantage of our special promotions and discounts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <ExpandableCard
            key={offer.id}
            className="h-auto"
            expandedClassName="md:col-span-2"
            cardTitle={
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {offer.icon}
                  <h3 className="font-semibold">{offer.title}</h3>
                </div>
                <Badge variant="outline" className="text-primary border-primary">
                  {offer.discount}
                </Badge>
              </div>
            }
            cardContent={
              <div className="space-y-4">
                <p className="text-muted-foreground">{offer.description}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span className="font-medium">Code: {offer.code}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Valid until: {offer.validUntil}</span>
                  </div>
                </div>
                <Button size="sm">Apply Offer</Button>
              </div>
            }
          />
        ))}
      </div>
    </section>
  )
}

