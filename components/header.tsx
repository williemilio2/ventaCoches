"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">CARBOOM</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </Link>
            <Link href="#catalogo" className="text-muted-foreground hover:text-foreground transition-colors">
              Catálogo
            </Link>
            <Link href="#sobre-nosotros" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="#contacto">
              <Button>Contactar</Button>
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#servicios"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#catalogo"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo
              </Link>
              <Link
                href="#sobre-nosotros"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Contactar</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
