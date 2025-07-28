import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"

export default function Planes() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-olive-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-olive-900 sm:text-5xl">
              Planes adaptados a tu almazara
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Elige el plan que mejor se adapte a las necesidades de tu almazara, sin importar su tamaño
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Plan Básico */}
            <Card className="flex flex-col border-2 border-muted">
              <CardHeader>
                <CardTitle className="text-2xl">Básico</CardTitle>
                <div className="mt-4 flex items-baseline text-olive-900">
                  <span className="text-4xl font-bold tracking-tight">99€</span>
                  <span className="ml-1 text-xl font-semibold">/mes</span>
                </div>
                <CardDescription className="mt-2">
                  Ideal para pequeñas almazaras o productores individuales
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Hasta 3 usuarios</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Gestión de clientes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Pedidos y ventas básicos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Facturación automática</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Gestión de maquila básica</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Soporte por email</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Link href="/demo">Solicitar Demo</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Plan Profesional */}
            <Card className="flex flex-col border-2 border-olive-700 shadow-lg">
              <CardHeader className="bg-olive-50">
                <div className="text-center">
                  <span className="inline-block rounded-full bg-olive-700 px-3 py-1 text-xs font-medium text-white">
                    Más popular
                  </span>
                </div>
                <CardTitle className="text-2xl">Profesional</CardTitle>
                <div className="mt-4 flex items-baseline text-olive-900">
                  <span className="text-4xl font-bold tracking-tight">249€</span>
                  <span className="ml-1 text-xl font-semibold">/mes</span>
                </div>
                <CardDescription className="mt-2">Perfecto para almazaras medianas y cooperativas</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Hasta 10 usuarios</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Todas las funciones del plan Básico</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Gestión de maquila avanzada</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Control de trazabilidad completo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Dashboard con KPIs personalizables</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Portal de cliente</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Soporte telefónico prioritario</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Link href="/demo">Solicitar Demo</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Plan Enterprise */}
            <Card className="flex flex-col border-2 border-muted">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4 flex items-baseline text-olive-900">
                  <span className="text-4xl font-bold tracking-tight">Personalizado</span>
                </div>
                <CardDescription className="mt-2">Para grandes cooperativas y grupos empresariales</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Usuarios ilimitados</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Todas las funciones del plan Profesional</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Soporte multiempresa</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Integraciones personalizadas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Informes avanzados y BI</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Gestor de cuenta dedicado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-olive-700" />
                    <span>Soporte 24/7</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/contacto">Contactar con Ventas</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-olive-900">Preguntas frecuentes</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-olive-900">¿Hay algún coste de implementación?</h3>
                <p className="mt-2 text-muted-foreground">
                  Sí, existe un coste único de implementación que varía según el tamaño de la almazara y la complejidad
                  de la instalación. Este coste incluye la configuración inicial, migración de datos y formación del
                  personal.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-olive-900">¿Puedo cambiar de plan en cualquier momento?</h3>
                <p className="mt-2 text-muted-foreground">
                  Sí, puedes actualizar tu plan en cualquier momento. Si necesitas reducir tu plan, podrás hacerlo al
                  finalizar tu periodo de facturación actual.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-olive-900">¿Qué incluye el soporte técnico?</h3>
                <p className="mt-2 text-muted-foreground">
                  Todos los planes incluyen soporte técnico. El plan Básico ofrece soporte por email con respuesta en
                  24-48h. El plan Profesional incluye soporte telefónico prioritario en horario laboral. El plan
                  Enterprise ofrece soporte 24/7 y un gestor de cuenta dedicado.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-olive-900">¿Ofrecen formación para el personal?</h3>
                <p className="mt-2 text-muted-foreground">
                  Sí, todos los planes incluyen formación inicial. Los planes Profesional y Enterprise incluyen sesiones
                  de formación adicionales y materiales personalizados para tu equipo.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-olive-900">¿Puedo probar OLEUMEXTRA antes de decidirme?</h3>
                <p className="mt-2 text-muted-foreground">
                  Sí, ofrecemos una demo gratuita para que puedas probar todas las funcionalidades de OLEUMEXTRA
                  adaptadas a tu almazara. Solicítala desde nuestra web y un especialista te guiará en el proceso.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-olive-900">
                  ¿Qué pasa con mis datos si decido cambiar de proveedor?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Tus datos siempre te pertenecen. Si decides cambiar de proveedor, te facilitaremos la exportación de
                  todos tus datos en formatos estándar para que puedas migrarlos a otra plataforma.
                </p>
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
