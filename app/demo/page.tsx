"use client"

import type React from "react"
import { useState } from "react"
import { CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Demo() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    tipoAlmazara: "",
    numUsuarios: "",
    comentarios: "",
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
        numUsuarios: "",
        comentarios: "",
      })
    }, 3000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-olive-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-olive-900 sm:text-5xl">Solicita una demo gratuita</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Descubre cómo OLEUMEXTRA puede transformar la gestión de tu almazara con una demostración personalizada
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-olive-900">¿Qué incluye nuestra demo?</h2>
              <p className="mt-2 text-muted-foreground">
                Te ofrecemos una demostración completa y personalizada para tu almazara, sin ningún compromiso.
              </p>

              <div className="mt-8 space-y-6">
                <Card>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Presentación personalizada</h3>
                      <p className="mt-1 text-muted-foreground">
                        Un especialista te mostrará todas las funcionalidades de OLEUMEXTRA adaptadas a las necesidades
                        específicas de tu almazara.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Acceso a entorno de pruebas</h3>
                      <p className="mt-1 text-muted-foreground">
                        Te proporcionaremos acceso a un entorno de pruebas durante 14 días para que puedas explorar
                        todas las funcionalidades con tu equipo.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Sesión de preguntas y respuestas</h3>
                      <p className="mt-1 text-muted-foreground">
                        Resuelve todas tus dudas con nuestro equipo técnico y comercial, que te asesorará sobre la mejor
                        configuración para tu almazara.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium">Propuesta personalizada</h3>
                      <p className="mt-1 text-muted-foreground">
                        Recibirás una propuesta adaptada a las necesidades específicas de tu almazara, incluyendo plan
                        de implementación y formación.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-olive-100 flex items-center justify-center">
                  <div className="text-olive-700 text-center">
                    <CalendarDays className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Demo personalizada</p>
                    <p className="text-sm">Solicita tu demostración</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="h-5 w-5 text-olive-700" />
                    <h2 className="text-xl font-bold">Solicita tu demo gratuita</h2>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Completa el formulario y nos pondremos en contacto contigo para programar tu demo personalizada.
                  </p>

                  {isSubmitted && (
                    <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-4">
                      <p className="text-green-800 font-medium">¡Solicitud enviada!</p>
                      <p className="text-green-700 text-sm">Te contactaremos pronto para programar tu demo.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
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
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        placeholder="Tu teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
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
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tipoAlmazara">Tipo de almazara</Label>
                      <Select
                        value={formData.tipoAlmazara}
                        onValueChange={(value) => handleSelectChange("tipoAlmazara", value)}
                      >
                        <SelectTrigger id="tipoAlmazara">
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
                      <Label htmlFor="numUsuarios">Número aproximado de usuarios</Label>
                      <Select
                        value={formData.numUsuarios}
                        onValueChange={(value) => handleSelectChange("numUsuarios", value)}
                      >
                        <SelectTrigger id="numUsuarios">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1-3 usuarios</SelectItem>
                          <SelectItem value="4-10">4-10 usuarios</SelectItem>
                          <SelectItem value="11-20">11-20 usuarios</SelectItem>
                          <SelectItem value="21+">Más de 20 usuarios</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comentarios">Comentarios adicionales</Label>
                      <Textarea
                        id="comentarios"
                        name="comentarios"
                        placeholder="Cuéntanos más sobre tus necesidades específicas"
                        value={formData.comentarios}
                        onChange={handleChange}
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? "Enviando..." : "Solicitar Demo"}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      Al enviar este formulario, aceptas nuestra política de privacidad y términos de uso.
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 space-y-6">
                <h3 className="text-lg font-medium text-olive-900">Lo que dicen nuestros clientes</h3>
                <Card>
                  <CardContent className="p-6">
                    <p className="italic text-muted-foreground">
                      "La demo de OLEUMEXTRA fue muy esclarecedora. En solo una hora entendimos cómo podía transformar
                      nuestra gestión diaria. Tres meses después de implementarlo, no podríamos estar más satisfechos."
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        JR
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Juan Ramírez</p>
                        <p className="text-xs text-muted-foreground">Gerente, Almazara La Solana</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
