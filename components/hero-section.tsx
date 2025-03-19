import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden border-2 border-red-500">
      <div className="container mx-auto px-4 border-2 border-blue-500">
        {/* Parent container with relative positioning */}
        <div className="relative flex flex-col md:block">
          {/* Content section with fixed widths at each breakpoint */}
          <div className="w-full md:w-[320px] lg:w-[480px] py-12 md:py-16 lg:py-24">
            <div className="max-w-[480px] mx-auto md:mx-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Main Headline Goes Here
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                Supporting subheading that explains your value proposition
              </h2>
              <p className="text-base text-muted-foreground mb-8">
                More detailed description of your product or service. This text helps visitors understand what you offer
                and why they should care about it.
              </p>

              {/* CTA Button */}
              <div className="mb-8">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-sm text-muted-foreground">
                * Disclaimer text goes here. This could include terms and conditions, limitations, or other important
                notes.
              </p>
            </div>
          </div>

          {/* Image section with absolute positioning for tablet and desktop */}
          <div className="w-full md:absolute md:bottom-0 md:right-0 flex items-end justify-center md:justify-end">
            {/* Desktop: 600x450px - Same image as tablet, just larger */}
            <div className="relative hidden md:hidden lg:block">
              <Image
                src="/placeholder-1.svg?height=450&width=600&text=Desktop/Tablet Image"
                alt="Hero image"
                width={600}
                height={450}
                className="object-cover"
                priority
              />
            </div>
            {/* Tablet: 400x300px - Same image as desktop, just smaller */}
            <div className="relative hidden md:block lg:hidden">
              <Image
                src="/placeholder-1.svg?height=300&width=400&text=Desktop/Tablet Image"
                alt="Hero image"
                width={400}
                height={300}
                className="object-cover"
                priority
              />
            </div>
            {/* Mobile: 320x240px - Different image for mobile */}
            <div className="relative md:hidden">
              <Image
                src="/placeholder-2.svg?height=240&width=320&text=Mobile Image"
                alt="Hero image"
                width={320}
                height={240}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

