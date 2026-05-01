"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

import cars from '@/data/coches.json';

export function CarCatalog() {
  const [showButton, setShowButton] = useState(true)

useEffect(() => {
  const handleScroll = () => {
    const section = document.getElementById("catalogo")
    if (!section) return

    const rect = section.getBoundingClientRect()

    setShowButton(rect.top < window.innerHeight && rect.bottom > 500)
  }

  window.addEventListener("scroll", handleScroll)
  handleScroll()

  return () => window.removeEventListener("scroll", handleScroll)
}, [])

  return (
    <section id="catalogo" className="py-20 bg-background relative">
      {/* Botón flotante SOLO dentro de esta sección */}
      {showButton && (
        <a
          href="#sobre-nosotros"
          className="fixed bottom-6 right-6 md:bottom-6 md:right-6 bottom-20 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:scale-110 hover:bg-primary/90 transition-all group z-50"
        >
          <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      )}

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros coches
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubre nuestra selección de coches revisados, con garantía y listos para que te los lleves sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cars.map((car) => (
            <CarCard key={car.link} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CarCard({ car }: { car: typeof cars[0] }) {
  const handleOpenLink = () => {
    window.open(car.link, "_blank")
  }

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.image}
          alt={`${car.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={handleOpenLink}
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-muted-foreground">{car.title}</p>
          </div>
          <p className="text-2xl font-bold text-primary">
            {car.price}
          </p>
        </div>

        <Button
          className="w-full gap-2 cursor-pointer"
          onClick={handleOpenLink}
        >
          <MessageCircle className="h-4 w-4" />
          Consultar
        </Button>
      </div>
    </div>
  )
}
