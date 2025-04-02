"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { TextReveal } from "@/components/ui/aceternity/text-reveal"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { Check, ChevronsRight, Popcorn, Sofa, Volume2 } from "lucide-react"

const premiumFeatures = [
  {
    id: 1,
    title: "Luxurious Recliner Seats",
    description:
      "Experience ultimate comfort with our premium leather recliners that provide ample legroom and personal space.",
    icon: <Sofa className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Dolby Atmos Sound",
    description: "Immerse yourself in multidimensional sound that flows all around you with breathtaking realism.",
    icon: <Volume2 className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1626126525134-fbbc07afb32c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Gourmet Food & Drinks",
    description: "Enjoy chef-crafted meals, premium cocktails, and artisanal snacks delivered right to your seat.",
    icon: <Popcorn className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=2070&auto=format&fit=crop",
  },
]

const premiumPlans = [
  {
    id: 1,
    name: "Premium",
    price: "$25",
    description: "Enhanced movie experience with premium seating",
    features: ["Premium recliner seats", "Priority entry", "Online booking fee waived", "10% off on concessions"],
  },
  {
    id: 2,
    name: "Premium Plus",
    price: "$40",
    description: "The ultimate luxury cinema experience",
    features: [
      "Luxurious leather recliners",
      "Dedicated butler service",
      "Complimentary popcorn & soda",
      "Exclusive lounge access",
      "Free parking",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Premium Family",
    price: "$90",
    description: "Premium experience for the whole family",
    features: [
      "4 Premium seats together",
      "Family snack combo included",
      "Priority entry",
      "Free parking",
      "10% off on merchandise",
    ],
  },
]

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative h-[70vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Cinema Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <TextReveal
              text="Elevate Your Cinema Experience"
              className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl"
            />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
              Indulge in luxury, comfort, and state-of-the-art technology for an unforgettable movie experience.
            </p>
            <Button size="lg" className="gap-2">
              Explore Premium Options
              <ChevronsRight className="w-4 h-4" />
            </Button>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Premium Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our premium theaters offer the best in comfort, technology, and service for the ultimate movie experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {premiumFeatures.map((feature) => (
              <CardContainer key={feature.id} className="py-0">
                <CardBody className="bg-card border rounded-xl overflow-hidden">
                  <CardItem translateZ="50" className="w-full">
                    <div className="relative w-full h-48">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">{feature.icon}</div>
                    </div>
                  </CardItem>
                  <CardItem translateZ="60" className="p-6">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </section>

        <section className="py-16 bg-black/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Premium Plans</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the premium experience that suits your preferences and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {premiumPlans.map((plan) => (
                <Card key={plan.id} className={`relative overflow-hidden ${plan.popular ? "border-primary" : ""}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <Badge className="rounded-none rounded-bl-lg">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold mb-2">{plan.price}</div>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}>
                      Select {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Spotlight className="p-12 rounded-none">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Join Our Premium Membership</h2>
            <p className="text-muted-foreground mb-8">
              Get exclusive access to premium screenings, special events, and members-only offers with our Premium
              Membership program.
            </p>
            <Button size="lg">Become a Premium Member</Button>
          </div>
        </Spotlight>
      </main>

      <Footer />
    </div>
  )
}

