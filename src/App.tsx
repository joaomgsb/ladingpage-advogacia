import { Award, Book, Building2, ChevronRight, GraduationCap, Mail, MapPin, Phone, Scale, ScrollText, Star, Trophy } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

function App() {
  const expertiseSection = useIntersectionObserver();
  const qualificationsSection = useIntersectionObserver();
  const aboutSection = useIntersectionObserver();
  const statsSection = useIntersectionObserver();
  const testimonialsSection = useIntersectionObserver();
  const contactSection = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-xl border-b border-[#222] z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              <span className="text-[#D4AF37]">Dra.</span> Adna Boaventura
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#sobre" className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300">Sobre</a>
              <a href="#areas" className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300">Áreas de Atuação</a>
              <a href="#qualificacoes" className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300">Qualificações</a>
              <a href="#contato">
                <Button variant="default" className="bg-[#D4AF37] hover:bg-[#B4943D] text-black font-semibold hover:scale-105 transition-all duration-300 group">
                  Contato
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-up relative z-10">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Star className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wider uppercase">Advocacia Especializada</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#FFE5B4]">
                Excelência e Dedicação em Direito Público
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                Assessora jurídica com mais de 15 anos de experiência, especialista em Direito Público, Tributário, Administrativo e Eleitoral.
              </p>
              <div className="flex gap-4 items-center">
                <a href="#contato">
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B4943D] text-black font-semibold hover:scale-105 transition-all duration-300 group">
                    Agende uma Consulta
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative hidden md:block animate-float">
              <div className="absolute -inset-4 bg-amber-600/20 rounded-full blur-3xl"></div>
              <img 
                src="src/images/adna.png"
                alt="Dra. Adna Moreira Boaventura"
                className="w-full h-full rounded-2xl shadow-2xl relative z-10 border-4 border-white/10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="-mt-20 relative z-20 bg-transparent"
        ref={statsSection.elementRef as React.RefObject<HTMLElement>}
      >
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#111]/80 backdrop-blur-lg border border-[#333] rounded-2xl shadow-2xl p-8 hover-lift animate-on-scroll ${
            statsSection.isIntersecting ? 'animate-fade-in-up' : ''
          }`}>
            {[
              { number: '15+', label: 'Anos de Experiência', color: 'text-[#D4AF37]' },
              { number: '5', label: 'Pós-graduações', color: 'text-[#D4AF37]' },
              { number: '29+', label: 'Cursos Especializados', color: 'text-[#D4AF37]' },
              { number: '3', label: 'Artigos Publicados', color: 'text-[#D4AF37]' },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="sobre" 
        className="py-32 bg-[#0A0A0A] relative"
        ref={aboutSection.elementRef as React.RefObject<HTMLElement>}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-600/20 rounded-full blur-3xl"></div>
              <img 
                src="src/images/adnafoto.png"
                alt="Dra. Adna Moreira Boaventura" 
                className={`w-full h-full rounded-2xl shadow-2xl relative z-10 border-4 border-white/10 hover:scale-[1.02] transition-transform duration-500 object-cover animate-on-scroll ${
                  aboutSection.isIntersecting ? 'animate-slide-in-left' : ''
                }`}
              />
            </div>
            <div className={`space-y-8 animate-on-scroll ${aboutSection.isIntersecting ? 'animate-slide-in-right' : ''}`}>
              <div className="inline-flex items-center gap-2 text-[#D4AF37]">
                <Trophy className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wider uppercase">Sobre Mim</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Excelência e Dedicação em Cada Caso
              </h2>
              <div className="space-y-6 text-gray-400 text-lg">
                <p>
                  Com mais de 15 anos de experiência no Direito Público, construí uma carreira sólida baseada em conhecimento profundo, ética e resultados expressivos. Minha atuação é marcada pela dedicação incansável aos interesses dos clientes e pelo domínio técnico nas áreas do Direito Público, Tributário e Eleitoral.
                </p>
                <p>
                  Como Assessora do Juiz de Direito e do Foro Eleitoral da Comarca de Betim, desenvolvi uma visão única do sistema jurídico, que me permite oferecer soluções estratégicas e eficazes. Minha formação acadêmica extensa, incluindo múltiplas pós-graduações, reflete meu compromisso com a excelência e a atualização constante.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#111]/80 backdrop-blur-lg border border-[#333] rounded-xl p-4 flex items-center gap-3">
                  <Scale className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-white">Comprometimento</span>
                </div>
                <div className="bg-[#111]/80 backdrop-blur-lg border border-[#333] rounded-xl p-4 flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-white">Excelência</span>
                </div>
                <div className="bg-[#111]/80 backdrop-blur-lg border border-[#333] rounded-xl p-4 flex items-center gap-3">
                  <Star className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-white">Resultados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section 
        id="areas" 
        className="py-32 relative bg-[#0A0A0A]"
        ref={expertiseSection.elementRef as React.RefObject<HTMLElement>}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
              <Scale className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wider uppercase">Especialidades</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">Áreas de Atuação</h2>
            <p className="text-gray-400 text-lg">
              Oferecemos assessoria jurídica especializada em diversas áreas do direito, 
              com foco em excelência e resultados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Direito Público',
                description: 'Especialista em questões relacionadas à administração pública e direito constitucional',
                icon: Building2,
              },
              {
                title: 'Direito Tributário',
                description: 'Assessoria completa em questões fiscais e tributárias para pessoas físicas e jurídicas',
                icon: Scale,
              },
              {
                title: 'Direito Eleitoral',
                description: 'Vasta experiência em processos e consultoria eleitoral',
                icon: ScrollText,
              },
            ].map((item, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 border border-[#333] bg-[#111]/80 backdrop-blur-lg hover-lift overflow-hidden animate-on-scroll ${
                  expertiseSection.isIntersecting ? 'animate-slide-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B4943D] rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#FFD700] group-hover:to-[#D4AF37] transition-all duration-500 transform group-hover:rotate-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section 
        id="qualificacoes" 
        className="py-32 bg-gradient-to-br from-black to-[#0A0A0A] relative overflow-hidden"
        ref={qualificationsSection.elementRef as React.RefObject<HTMLElement>}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
                <GraduationCap className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wider uppercase">Formação</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">Qualificações Acadêmicas</h2>
              <p className="text-gray-400 text-lg">
                Formação sólida e constante atualização para oferecer o melhor serviço jurídico
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: 'Graduação em Direito',
                  institution: 'Pontifícia Universidade Católica de Minas Gerais',
                  year: '2008',
                  icon: GraduationCap,
                  highlight: true,
                },
                {
                  title: 'Pós-Graduação em andamento',
                  institution: 'Universidade Presbiteriana Mackenzie',
                  year: 'Em curso',
                  icon: GraduationCap,
                },
                {
                  title: 'Especialização em Direito Tributário, Ambiental, Eleitoral, Virtual e Consumidor',
                  institution: 'Pontifícia Universidade Católica de Minas Gerais',
                  year: '2020',
                  icon: Award,
                },
                {
                  title: 'Pós-graduação em Direito Processual Civil',
                  institution: 'Faculdade Famart',
                  year: '2019',
                  icon: Award,
                },
                {
                  title: 'Pós-graduação em Direito Público',
                  institution: 'Faculdade Dom Bosco',
                  year: '2018',
                  icon: Building2,
                },
                {
                  title: 'Pós-graduação em Direito Administrativo',
                  institution: 'Faculdade Famart',
                  year: '2017',
                  icon: Scale,
                },
                {
                  title: 'Pós-graduação em Direito Eleitoral',
                  institution: 'Faculdade Famart',
                  year: '2016',
                  icon: ScrollText,
                },
                {
                  title: 'Pós-graduação em Direito Tributário',
                  institution: 'Faculdade Dom Bosco',
                  year: '2015',
                  icon: Book
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`${item.highlight 
                    ? 'bg-[#1A1A1A]/90 border-[#D4AF37]/30' 
                    : 'bg-[#111]/80 border-[#333]'
                  } backdrop-blur-lg border rounded-2xl p-8 hover:bg-[#222]/80 transition-all duration-500 hover-lift animate-on-scroll ${
                    qualificationsSection.isIntersecting ? 'animate-slide-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-12 h-12 ${
                      item.highlight
                        ? 'bg-gradient-to-br from-[#FFD700] to-[#D4AF37] scale-110'
                        : 'bg-gradient-to-br from-[#D4AF37] to-[#B4943D]'
                      } rounded-xl flex items-center justify-center shrink-0 transform hover:rotate-6 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className={`${
                        item.highlight ? 'text-2xl' : 'text-xl'
                      } font-semibold text-white mb-2`}>{item.title}</h3>
                      <p className="text-gray-400">{item.institution}</p>
                      <p className="text-[#D4AF37] text-sm mt-2">{item.year}</p>
                      {item.highlight && (
                        <p className="text-[#D4AF37] mt-4 text-sm font-medium">
                          O início de uma trajetória de excelência no Direito
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Experiência Profissional */}
              <div className="mt-20">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
                    <Building2 className="w-5 h-5" />
                    <span className="text-sm font-medium tracking-wider uppercase">Carreira</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Experiência Profissional</h2>
                  <p className="text-gray-400 text-lg">
                    Trajetória profissional consolidada em direito público e assessoria jurídica
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      title: 'Assessora do Juiz de Direito e Diretor do Foro Eleitoral',
                      institution: 'Tribunal de Justiça de Minas Gerais - Comarca de Betim',
                      period: '2009 - Atual',
                      description: 'Assessoramento aos Drs. Marcelo da Cruz Trigueiro e Lauro Sérgio Leal',
                      icon: Scale,
                    },
                    {
                      title: 'Assessora II',
                      institution: 'Prefeitura Municipal de Betim',
                      period: '2013 - 2018',
                      icon: Building2,
                    },
                    {
                      title: 'Assessora III - Gabinete do Prefeito',
                      institution: 'Prefeitura Municipal de Betim',
                      period: '2008',
                      icon: Building2,
                    },
                    {
                      title: 'Coordenadora de Estágio',
                      institution: 'Prefeitura Municipal de Betim',
                      period: '1997 - 2008',
                      icon: GraduationCap,
                    },
                    {
                      title: 'Secretária Executiva',
                      institution: 'Secretaria de Indústria e Comércio - Prefeitura de Betim',
                      period: '1990 - 1991',
                      icon: ScrollText,
                    },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`bg-[#111]/80 backdrop-blur-lg border border-[#333] rounded-2xl p-8 hover:bg-[#222]/80 transition-all duration-500 hover-lift animate-on-scroll ${
                        qualificationsSection.isIntersecting ? 'animate-slide-in-up' : ''
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B4943D] rounded-xl flex items-center justify-center shrink-0 transform hover:rotate-6 transition-transform duration-300">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                          <p className="text-gray-400">{item.institution}</p>
                          <p className="text-[#D4AF37] text-sm mt-2">{item.period}</p>
                          {item.description && (
                            <p className="text-gray-400 mt-2 text-sm">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Cursos e Publicações */}
                  <div className="mt-20">
                    <div className="text-center mb-16">
                      <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
                        <Book className="w-5 h-5" />
                        <span className="text-sm font-medium tracking-wider uppercase">Produção Acadêmica</span>
                      </div>
                      <h2 className="text-4xl font-bold mb-6 text-white">Artigos e Monografias</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: 'A Função Social dos Tributos',
                          type: 'Artigo - Pós-Graduação em Direito Tributário',
                        },
                        {
                          title: 'Atos de Improbidade Administrativa Previstos na Lei 8.429/92',
                          type: 'Artigo - Pós-Graduação em Direito Administrativo',
                        },
                        {
                          title: 'Principais Ações e Recursos da Justiça Eleitoral',
                          type: 'Artigo - Pós-Graduação em Direito Eleitoral',
                        },
                        {
                          title: 'A Validade da Incidência do ITBI na Aquisição da Propriedade pela Usucapião',
                          type: 'Monografia - Graduação em Direito',
                          note: 'Nota máxima 100',
                        },
                      ].map((item, index) => (
                        <div 
                          key={index}
                          className={`bg-[#111]/80 backdrop-blur-lg border border-[#333] rounded-2xl p-6 hover:bg-[#222]/80 transition-all duration-500 hover-lift animate-on-scroll ${
                            qualificationsSection.isIntersecting ? 'animate-slide-in-up' : ''
                          }`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                          <p className="text-gray-400 text-sm">{item.type}</p>
                          {item.note && (
                            <p className="text-[#D4AF37] text-sm mt-2">{item.note}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-32 bg-[#0A0A0A] relative overflow-hidden"
        ref={testimonialsSection.elementRef as React.RefObject<HTMLElement>}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wider uppercase">Depoimentos</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">O Que Dizem Nossos Clientes</h2>
            <p className="text-gray-400 text-lg">
              A satisfação de nossos clientes é o melhor testemunho do nosso compromisso com a excelência
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                content: "A Dra. Adna demonstrou um profundo conhecimento em direito público. Sua dedicação e atenção aos detalhes foram fundamentais para o sucesso do meu caso.",
                author: "Maria Silva",
                role: "Servidora Pública",
              },
              {
                content: "Excelente profissional! Sua experiência em direito tributário nos ajudou a encontrar a melhor solução para nossa empresa. Recomendo fortemente seus serviços.",
                author: "João Santos",
                role: "Empresário",
              },
              {
                content: "A competência e o profissionalismo da Dra. Adna são impressionantes. Ela conduziu meu processo eleitoral com maestria e segurança.",
                author: "Carlos Oliveira",
                role: "Político",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-[#111]/80 backdrop-blur-lg border border-[#333] rounded-2xl p-8 hover:bg-[#222]/80 transition-all duration-500 hover-lift animate-on-scroll ${
                  testimonialsSection.isIntersecting ? 'animate-slide-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex gap-1 text-[#D4AF37] mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-400 text-lg italic">"{item.content}"</p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-white font-semibold">{item.author}</p>
                    <p className="text-[#D4AF37] text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contato" 
        className="py-32 bg-gradient-to-br from-black to-[#111] relative overflow-hidden"
        ref={contactSection.elementRef as React.RefObject<HTMLElement>}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wider uppercase">Contato</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">Entre em Contato</h2>
              <p className="text-gray-400 text-lg">
                Estamos à disposição para auxiliar em suas questões jurídicas
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Phone,
                  title: 'Telefone',
                  info: '(031) 99617-9757',
                },
                {
                  icon: Mail,
                  title: 'E-mail',
                  info: 'adnaboaventura@gmail.com',
                },
                {
                  icon: MapPin,
                  title: 'Localização',
                  info: 'Betim, Minas Gerais',
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-[#111]/80 backdrop-blur-md border border-[#333] rounded-2xl p-8 text-center hover:bg-[#222]/80 transition-all duration-500 hover-lift animate-on-scroll ${
                    contactSection.isIntersecting ? 'animate-slide-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B4943D] rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative border-t border-[#222]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-6">
                <span className="text-[#D4AF37]">Dra.</span> Adna Boaventura
              </h3>
              <p className="text-gray-400">
                Advocacia especializada com foco em resultados e excelência no atendimento.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Áreas de Atuação</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Direito Público</li>
                <li>Direito Tributário</li>
                <li>Direito Eleitoral</li>
                <li>Direito Administrativo</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Horário de Atendimento</h3>
              <p className="text-gray-400">
                Segunda a Sexta<br />
                08:00 às 18:00
              </p>
            </div>
          </div>
          <div className="border-t border-[#222] pt-8 text-center">
            <p> 2024 Dra. Adna Moreira Boaventura - Todos os direitos reservados</p>
            <p className="text-sm mt-2 text-gray-400">OAB/MG (número da OAB)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;