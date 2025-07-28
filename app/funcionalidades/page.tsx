import Image from "next/image"
import { BarChart3, Clock, Database, FileText, Layers, Shield, Users, Workflow } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Funcionalidades() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-olive-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-olive-900 sm:text-5xl">
              Funcionalidades diseñadas para almazaras
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Descubre todas las herramientas que OLEUMEXTRA pone a tu disposición para optimizar la gestión de tu
              almazara
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 mt-8 bg-transparent"
            >
              <Link href="/casos-de-uso">
                Ver todos los casos de uso
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Módulos Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-16">
            {/* Gestión de clientes */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-olive-100 text-olive-700">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-olive-900">Gestión de clientes</h2>
                <div className="mt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Centraliza toda la información de tus clientes en un único lugar, facilitando el acceso a su
                    historial completo y mejorando la relación con ellos.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Ficha completa de cliente con datos de contacto, fiscales y preferencias</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Historial de pedidos, facturas y comunicaciones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Segmentación de clientes por volumen, tipo de servicio o ubicación</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Portal de cliente para consulta de estado de pedidos y maquilas</span>
                    </li>
                  </ul>
                </div>
              </div>
                <div className="relative flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px] flex items-center justify-center bg-white">
                  <Image
                  src="/clientes.png"
                  alt="Gestión de clientes OLEUMEXTRA"
                  fill
                  className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Pedidos y ventas */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="order-2 flex flex-col justify-center md:order-1">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px] flex items-center justify-center bg-white">
                
                  <Image
                    src="/pedidos1.png"
                    alt="Pedidos y ventas OLEUMEXTRA"
                    fill
                   className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-olive-100 text-olive-700">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-olive-900">Pedidos y ventas</h2>
                <div className="mt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Gestiona todo el ciclo de venta desde la creación del pedido hasta la entrega del producto, con un
                    seguimiento detallado de cada fase.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Creación rápida de pedidos con catálogo de productos personalizable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Gestión de estados de pedido: pendiente, en preparación, listo para envío, entregado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Integración con sistemas de envío y logística</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Análisis de ventas por producto, cliente o temporada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Facturación automática */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-olive-100 text-olive-700">
                  <Clock className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-olive-900">Facturación automática</h2>
                <div className="mt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Automatiza la generación de facturas y albaranes, ahorrando tiempo y reduciendo errores en el
                    proceso de facturación.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Generación automática de facturas a partir de albaranes o pedidos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Facturación periódica para clientes recurrentes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Envío automático de facturas por email</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Integración con software contable y fiscal</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px] flex items-center justify-center bg-white">
               
                  <Image
                    src="/facturas.png"
                    alt="Facturación automática OLEUMEXTRA"
                    fill
                                    className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"

                  />
                </div>
              </div>
            </div>

            {/* Gestión de maquila */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="order-2 flex flex-col justify-center md:order-1">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px] flex items-center justify-center bg-white">

                  <Image
                    src="/maquila.png"
                    alt="Gestión de maquila OLEUMEXTRA"
                    fill
                  className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"

                  />
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-olive-100 text-olive-700">
                  <Database className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-olive-900">Gestión de maquila</h2>
                <div className="mt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Módulo especializado para el control de la maquila, único en el sector oleícola, que permite
                    gestionar todo el proceso desde la recepción de la aceituna hasta la entrega del aceite.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Registro de entradas de aceituna con pesaje y análisis de calidad</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Cálculo automático de rendimientos y liquidaciones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Gestión de depósitos y almacenamiento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Trazabilidad completa desde la parcela hasta el envasado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Control de productos y trazabilidad */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-olive-100 text-olive-700">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-olive-900">
                  Control de productos y trazabilidad
                </h2>
                <div className="mt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Seguimiento detallado de cada lote de producción, garantizando la trazabilidad completa y el
                    cumplimiento de las normativas de seguridad alimentaria.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Gestión de lotes con información detallada de origen y procesos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Control de calidades y análisis organolépticos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Gestión de stock y ubicaciones en almacén</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Generación de etiquetas con códigos QR para trazabilidad</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px]">
                  <Image
                    src="/productos.png"
                    alt="Control de productos y trazabilidad OLEUMEXTRA"
                    fill
                                     className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"

                  />
                </div>
              </div>
            </div>

            {/* Dashboard con KPIs */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="order-2 flex flex-col justify-center md:order-1">
                                <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px]">

                  <Image
                    src="/dashboard1.png"
                    alt="Dashboard con KPIs OLEUMEXTRA"
                    fill
                                      className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"

                  />
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-olive-100 text-olive-700">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-olive-900">Dashboard con KPIs</h2>
                <div className="mt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Visualiza en tiempo real los indicadores clave de tu almazara para tomar decisiones basadas en datos
                    y mejorar la rentabilidad.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Paneles personalizables según rol y necesidades</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Gráficos interactivos de producción, ventas y rendimientos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Comparativas entre campañas o periodos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Alertas y notificaciones automáticas basadas en umbrales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Gestión de usuarios y roles */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-olive-100 text-olive-700">
                  <Layers className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-olive-900">Gestión de usuarios y roles</h2>
                <div className="mt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Configura diferentes niveles de acceso según las responsabilidades de cada usuario, garantizando la
                    seguridad de la información.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Creación de roles personalizados con permisos específicos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Registro de actividad y auditoría de cambios</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Autenticación segura con doble factor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Gestión de accesos por departamento o área</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                                <div className="relative h-[150px] w-full overflow-hidden rounded-lg shadow-xl md:h-[150px]">

                  <Image
                    src="/roles.png"
                    alt="Gestión de usuarios y roles OLEUMEXTRA"
                    fill
                                      className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"

                  />
                </div>
              </div>
            </div>

            {/* Soporte multiempresa */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="order-2 flex flex-col justify-center md:order-1">
                               <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px]">

                  <Image
                    src="/multiempresa.png"
                    alt="Soporte multiempresa OLEUMEXTRA"
                    fill
                                      className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"

                  />
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-olive-100 text-olive-700">
                  <Workflow className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-olive-900">Soporte multiempresa</h2>
                <div className="mt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Gestiona varias almazaras o empresas desde una única plataforma, manteniendo la información separada
                    pero accesible según permisos.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Configuración independiente para cada empresa o almazara</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Informes consolidados o individuales por empresa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Gestión centralizada de usuarios con acceso a múltiples empresas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        ✓
                      </span>
                      <span>Personalización de la interfaz según la empresa activa</span>
                    </li>
                  </ul>
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
