"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PageTransition } from "@/components/page-transition"
import { Badge } from "@/components/ui/badge"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    tipoAlmazara: "",
    mensaje: "",
    interes: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log(formData)
    setIsSubmitted(true)

    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        tipoAlmazara: "",
        mensaje: "",
        interes: "",
      })
    }, 3000)
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted to-background py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-olive-pattern opacity-5"></div>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="olive" className="mb-4">
              Contacto
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Contacto</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros y te responderemos lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Envíanos un mensaje</h2>
              <p className="mt-2 text-muted-foreground">
                Completa el formulario y nuestro equipo se pondrá en contacto contigo lo antes posible.
              </p>

              {isSubmitted && (
                <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-4 animate-fade-in">
                  <p className="text-green-800 font-medium">¡Mensaje enviado correctamente!</p>
                  <p className="text-green-700 text-sm">Nos pondremos en contacto contigo lo antes posible.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="border-input focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-input focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      placeholder="Tu teléfono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="border-input focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa / Almazara</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      placeholder="Nombre de tu empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="border-input focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoAlmazara">Tipo de almazara</Label>
                  <Select
                    value={formData.tipoAlmazara}
                    onValueChange={(value) => handleSelectChange("tipoAlmazara", value)}
                  >
                    <SelectTrigger id="tipoAlmazara" className="border-input focus:border-primary">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pequena">Pequeña (menos de 500.000 kg/año)</SelectItem>
                      <SelectItem value="mediana">Mediana (500.000 - 2.000.000 kg/año)</SelectItem>
                      <SelectItem value="grande">Grande (más de 2.000.000 kg/año)</SelectItem>
                      <SelectItem value="cooperativa">Cooperativa</SelectItem>
                      <SelectItem value="otra">Otra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>¿En qué estás interesado?</Label>
                  <RadioGroup
                    value={formData.interes}
                    onValueChange={(value) => handleSelectChange("interes", value)}
                    className="grid gap-2 sm:grid-cols-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="demo" id="demo" />
                      <Label htmlFor="demo">Solicitar una demo</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="presupuesto" id="presupuesto" />
                      <Label htmlFor="presupuesto">Pedir un presupuesto</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="informacion" id="informacion" />
                      <Label htmlFor="informacion">Más información</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="otro" id="otro" />
                      <Label htmlFor="otro">Otro</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="border-input focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white transition-all"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-primary">Información de contacto</h2>
              <p className="mt-2 text-muted-foreground">
                Puedes contactarnos directamente a través de los siguientes medios.
              </p>

              <div className="mt-8 space-y-6">
                <Card className="transition-transform duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="mt-1 text-muted-foreground">+34 900 123 456</p>
                      <p className="text-sm text-muted-foreground">Lunes a viernes, 9:00 - 18:00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-transform duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="mt-1 text-muted-foreground">info@oleumextra.com</p>
                      <p className="text-sm text-muted-foreground">Respondemos en 24-48 horas</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-transform duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Oficina central</h3>
                      <p className="mt-1 text-muted-foreground">
                        Parque Tecnológico de Andalucía
                        <br />
                        C/ Severo Ochoa, 27
                        <br />
                        29590 Málaga, España
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
