"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Calendar, CheckCircle, Headphones } from "lucide-react"

export default function ContatoPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulação de sucesso
    setFormStatus("success")

    // Reset após 3 segundos
    setTimeout(() => {
      setFormStatus("idle")
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      })
    }, 3000)
  }

  const escritorios = [
    {
      cidade: "São Paulo",
      endereco: "Av. Paulista, 1000, 15º andar - Bela Vista",
      cep: "01310-100",
      telefone: "(11) 3456-7890",
      email: "contato.sp@dentalcare.com.br",
      horario: "Segunda a Sexta: 9h às 18h",
    },
    {
      cidade: "Rio de Janeiro",
      endereco: "Av. Rio Branco, 500, Sala 1502 - Centro",
      cep: "20040-002",
      telefone: "(21) 3456-7890",
      email: "contato.rj@dentalcare.com.br",
      horario: "Segunda a Sexta: 9h às 18h",
    },
    {
      cidade: "Belo Horizonte",
      endereco: "Av. Afonso Pena, 3000, Sala 1001 - Funcionários",
      cep: "30130-009",
      telefone: "(31) 3456-7890",
      email: "contato.bh@dentalcare.com.br",
      horario: "Segunda a Sexta: 9h às 18h",
    },
  ]

  const faq = [
    {
      pergunta: "Como funciona o período de teste gratuito?",
      resposta:
        "Oferecemos 14 dias de teste gratuito com acesso a todas as funcionalidades do sistema. Não é necessário cartão de crédito para começar. Ao final do período, você pode escolher um dos nossos planos ou cancelar sem compromisso.",
    },
    {
      pergunta: "Preciso instalar algum software?",
      resposta:
        "Não, o DentalCare é um sistema 100% na nuvem. Você pode acessar de qualquer dispositivo com conexão à internet, seja computador, tablet ou smartphone, através do navegador ou do nosso aplicativo móvel.",
    },
    {
      pergunta: "Como é feita a migração de dados de outro sistema?",
      resposta:
        "Nossa equipe de suporte realiza todo o processo de migração de dados. Podemos importar informações de pacientes, agenda, histórico de tratamentos e outros dados do seu sistema atual para o DentalCare, garantindo uma transição tranquila.",
    },
    {
      pergunta: "O sistema é seguro? Como ficam os dados dos pacientes?",
      resposta:
        "Sim, o DentalCare segue rigorosos padrões de segurança e está em conformidade com a LGPD. Todos os dados são criptografados e armazenados em servidores seguros com backup diário. Apenas pessoas autorizadas têm acesso às informações.",
    },
    {
      pergunta: "Quantos usuários posso cadastrar?",
      resposta:
        "O número de usuários depende do plano contratado. Temos opções para clínicas de todos os tamanhos, desde profissionais autônomos até grandes clínicas com múltiplos profissionais. Entre em contato para encontrarmos o plano ideal para sua necessidade.",
    },
    {
      pergunta: "Como funciona o suporte técnico?",
      resposta:
        "Oferecemos suporte técnico por chat, e-mail e telefone em horário comercial. Nosso tempo médio de resposta é de menos de 2 horas. Além disso, disponibilizamos tutoriais em vídeo e documentação detalhada para ajudar no uso do sistema.",
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Entre em Contato</h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Estamos aqui para ajudar você a transformar a gestão da sua clínica odontológica.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <AnimateOnScroll animation="fade-right" className="group">
                <Card className="apple-card h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Envie uma Mensagem</CardTitle>
                    <CardDescription>
                      Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input
                          id="nome"
                          name="nome"
                          placeholder="Seu nome completo"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefone">Telefone</Label>
                          <Input
                            id="telefone"
                            name="telefone"
                            placeholder="(00) 00000-0000"
                            value={formData.telefone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="assunto">Assunto</Label>
                        <Select
                          value={formData.assunto}
                          onValueChange={(value) => handleSelectChange("assunto", value)}
                        >
                          <SelectTrigger id="assunto">
                            <SelectValue placeholder="Selecione um assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="informacoes">Informações sobre o sistema</SelectItem>
                            <SelectItem value="demonstracao">Agendar demonstração</SelectItem>
                            <SelectItem value="suporte">Suporte técnico</SelectItem>
                            <SelectItem value="comercial">Falar com comercial</SelectItem>
                            <SelectItem value="outro">Outro assunto</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mensagem">Mensagem</Label>
                        <Textarea
                          id="mensagem"
                          name="mensagem"
                          placeholder="Como podemos ajudar?"
                          value={formData.mensagem}
                          onChange={handleChange}
                          className="min-h-[120px]"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full group apple-button"
                        disabled={formStatus === "submitting"}
                      >
                        {formStatus === "submitting" ? (
                          "Enviando..."
                        ) : formStatus === "success" ? (
                          <span className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mensagem Enviada!
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Enviar Mensagem
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" className="space-y-8">
                <Card className="apple-card">
                  <CardHeader>
                    <CardTitle>Agende uma Demonstração</CardTitle>
                    <CardDescription>Veja o DentalCare em ação com um de nossos especialistas.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Demonstração Personalizada</p>
                        <p className="text-sm text-muted-foreground">
                          Agende uma demonstração online com um de nossos especialistas e veja como o DentalCare pode
                          ajudar sua clínica.
                        </p>
                      </div>
                    </div>
                    <Button className="w-full group apple-button">
                      <span>Agendar Demonstração</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="apple-card">
                  <CardHeader>
                    <CardTitle>Fale Conosco</CardTitle>
                    <CardDescription>Entre em contato diretamente com nossa equipe.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Telefone</p>
                        <p className="text-sm text-muted-foreground">(11) 3456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">contato@dentalcare.com.br</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageSquare className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Chat Online</p>
                        <p className="text-sm text-muted-foreground">Disponível de segunda a sexta, das 9h às 18h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Escritórios */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="section-title">Nossos Escritórios</h2>
              <p className="mt-4 section-description">
                Estamos presentes nas principais cidades do Brasil para atender você.
              </p>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-3">
              {escritorios.map((escritorio, index) => (
                <AnimateOnScroll key={escritorio.cidade} animation="fade-up" delay={index * 100} className="group">
                  <Card className="apple-card h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">{escritorio.cidade}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Endereço</p>
                          <p className="text-sm text-muted-foreground">{escritorio.endereco}</p>
                          <p className="text-sm text-muted-foreground">CEP: {escritorio.cep}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Telefone</p>
                          <p className="text-sm text-muted-foreground">{escritorio.telefone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">{escritorio.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Horário de Funcionamento</p>
                          <p className="text-sm text-muted-foreground">{escritorio.horario}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll animation="fade-up" className="group">
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border shadow-lg">
                <div className="aspect-[21/9] w-full bg-muted">
                  <Image
                    src="/placeholder.svg?height=600&width=1400&text=Mapa%20de%20Localização"
                    alt="Mapa de localização dos escritórios"
                    width={1400}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Suporte */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
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
                      <span>Tempo médio de resposta de menos de 2 horas</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircle className="mt-1 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                      <span>Tutoriais em vídeo e documentação detalhada</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircle className="mt-1 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                      <span>Treinamento completo para sua equipe</span>
                    </li>
                  </ul>
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

        {/* FAQ */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="section-title">Perguntas Frequentes</h2>
              <p className="mt-4 section-description">
                Encontre respostas para as dúvidas mais comuns sobre o DentalCare.
              </p>
            </AnimateOnScroll>

            <div className="mx-auto max-w-3xl space-y-4">
              {faq.map((item, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 100} className="group">
                  <Card className="apple-card">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {item.pergunta}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.resposta}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h2 className="section-title">Pronto para transformar sua clínica?</h2>
              <p className="mt-4 section-description">
                Experimente o DentalCare gratuitamente por 14 dias e descubra como podemos ajudar a otimizar sua gestão.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register?type=clinic">
                  <Button size="lg" className="group apple-button">
                    <span>Começar Gratuitamente</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group hover:bg-primary/10 transition-colors">
                  <span>Agendar Demonstração</span>
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

