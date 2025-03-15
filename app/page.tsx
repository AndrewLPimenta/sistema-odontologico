import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SmileIcon as Tooth, Calendar, Users, ArrowRight, CheckCircle, Star } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <AnimateOnScroll animation="fade-right" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Gerenciamento odontológico simplificado
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Uma plataforma completa para clínicas odontológicas e seus pacientes. Agende consultas, gerencie
                    pacientes e muito mais.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register?type=clinic">
                    <Button size="lg" className="gap-1 group apple-button">
                      Para Clínicas
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/register?type=patient">
                    <Button size="lg" variant="outline" className="gap-1 group hover:bg-primary/10 transition-colors">
                      Para Pacientes
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left" className="flex items-center justify-center">
                <Image
                  alt="Imagem de uma clínica odontológica moderna"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg hover:shadow-xl transition-shadow"
                  height="310"
                  width="550"
                  src="/placeholder.svg?height=620&width=1100"
                />
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <section id="recursos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Recursos</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tudo que você precisa em um só lugar
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma oferece ferramentas completas tanto para clínicas quanto para pacientes.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <AnimateOnScroll animation="fade-up" delay={100} className="group">
                <div className="grid gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mx-auto group-hover:bg-primary/10 transition-colors">
                    <Calendar className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Agendamento Simplificado
                    </h3>
                    <p className="text-muted-foreground">
                      Agende consultas online de forma rápida e receba lembretes automáticos.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={200} className="group">
                <div className="grid gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mx-auto group-hover:bg-primary/10 transition-colors">
                    <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Gestão de Pacientes
                    </h3>
                    <p className="text-muted-foreground">
                      Mantenha históricos completos e organize informações de forma segura.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={300} className="group">
                <div className="grid gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mx-auto group-hover:bg-primary/10 transition-colors">
                    <Tooth className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Histórico Odontológico
                    </h3>
                    <p className="text-muted-foreground">
                      Acesse todo o histórico de tratamentos e procedimentos realizados.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="text-center">
              <Link href="/recursos">
                <Button className="group apple-button">
                  <span>Ver Todos os Recursos</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Como Funciona</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simples para clínicas e pacientes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça o processo simplificado para utilizar nossa plataforma.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <AnimateOnScroll animation="fade-right" className="group">
                <div className="flex flex-col items-center gap-4 rounded-lg border bg-background p-6 text-center hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Para Clínicas</h3>
                  <div className="overflow-hidden rounded-lg border">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Dashboard da clínica"
                      width={400}
                      height={200}
                      className="rounded-lg border group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                        1
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Cadastre sua clínica</p>
                        <p className="text-sm text-muted-foreground">
                          Crie uma conta e configure o perfil da sua clínica.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                        2
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Gerencie pacientes</p>
                        <p className="text-sm text-muted-foreground">
                          Adicione pacientes e mantenha seus históricos atualizados.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                        3
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Organize sua agenda</p>
                        <p className="text-sm text-muted-foreground">
                          Controle consultas e envie lembretes automáticos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/register?type=clinic" className="w-full">
                    <Button className="w-full apple-button">Começar como Clínica</Button>
                  </Link>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" className="group">
                <div className="flex flex-col items-center gap-4 rounded-lg border bg-background p-6 text-center hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Para Pacientes</h3>
                  <div className="overflow-hidden rounded-lg border">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Aplicativo para pacientes"
                      width={400}
                      height={200}
                      className="rounded-lg border group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                        1
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Crie sua conta</p>
                        <p className="text-sm text-muted-foreground">Cadastre-se gratuitamente na plataforma.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                        2
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Agende consultas</p>
                        <p className="text-sm text-muted-foreground">Marque consultas com sua clínica odontológica.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                        3
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Acompanhe seu histórico</p>
                        <p className="text-sm text-muted-foreground">
                          Visualize tratamentos e documentos em um só lugar.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/register?type=patient" className="w-full">
                    <Button className="w-full apple-button">Começar como Paciente</Button>
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="text-center">
              <Link href="/como-funciona">
                <Button className="group apple-button">
                  <span>Saiba Mais</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Depoimentos</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">O que nossos clientes dizem</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja como nossa plataforma tem ajudado clínicas e pacientes.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <AnimateOnScroll animation="fade-up" delay={100} className="group">
                <div className="rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-muted-foreground">
                      "O sistema simplificou completamente a gestão da nossa clínica. Economizamos tempo e melhoramos o
                      atendimento aos pacientes."
                    </p>
                  </blockquote>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">Dr. Roberto Almeida</p>
                      <p className="text-sm text-muted-foreground">Clínica Sorriso Perfeito</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={200} className="group">
                <div className="rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-muted-foreground">
                      "Agora consigo agendar minhas consultas a qualquer momento, sem precisar ligar para a clínica.
                      Muito prático!"
                    </p>
                  </blockquote>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">Maria Silva</p>
                      <p className="text-sm text-muted-foreground">Paciente</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={300} className="group">
                <div className="rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                    <Star className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-muted-foreground">
                      "Os lembretes automáticos reduziram drasticamente as faltas em consultas. Nosso faturamento
                      aumentou em 30%."
                    </p>
                  </blockquote>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">Dra. Carla Mendes</p>
                      <p className="text-sm text-muted-foreground">Odonto Center</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="text-center">
              <Link href="/depoimentos">
                <Button className="group apple-button">
                  <span>Ver Mais Depoimentos</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <AnimateOnScroll animation="fade-right" className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Pronto para simplificar a gestão da sua clínica?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Entre em contato conosco para saber mais sobre como podemos ajudar sua clínica odontológica.
              </p>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2 group">
                  <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-primary transition-colors">Suporte técnico especializado</span>
                </li>
                <li className="flex items-center gap-2 group">
                  <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-primary transition-colors">
                    Implementação rápida e sem complicações
                  </span>
                </li>
                <li className="flex items-center gap-2 group">
                  <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-primary transition-colors">
                    Treinamento completo para sua equipe
                  </span>
                </li>
                <li className="flex items-center gap-2 group">
                  <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-primary transition-colors">
                    Migração de dados de outros sistemas
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register?type=clinic">
                  <Button size="lg" className="group apple-button">
                    Começar Agora
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group hover:bg-primary/10 transition-colors">
                  Agendar Demonstração
                </Button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" className="flex items-center justify-center">
              <div className="overflow-hidden rounded-xl">
                <Image
                  alt="Equipe de suporte da DentalCare"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center hover:scale-105 transition-transform duration-700"
                  height="310"
                  width="550"
                  src="/placeholder.svg?height=620&width=1100"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

