import Image from "next/image"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CasosDeUso() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-olive-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-olive-900 sm:text-5xl">Casos de uso</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Descubre cómo OLEUMEXTRA puede transformar diferentes tipos de almazaras y cooperativas
            </p>
            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 group bg-transparent"
              >
                <Link href="/demo">
                  Solicitar Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12">
            {/* Caso 1 - Cooperativas */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-olive-900">Cooperativas Olivareras</h2>
                <p className="mt-2 text-lg font-medium text-olive-700">Gestión de múltiples socios</p>
                <div className="mt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Las cooperativas con cientos de socios necesitan un sistema robusto que pueda manejar grandes
                    volúmenes de entregas durante la campaña y gestionar las liquidaciones de forma precisa.
                  </p>
                  <h3 className="text-xl font-bold text-olive-900">Desafíos típicos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Gestionar eficientemente el gran volumen de entregas durante la campaña</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Reducir errores en la facturación y liquidaciones a socios</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Mejorar la trazabilidad para cumplir con normativas de exportación</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold text-olive-900">Solución OLEUMEXTRA</h3>
                  <p className="text-muted-foreground">
                    Módulo especializado de gestión de maquila con integración de básculas electrónicas y análisis de
                    laboratorio en tiempo real.
                  </p>
                  <h3 className="text-xl font-bold text-olive-900">Beneficios esperados</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Reducción significativa en errores de facturación</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Ahorro considerable en tareas administrativas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Trazabilidad completa para certificaciones de calidad</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px]">
                  <Image
                    src="/multiempresa.png"
                    alt="Cooperativa Olivarera"
                    fill
                                                         className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"

                  />
                </div>
              </div>
            </div>

            {/* Caso 2 - Almazaras familiares */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="order-2 flex flex-col justify-center md:order-1">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Almazara familiar"
                    fill
                                                        className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"

                  />
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <h2 className="text-3xl font-bold tracking-tight text-olive-900">Almazaras Familiares</h2>
                <p className="mt-2 text-lg font-medium text-olive-700">Digitalización y crecimiento</p>
                <div className="mt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Las empresas familiares que buscan digitalizar sus procesos para mejorar el servicio de maquila a
                    terceros y expandir su negocio de venta directa.
                  </p>
                  <h3 className="text-xl font-bold text-olive-900">Desafíos típicos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Mejorar la comunicación con clientes de maquila sobre el estado de su aceite</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Optimizar la gestión de depósitos y almacenamiento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Integrar la tienda online con el sistema de gestión</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold text-olive-900">Solución OLEUMEXTRA</h3>
                  <p className="text-muted-foreground">
                    Portal de cliente personalizado y integración completa con tienda online, permitiendo una gestión
                    unificada de inventario y pedidos.
                  </p>
                  <h3 className="text-xl font-bold text-olive-900">Beneficios esperados</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Reducción significativa en consultas telefónicas sobre estado de maquilas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Aumento en ventas online gracias a la gestión integrada</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Optimización de la capacidad de almacenamiento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Caso 3 - Aceites con DOP */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-olive-900">Aceites con Denominación de Origen</h2>
                <p className="mt-2 text-lg font-medium text-olive-700">Trazabilidad y certificaciones</p>
                <div className="mt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Empresas con Denominación de Origen Protegida que necesitan un sistema que garantice la trazabilidad
                    completa y facilite los procesos de certificación de calidad.
                  </p>
                  <h3 className="text-xl font-bold text-olive-900">Desafíos típicos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Garantizar la trazabilidad desde el olivar hasta el envasado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Facilitar los procesos de auditoría para la DOP</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Mejorar el análisis de rendimientos por parcela y variedad</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold text-olive-900">Solución OLEUMEXTRA</h3>
                  <p className="text-muted-foreground">
                    Trazabilidad avanzada con geolocalización de parcelas y registro detallado de todos los procesos
                    productivos.
                  </p>
                  <h3 className="text-xl font-bold text-olive-900">Beneficios esperados</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Reducción drástica en el tiempo dedicado a preparar auditorías de calidad</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Identificación de parcelas con mayor rendimiento para aumentar productividad</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Facilita la obtención de certificaciones adicionales</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Aceites con Denominación de Origen"
                    fill
                                                          className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
