import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Solo coches que cumplen con nuestros estándares",
  "Toda la información clara desde el primer momento",
  "Sin líos, sin vueltas innecesarias",
  "Hablando claro y resolviendo cualquier duda",
  "Trato directo, coches claros y decisiones fáciles",
]

export function About() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Detrás de <strong className="text-primary">CARBOOM</strong> está{" "}
              <strong className="text-foreground">José</strong>, apasionado del mundo del motor y con experiencia en la
              selección y gestión de vehículos.
            </p>

            <p className="text-muted-foreground mb-6">
              Desde el principio tuvo claro algo: comprar coche no debería ser complicado ni una pérdida de tiempo.
            </p>

            <p className="text-muted-foreground mb-6">
              Por eso, en <strong className="text-primary">CARBOOM</strong> se seleccionan coches que realmente merecen la pena, se revisan y
              se presentan con total transparencia, para que sepas exactamente qué estás comprando.
            </p>

            <p className="text-muted-foreground mb-8">
              Aquí no hay historias raras ni procesos complicados. Solo coches bien elegidos y un proceso claro de principio a fin.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-[url('/logo.png')] bg-cover bg-center flex items-center justify-center overflow-hidden">
            </div>
            
            <div>{/*
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <p className="text-3xl font-bold">+5</p>
                <p className="text-xs">años exp.</p>
              </div>
            </div>*/}</div> 
          </div>
        </div>
      </div>
    </section>
  )
}
