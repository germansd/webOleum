import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-olive-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-lg">
            Transforma la gestión de tu almazara hoy mismo
          </h2>
          <p className="mt-4 text-lg text-white/90 drop-shadow-md">
            Solicita una demostración gratuita y descubre cómo OLEUMEXTRA puede optimizar todos los procesos de tu
            almazara.
          </p>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
              <Link href="/demo" className="group">
                Solicitar Demo Gratuita
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 bg-white/10"
            >
              <Link href="/contacto">Contactar con Ventas</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-white/10 -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-white/10 translate-x-1/2 -translate-y-1/2"></div>
    </section>
  )
}
