import Link from "next/link"
import { SmileIcon as Tooth } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <Tooth className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">DentalCare</span>
          </div>
          <p className="text-sm text-muted-foreground md:max-w-xs">
            Simplificando o gerenciamento odontológico para clínicas e pacientes.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/beneficios-clinicas"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Para Clínicas
                </Link>
              </li>
              <li>
                <Link href="/clinicas-parceiras" className="text-muted-foreground hover:text-primary transition-colors">
                  Para Pacientes
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/termos" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} DentalCare. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

