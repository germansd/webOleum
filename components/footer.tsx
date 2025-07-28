import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <div className="relative flex items-center">
                <span className="text-xl font-bold">
                  <span className="text-primary">OLEUM</span>
                  <span className="text-secondary">EXTRA</span>
                </span>
              </div>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              Software de gestión especializado para almazaras y cooperativas del sector oleícola.
            </p>
            <div className="mt-4 flex space-x-3">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Producto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/funcionalidades" className="text-muted-foreground hover:text-primary transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="/planes" className="text-muted-foreground hover:text-primary transition-colors">
                  Planes
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-primary transition-colors">
                  Solicitar Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/casos-de-uso" className="text-muted-foreground hover:text-primary transition-colors">
                  Casos de uso
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-muted-foreground hover:text-primary transition-colors">
                  Aviso legal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                info@oleumextra.com
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +34 644 60 92 59
              </li>
              <li className="flex items-start text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary mt-0.5" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {currentYear} OLEUMEXTRA. Todos los derechos reservados.</p>
          <div className="flex space-x-4 text-xs">
            <Link href="/legal/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link href="/legal/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
            <Link href="/legal/terminos" className="text-muted-foreground hover:text-primary transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
