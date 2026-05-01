import Link from "next/link"
import { Car } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Car className="h-8 w-8" />
              <span className="text-2xl font-bold">CARBOOM</span>
            </Link>
            <p className="text-background/70">
              Tú eliges el coche. Nosotros hacemos que comprarlo sea fácil.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#servicios" className="text-background/70 hover:text-background transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#catalogo" className="text-background/70 hover:text-background transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="#sobre-nosotros" className="text-background/70 hover:text-background transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-background/70 hover:text-background transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-background/70">
              <li>WhatsApp: +34 653 890 763</li>
              <li>Email: carboom.contacto@gmail.com</li>
              <li>España</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© {new Date().getFullYear()} CARBOOM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
