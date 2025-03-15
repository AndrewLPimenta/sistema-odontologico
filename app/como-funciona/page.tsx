import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import {
  ArrowRight,
  CheckCircle,
  Laptop,
  Smartphone,
  Users,
  Calendar,
  FileText,
  Clock,
  Settings,
  Headphones,
} from "lucide-react"

export default function ComoFuncionaPage() {
  const passosClinicos = [
    {
      numero: 1,
      titulo: "Cadastro e Configuração",
      descricao: "Crie sua conta e configure o perfil da sua clínica em minutos.",
      icon: Settings,
      detalhes: [
        "Cadastro simples e rápido",
        "Configuração do perfil da clínica",
        "Personalização de horários de atendimento",
        "Cadastro de profissionais e especialidades",
        "Configuração de permissões de acesso",
      ],
    },
    {
      numero: 2,
      titulo: "Importação de Dados",
      descricao: "Importe seus pacientes e agenda de outros sistemas facilmente.",
      icon: FileText,
      detalhes: [
        "Importação de pacientes via planilha",
        "Migração de dados de outros sistemas",
        "Digitalização de prontuários físicos",
        "Organização automática de informações",
        "Suporte técnico durante todo o processo",
      ],
    },
    {
      numero: 3,
      titulo: "Gestão de Pacientes",
      descricao: "Cadastre seus pacientes e mantenha seus históricos atualizados.",
      icon: Users,
      detalhes: [
        "Cadastro completo de pacientes",
        "Histórico médico e odontológico",
        "Anexo de documentos e imagens",
        "Odontograma digital interativo",
        "Controle de tratamentos e procedimentos",
      ],
    },
    {
      numero: 4,
      titulo: "Agendamento",
      descricao: "Organize sua agenda e otimize o tempo da sua clínica.",
      icon: Calendar,
      detalhes: [
        "Agendamento intuitivo e rápido",
        "Visualização por profissional ou sala",
        "Bloqueio de horários para intervalos",
        "Lembretes automáticos para pacientes",
        "Controle de confirmações e faltas",
      ],
    },
    {
      numero: 5,
      titulo: "Atendimento",
      descricao: "Registre consultas e procedimentos de forma prática e eficiente.",
      icon: Clock,
      detalhes: [
        "Registro de procedimentos realizados",
        "Atualização do odontograma",
        "Prescrições e atestados digitais",
        "Agendamento de retornos",
        "Registro de pagamentos",
      ],
    },
  ]

  const passosPacientes = [
    {
      numero: 1,
      titulo: "Cadastro",
      descricao: "Crie sua conta de paciente em poucos minutos.",
      icon: Users,
      detalhes: [
        "Cadastro simples e rápido",
        "Preenchimento de informações pessoais",
        "Histórico médico e odontológico",
        "Vinculação com sua clínica",
        "Acesso imediato ao sistema",
      ],
    },
    {
      numero: 2,
      titulo: "Agendamento",
      descricao: "Agende consultas online sem precisar telefonar.",
      icon: Calendar,
      detalhes: [
        "Visualização de horários disponíveis",
        "Agendamento com poucos cliques",
        "Escolha do profissional",
        "Confirmação instantânea",
        "Lembretes automáticos",
      ],
    },
    {
      numero: 3,
      titulo: "Histórico",
      descricao: "Acesse seu histórico de tratamentos e documentos.",
      icon: FileText,
      detalhes: [
        "Visualização de procedimentos realizados",
        "Acesso a radiografias e imagens",
        "Prescrições e atestados digitais",
        "Planos de tratamento",
        "Histórico de pagamentos",
      ],
    },
  ]

  const plataformas = [
    {
      titulo: "Web",
      descricao: "Acesse pelo navegador em qualquer computador.",
      icon: Laptop,
      detalhes: [
        "Compatível com todos os navegadores modernos",
        "Interface responsiva e intuitiva",
        "Acesso seguro via HTTPS",
        "Funcionalidades completas",
        "Sem necessidade de instalação",
      ],
    },
    {
      titulo: "Mobile",
      descricao: "Aplicativo para iOS e Android para acesso em qualquer lugar.",
      icon: Smartphone,
      detalhes: [
        "Disponível para iOS e Android",
        "Interface otimizada para dispositivos móveis",
        "Notificações push",
        "Acesso offline a informações básicas",
        "Sincronização automática",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Como Funciona o DentalCare
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Conheça o passo a passo para implementar e utilizar nosso sistema em sua clínica odontológica.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Visão Geral */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="section-title">Simples e Intuitivo</h2>
              <p className="mt-4 section-description">
                O DentalCare foi desenvolvido para ser fácil de usar, com uma interface intuitiva e um processo de
                implementação simplificado.
              </p>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2">
              <AnimateOnScroll animation="fade-right" className="group">
                <div className="rounded-2xl overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Interface%20Intuitiva"
                    alt="Interface intuitiva do DentalCare"
                    width={600}
                    height={400}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold">Desenvolvido para Odontologia</h3>
                <p className="mt-4 text-muted-foreground">
                  Diferente de sistemas genéricos, o DentalCare foi criado especificamente para clínicas odontológicas,
                  com todas as ferramentas e funcionalidades que você precisa.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 group/item">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                    <span>Interface intuitiva que não exige treinamento extensivo</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                    <span>Implementação em menos de 24 horas</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                    <span>Suporte técnico especializado durante todo o processo</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                    <span>Migração de dados de outros sistemas sem complicações</span>
                  </li>
                </ul>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Para Clínicas */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="section-title">Para Clínicas Odontológicas</h2>
              <p className="mt-4 section-description">
                Conheça o passo a passo para implementar o DentalCare na sua clínica.
              </p>
            </AnimateOnScroll>

            <div className="relative">
              {/* Linha de tempo vertical */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-ml-0.5"></div>

              {/* Passos */}
              <div className="space-y-12">
                {passosClinicos.map((passo, index) => (
                  <AnimateOnScroll
                    key={passo.numero}
                    animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                    className="relative"
                  >
                    <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                      {/* Círculo na linha do tempo */}
                      <div className="absolute left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold md:left-1/2 md:-ml-4">
                        {passo.numero}
                      </div>

                      {/* Conteúdo */}
                      <div className={`ml-16 md:w-1/2 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                        <Card className="apple-card h-full">
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                <passo.icon className="h-5 w-5 text-primary" />
                              </div>
                              <CardTitle>{passo.titulo}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{passo.descricao}</p>
                            <ul className="mt-4 space-y-2">
                              {passo.detalhes.map((detalhe, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                                  <span className="text-sm">{detalhe}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            <AnimateOnScroll className="mt-16 text-center">
              <Link href="/register?type=clinic">
                <Button size="lg" className="group apple-button">
                  <span>Começar Agora</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Para Pacientes */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="section-title">Para Pacientes</h2>
              <p className="mt-4 section-description">Veja como é simples utilizar o DentalCare como paciente.</p>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-3">
              {passosPacientes.map((passo, index) => (
                <AnimateOnScroll key={passo.numero} animation="fade-up" delay={index * 100} className="group">
                  <Card className="apple-card h-full">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                        {passo.numero}
                      </div>
                      <CardTitle className="mt-4 group-hover:text-primary transition-colors">{passo.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{passo.descricao}</p>
                      <ul className="mt-4 space-y-2">
                        {passo.detalhes.map((detalhe, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                            <span className="text-sm">{detalhe}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll className="mt-12 text-center">
              <Link href="/register?type=patient">
                <Button size="lg" className="group apple-button">
                  <span>Cadastrar como Paciente</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Plataformas */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="section-title">Disponível em Múltiplas Plataformas</h2>
              <p className="mt-4 section-description">Acesse o DentalCare de qualquer lugar, a qualquer momento.</p>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2">
              {plataformas.map((plataforma, index) => (
                <AnimateOnScroll key={plataforma.titulo} animation="fade-up" delay={index * 100} className="group">
                  <Card className="apple-card h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <plataforma.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {plataforma.titulo}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{plataforma.descricao}</p>
                      <ul className="mt-4 space-y-2">
                        {plataforma.detalhes.map((detalhe, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                            <span className="text-sm">{detalhe}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Suporte */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <AnimateOnScroll animation="fade-right" className="group">
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Headphones className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h2 className="section-title">Suporte Especializado</h2>
                  <p className="section-description">
                    Nossa equipe de suporte está sempre pronta para ajudar você em todas as etapas.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircle className="mt-1 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                      <span>Suporte técnico por chat, e-mail e telefone</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircle className="mt-1 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                      <span>Treinamento completo para sua equipe</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircle className="mt-1 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                      <span>Tutoriais em vídeo e documentação detalhada</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircle className="mt-1 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                      <span>Atualizações regulares com novos recursos</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/contato">
                      <Button className="group apple-button">
                        <span>Fale com Nossa Equipe</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" className="group">
                <div className="rounded-2xl overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Suporte%20Especializado"
                    alt="Equipe de suporte DentalCare"
                    width={600}
                    height={400}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h2 className="section-title">Pronto para começar?</h2>
              <p className="mt-4 section-description">
                Experimente o DentalCare gratuitamente por 14 dias, sem compromisso.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register?type=clinic">
                  <Button size="lg" className="group apple-button">
                    <span>Criar Conta Gratuita</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button size="lg" variant="outline" className="group hover:bg-primary/10 transition-colors">
                    <span>Agendar Demonstração</span>
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

