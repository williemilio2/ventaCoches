import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, BadgeCheck } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <video 
      src={`/videoFondo.mp4`}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/do.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BadgeCheck className="h-4 w-4" />
            Tu concesionario de confianza
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Encuentra tu coche{" "}
            <span className="text-primary">perfecto</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Coches de segunda mano en Alicante revisados, con garantía y listos para entrega
inmediata. Solo seleccionamos unidades que merecen la pena para que compres fácil, sin
complicaciones y con todo claro desde el principio
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#catalogo">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                Ver coches disponibles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contacto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Encontrar mi coche
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Garantía incluida</h3>
              <p className="text-sm text-muted-foreground">Todos nuestros coches de segunda mano incluyen garantía para tu tranquilidad</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Coches revisados</h3>
              <p className="text-sm text-muted-foreground">Vehículos revisados y listos para circular desde el primer día</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <BadgeCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Sin sorpresas</h3>
              <p className="text-sm text-muted-foreground">Información clara y transparente en cada coche </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <BadgeCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Financiación a medida</h3>
              <p className="text-sm text-muted-foreground">Opciones de financiación adaptadas a ti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
