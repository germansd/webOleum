import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Clock, Database, FileText, Shield, Users, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { FeatureCard } from "@/components/feature-card"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background py-20 md:py-28">
        <div className="absolute inset-0 bg-olive-pattern opacity-5"></div>
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center">
             
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                La <span className="gradient-text">transformación digital</span> de tu almazara comienza aquí
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Un CRM diseñado específicamente para la realidad del sector oleícola
              </p>
              <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 group shadow-md text-black">
                  <Link href="/funcionalidades">
                    Ver Funcionalidades
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/demo">Solicitar Demo</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <p className="text-sm font-medium text-muted-foreground">Especializado para:</p>
                <div className="flex flex-wrap gap-6">
                  {["Cooperativas", "Almazaras", "Productores"].map((name) => (
                    <div key={name} className="text-muted-foreground/70 text-sm font-medium">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative h-[450px] w-full overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 z-10"></div>
                <Image
                  src="dashboard.png"
                  alt="Dashboard OLEUMEXTRA"
                  fill
                  className="object-cover object-left"
                  priority
                />

                {/* Floating elements */}
                <div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20 animate-fade-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Producción completada</p>
                      <p className="text-xs text-muted-foreground">Lote #A2984</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20 animate-fade-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs font-medium">Rendimiento</p>
                      <p className="text-xs text-green-600 font-medium">+12.5% vs anterior</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-10 -right-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Funcionalidades
            </Badge>
            <h2 className="section-title">Módulos especializados para el sector oleícola</h2>
            <p className="section-subtitle">
              OLEUMEXTRA integra todas las herramientas que necesita tu almazara en una única plataforma
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Users}
              title="Gestión de Clientes"
              description="Centraliza toda la información de tus clientes, historial de compras y preferencias para ofrecer un servicio personalizado."
            />
            <FeatureCard
              icon={FileText}
              title="Pedidos y Ventas"
              description="Gestiona todo el ciclo de venta desde el pedido hasta la entrega, con seguimiento en tiempo real."
            />
            <FeatureCard
              icon={Database}
              title="Gestión de Maquila"
              description="Módulo especializado para el control de la maquila, único en el sector oleícola, con trazabilidad completa."
            />
            <FeatureCard
              icon={Shield}
              title="Control de Trazabilidad"
              description="Seguimiento completo de lotes, productos y calidades desde la recepción de la aceituna hasta el envasado."
            />
            <FeatureCard
              icon={BarChart3}
              title="Dashboard con KPIs"
              description="Visualiza en tiempo real los indicadores clave de tu almazara para tomar decisiones basadas en datos."
            />
            <FeatureCard
              icon={Clock}
              title="Facturación Automática"
              description="Automatiza la generación de facturas y albaranes, ahorrando tiempo y reduciendo errores."
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="group bg-transparent">
              <Link href="/funcionalidades">
                Ver todas las funcionalidades
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ventajas Section */}
      <section className="bg-gradient-section py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="olive" className="mb-4">
              Beneficios
            </Badge>
            <h2 className="section-title">Ventajas que transforman tu almazara</h2>
            <p className="section-subtitle">
              Descubre cómo OLEUMEXTRA optimiza cada aspecto de la gestión de tu almazara
            </p>
          </div>

          <div className="mt-16">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Trabajador de almazara usando tablet"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />

                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-10 -right-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl"></div>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="group">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="cursor-pointer">
                        <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                          Automatización de procesos
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          Reduce hasta un 40% el tiempo dedicado a tareas administrativas gracias a la automatización de
                          procesos repetitivos.
                        </p>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="text-sm font-semibold">Automatización inteligente</h4>
                          <p className="text-sm text-muted-foreground">
                            Nuestros algoritmos aprenden de tus procesos para optimizarlos continuamente.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <div className="group">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="cursor-pointer">
                        <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                          Control total de operaciones
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          Visualiza en tiempo real el estado de tu almazara: desde la recepción de aceituna hasta la
                          expedición de producto terminado.
                        </p>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="text-sm font-semibold">Monitorización en tiempo real</h4>
                          <p className="text-sm text-muted-foreground">
                            Accede a la información desde cualquier dispositivo, en cualquier momento.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <div className="group">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="cursor-pointer">
                        <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                          Trazabilidad completa
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          Cumple con todas las normativas de seguridad alimentaria gracias al seguimiento detallado de
                          cada lote de producción.
                        </p>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="text-sm font-semibold">Certificaciones garantizadas</h4>
                          <p className="text-sm text-muted-foreground">
                            Facilita las auditorías y obtén certificaciones de calidad con un solo clic.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <div className="group">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="cursor-pointer">
                        <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                          Informes personalizados
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          Genera informes a medida que te permiten analizar rendimientos, calidades y rentabilidad por
                          cliente o campaña.
                        </p>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="text-sm font-semibold">Análisis avanzado</h4>
                          <p className="text-sm text-muted-foreground">
                            Utiliza inteligencia de negocio para tomar decisiones estratégicas basadas en datos.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-section py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="section-title">Resultados que puedes esperar</h2>
            <p className="section-subtitle">
              Beneficios comprobados de implementar un sistema de gestión especializado
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">95%</div>
              <p className="mt-2 text-muted-foreground">Reducción de errores administrativos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">40%</div>
              <p className="mt-2 text-muted-foreground">Ahorro en tiempo de gestión</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">30%</div>
              <p className="mt-2 text-muted-foreground">Aumento en productividad</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <p className="mt-2 text-muted-foreground">Soporte técnico especializado</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
