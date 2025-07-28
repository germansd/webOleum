import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  imageSrc?: string
}

export function TestimonialCard({ quote, author, role, company, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="h-full border-none shadow-sm transition-all duration-300 hover:shadow-lg hover-lift overflow-hidden">
      <CardContent className="pt-6 relative">
        <div className="mb-4 text-primary opacity-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
            className="h-10 w-10"
          >
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.96.78-3.022.684-1.06 1.884-2.178 3.6-3.352l-1.898-1.318c-1.818 1.356-3.19 2.742-4.11 4.16-.912 1.414-1.373 2.856-1.373 4.326 0 1.3.338 2.364 1.012 3.194.676.83 1.605 1.244 2.786 1.244 1.107 0 2.017-.366 2.73-1.1.714-.733 1.07-1.632 1.07-2.696v-.104zm7.84 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.56-.12-1.074-.13-1.54-.028-.16-.95.09-1.96.776-3.022.686-1.06 1.888-2.178 3.608-3.352l-1.902-1.318c-1.82 1.356-3.19 2.742-4.106 4.16-.916 1.414-1.373 2.856-1.373 4.326 0 1.3.337 2.364 1.01 3.194.675.83 1.604 1.244 2.786 1.244 1.106 0 2.016-.366 2.73-1.1.714-.733 1.07-1.632 1.07-2.696v-.104z" />
          </svg>
        </div>
        <p className="text-lg font-medium leading-relaxed">{quote}</p>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 h-16 w-16 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </CardContent>
      <CardFooter className="flex items-center space-x-4 border-t pt-4">
        {imageSrc ? (
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={author}
            width={40}
            height={40}
            className="rounded-full object-cover ring-2 ring-primary/20"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}
