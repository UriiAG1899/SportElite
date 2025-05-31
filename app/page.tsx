"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play, Users, Trophy, Target, Star } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">SportElite</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Inici
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sobre Nosaltres
                </Link>
                <Link
                  href="/sports"
                  className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Esports
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contacte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/hero-athletes.jpg')",
          }}
        >
          <div className="absolute top-0 w-full h-full bg-black opacity-60"></div>
        </div>

        <div className="container relative mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div
                className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <h1 className="text-white font-semibold text-5xl lg:text-7xl mb-6">
                  Supera els teus
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {" "}
                    límits
                  </span>
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                  Descobreix el teu potencial esportiu amb els nostres programes d'entrenament personalitzats i
                  instal·lacions d'última generació.
                </p>
              </div>

              <div
                className={`mt-12 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <Link
                  href="/sports"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold uppercase text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center group"
                >
                  Comença Ara
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button className="ml-4 bg-transparent border-2 border-white text-white font-bold uppercase text-sm px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center group">
                  <Play className="mr-2 h-4 w-4" />
                  Veure Vídeo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 animate-bounce">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Trophy className="h-8 w-8 text-blue-400" />
          </div>
        </div>

        <div className="absolute top-1/3 right-10 animate-pulse">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Target className="h-6 w-6 text-purple-400" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Per què triar SportElite?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferim una experiència esportiva completa amb tecnologia avançada i entrenadors professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Entrenadors Experts",
                description: "Equip de professionals certificats amb anys d'experiència en esports d'alt rendiment",
                image: "/images/personal-trainer.jpg",
              },
              {
                icon: Trophy,
                title: "Resultats Garantits",
                description: "Programes personalitzats dissenyats per aconseguir els teus objectius esportius",
                image: "/images/trophy-winners.jpg",
              },
              {
                icon: Target,
                title: "Tecnologia Avançada",
                description:
                  "Instal·lacions modernes amb equipament d'última generació per optimitzar el teu rendiment",
                image: "/images/modern-gym.jpg",
              },
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Atletes Entrenats" },
              { number: "15", label: "Anys d'Experiència" },
              { number: "50+", label: "Medalles Guanyades" },
              { number: "98%", label: "Satisfacció Client" },
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Preparat per començar el teu viatge esportiu?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Uneix-te a la nostra comunitat d'atletes i descobreix el que pots aconseguir amb l'entrenament adequat
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold uppercase text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center group"
          >
            Contacta'ns Avui
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SportElite</h3>
              <p className="text-gray-400">
                El teu centre esportiu de confiança per aconseguir l'excel·lència atlètica.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enllaços Ràpids</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Inici
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    Sobre Nosaltres
                  </Link>
                </li>
                <li>
                  <Link href="/sports" className="text-gray-400 hover:text-white transition-colors">
                    Esports
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contacte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacte</h4>
              <p className="text-gray-400">📍 Carrer de l'Esport, 123</p>
              <p className="text-gray-400">📞 +34 123 456 789</p>
              <p className="text-gray-400">✉️ info@sportelite.cat</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Segueix-nos</h4>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    <Star className="h-5 w-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 SportElite. Tots els drets reservats.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
