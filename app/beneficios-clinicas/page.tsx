"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SmileIcon as Tooth,
  Users,
  FileText,
  UserCheck,
  DollarSign,
  Calendar,
  Clock,
  LayoutDashboard,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export default function BeneficiosClinicasPage() {
  const router = useRouter()

  const beneficios = [
    {
      id: 1,
      titulo: "Controle de Clientes",
      descricao:
        "Gerencie todos os dados dos seus pacientes em um só lugar, com fichas completas e histórico de atendimentos.",
      icon: Users,
      imagem: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      titulo: "Prontuário Digital",
      descricao:
        "Mantenha prontuários digitais completos, com histórico de tratamentos, imagens e documentos de cada paciente.",
      icon: FileText,
      imagem: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      titulo: "Controle de Acesso para Funcionários",
      descricao: "Permissões personalizadas para cada membro da equipe, garantindo segurança e privacidade dos dados.",
      icon: UserCheck,
      imagem: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      titulo: "Controle Financeiro",
      descricao: "Acompanhe receitas, despesas, pagamentos e gere relatórios financeiros detalhados da sua clínica.",
      icon: DollarSign,
      imagem: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      titulo: "Agendamento Inteligente",
      descricao:
        "Sistema de agendamento que evita conflitos de horários e envia lembretes automáticos para reduzir faltas.",
      icon: Calendar,
      imagem: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      titulo: "Gestão de Carga Horária",
      descricao: "Controle a agenda de cada dentista, com visualização clara de disponibilidade e produtividade.",
      icon: Clock,
      imagem: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Tooth className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold group-hover:text-primary transition-colors">DentalCare</span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline" className="hover:bg-primary/10 transition-colors">
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button className="hover:bg-primary/90 transition-colors">Cadastrar</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Transforme a Gestão da Sua Clínica Odontológica
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                O DentalCare oferece todas as ferramentas que você precisa para otimizar processos, aumentar a
                produtividade e melhorar a experiência dos seus pacientes.
              </p>

              <div className="mt-8">
                <Link href="/register?type=clinic">
                  <Button size="lg" className="group hover:bg-primary/90 transition-colors">
                    <span>Começar Gratuitamente</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Benefícios Exclusivos para Sua Clínica
              </h2>
              <p className="mt-4 text-muted-foreground">
                Conheça as vantagens de utilizar o DentalCare na sua clínica odontológica
              </p>
            </AnimateOnScroll>

            <div className="mt-12 space-y-16">
              {beneficios.map((beneficio, index) => (
                <AnimateOnScroll
                  key={beneficio.id}
                  animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className="group"
                >
                  <div
                    className={`grid gap-8 items-center ${index % 2 === 0 ? "md:grid-cols-[1fr_1.5fr]" : "md:grid-cols-[1.5fr_1fr]"}`}
                  >
                    <div className={`${index % 2 !== 0 && "md:order-2"}`}>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <beneficio.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="mt-4 text-2xl font-bold group-hover:text-primary transition-colors">
                        {beneficio.titulo}
                      </h3>
                      <p className="mt-2 text-muted-foreground">{beneficio.descricao}</p>
                      <ul className="mt-4 space-y-2">
                        {[1, 2, 3].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 group/item hover:bg-muted/50 p-1 rounded-md transition-colors"
                          >
                            <CheckCircle className="mt-0.5 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                            <span className="group-hover/item:text-primary transition-colors">
                              {beneficio.id === 1 && item === 1 && "Cadastro completo com dados de contato e histórico"}
                              {beneficio.id === 1 && item === 2 && "Segmentação de pacientes por tipo de tratamento"}
                              {beneficio.id === 1 && item === 3 && "Acompanhamento de retornos e fidelização"}

                              {beneficio.id === 2 && item === 1 && "Odontograma digital interativo"}
                              {beneficio.id === 2 && item === 2 && "Armazenamento de radiografias e fotos"}
                              {beneficio.id === 2 && item === 3 && "Histórico completo de procedimentos"}

                              {beneficio.id === 3 && item === 1 && "Acesso gratuito para toda a equipe"}
                              {beneficio.id === 3 && item === 2 && "Níveis de permissão personalizáveis"}
                              {beneficio.id === 3 && item === 3 && "Registro de atividades para auditoria"}

                              {beneficio.id === 4 && item === 1 && "Controle de recebimentos e pagamentos"}
                              {beneficio.id === 4 && item === 2 && "Relatórios financeiros detalhados"}
                              {beneficio.id === 4 && item === 3 && "Gestão de convênios e planos"}

                              {beneficio.id === 5 && item === 1 && "Agendamento online para pacientes"}
                              {beneficio.id === 5 && item === 2 && "Lembretes automáticos via SMS e email"}
                              {beneficio.id === 5 && item === 3 && "Confirmação de consultas com um clique"}

                              {beneficio.id === 6 && item === 1 && "Visualização da agenda por profissional"}
                              {beneficio.id === 6 && item === 2 && "Controle de produtividade por dentista"}
                              {beneficio.id === 6 && item === 3 && "Relatórios de ocupação e ociosidade"}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${index % 2 !== 0 && "md:order-1"} overflow-hidden rounded-lg`}>
                      <Image
                        src={beneficio.imagem || "/placeholder.svg"}
                        alt={beneficio.titulo}
                        width={500}
                        height={300}
                        className="rounded-lg border shadow-sm group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Recursos Adicionais</h2>
              <p className="mt-4 text-muted-foreground">Além dos benefícios principais, o DentalCare oferece:</p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <AnimateOnScroll animation="fade-up" delay={100} className="group">
                  <Card className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <LayoutDashboard className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <CardTitle className="mt-2 group-hover:text-primary transition-colors">
                        Sistema de Caixa
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Controle de fluxo de caixa diário, com fechamento e relatórios detalhados.
                      </p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={200} className="group">
                  <Card className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Users className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <CardTitle className="mt-2 group-hover:text-primary transition-colors">Área do Cliente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Portal exclusivo para pacientes agendarem consultas e acessarem documentos.
                      </p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={300} className="group">
                  <Card className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Clock className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <CardTitle className="mt-2 group-hover:text-primary transition-colors">
                        Horário de Funcionamento
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Configuração de horários de atendimento visíveis para os pacientes no agendamento.
                      </p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Pronto para Transformar sua Clínica?</h2>
              <p className="mt-4 text-muted-foreground">
                Junte-se a centenas de clínicas que já otimizaram sua gestão com o DentalCare.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/register?type=clinic">
                  <Button size="lg" className="group hover:bg-primary/90 transition-colors">
                    <span>Criar Conta Gratuita</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group hover:bg-primary/10 transition-colors">
                  Agendar Demonstração
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container py-6 text-center">
          <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
            © {new Date().getFullYear()} DentalCare. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

