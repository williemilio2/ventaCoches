"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    coche: "",
    presupuesto: "",
    financiacion: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `¡Hola! Soy ${formData.name}.

    Tengo interés en: ${formData.coche}
    ${formData.presupuesto != "" ? `Mi presupuesto és: ${formData.presupuesto}` : ""}
    ${formData.financiacion != "" ? `Necesita financiación: ${formData.financiacion}` : ""}

  Mi teléfono de contacto es: ${formData.phone}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/34653890763?text=${encodedMessage}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <strong className="text-primary">¿Buscas tu próximo coche? </strong>Te ayudamos a encontrarlo sin complicaciones 
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dinos qué coche tienes en mente y nosotros nos encargamos de encontrar las mejores opciones para ti.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            <strong><i>Sin perder tiempo, sin riesgos y con total transparencia.</i></strong>
          </p>
          <div className="relative">
          <p className="absolute -top-0 right-0 text-sm px-4 py-1 text-primary font-bold text-shadow-md">
            Te respondemos en menos de 24h
          </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="600 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Qué coche buscas</Label>
                  <Input
                    id="coche"
                    name="coche"
                    type="text"
                    placeholder="marca, modelo,km"
                    value={formData.coche}
                    onChange={handleChange}
                    required
                  />
              </div>
                            <div className="space-y-2">
                <Label htmlFor="message">Presupuesto</Label>
                  <Input
                    id="presupuesto"
                    name="presupuesto"
                    type="number"
                    placeholder="Opcional"
                    value={formData.presupuesto}
                    onChange={handleChange}
                  />
              </div>
                            <div className="space-y-2">
                <Label htmlFor="message">Necesitas financiación</Label>
                  <Input
                    id="financiacion"
                    name="financiacion"
                    type="text"
                    placeholder="Opcional"
                    value={formData.financiacion}
                    onChange={handleChange}
                  />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Encontrar mi coche
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/34653890763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors bg-green-100"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">+34 653 890 763 (Contacta tocando aqui)</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+34 653 890 763</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">carboom.contacto@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">España</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">
                ¿Tienes dudas?
              </h4>
              <p className="text-muted-foreground text-sm">
                Estaré encantado de resolver cualquier pregunta personalmente. 
                No dudes en contactarme a través de WhatsApp para una atención inmediata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
