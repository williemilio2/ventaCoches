import { FileText, Shield, CreditCard, RefreshCw } from "lucide-react"

const services = [
  {
    number: "1",
    title: "Elegimos los coches",
    description: "Solo trabajamos con coches que realmente merecen la pena.",
  },
  {
    number: "2",
    title: "Los revisamos",
    description: "Comprobamos que estén en buen estado y listos para circular. ",
  },
  {
    number: "3",
    title: "Lo ves y sin compromiso",
    description: "Te enseñamos el coche para que lo revises con calma y nos preguntes todo lo que necesites",
  },
  {
    number: "4",
    title: "Te ayudamos a comprar",
    description: "Financiación, gestión y entrega. Todo sencillo.",
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Cómo comprar tu coche de segunda mano en Alicante?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un proceso claro, rápido y sin complicaciones para que encuentres tu coche sin perder tiempo. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 shadow-sm group-hover:scale-105">
                <span className="text-2xl font-black text-primary tracking-tight leading-none">
                  {service.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
