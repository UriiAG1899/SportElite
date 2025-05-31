"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Users, Star, Zap, Target, Heart } from "lucide-react"

export default function SportsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("tots")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sports = [
    {
      id: 1,
      name: "Entrenament Funcional",
      category: "fitness",
      duration: "60 min",
      level: "Tots els nivells",
      participants: "8-12",
      description: "Millora la teva força, resistència i mobilitat amb exercicis funcionals",
      price: "45€/sessió",
      color: "from-blue-500 to-cyan-500",
      image: "/images/functional-training.jpg",
    },
    {
      id: 2,
      name: "CrossFit Elite",
      category: "fitness",
      duration: "45 min",
      level: "Intermig-Avançat",
      participants: "6-10",
      description: "Entrenament d'alta intensitat per atletes que busquen el màxim rendiment",
      price: "55€/sessió",
      color: "from-red-500 to-orange-500",
      image: "/images/crossfit-training.jpg",
    },
    {
      id: 3,
      name: "Natació Competitiva",
      category: "aquatic",
      duration: "90 min",
      level: "Avançat",
      participants: "4-8",
      description: "Tècnica avançada i entrenament específic per a competicions de natació",
      price: "65€/sessió",
      color: "from-blue-600 to-blue-400",
      image: "/images/swimming-pool.jpg",
    },
    {
      id: 4,
      name: "Tennis Professional",
      category: "raqueta",
      duration: "60 min",
      level: "Tots els nivells",
      participants: "1-4",
      description: "Classes personalitzades amb entrenadors certificats ATP/WTA",
      price: "70€/sessió",
      color: "from-green-500 to-emerald-500",
      image: "/images/tennis-court.jpg",
    },
    {
      id: 5,
      name: "Atletisme Pista",
      category: "atletisme",
      duration: "120 min",
      level: "Intermig-Avançat",
      participants: "8-15",
      description: "Entrenament especialitzat en proves de velocitat, salt i llançaments",
      price: "50€/sessió",
      color: "from-purple-500 to-pink-500",
      image: "/images/athletics-track.jpg",
    },
    {
      id: 6,
      name: "Yoga Esportiu",
      category: "wellness",
      duration: "75 min",
      level: "Tots els nivells",
      participants: "10-15",
      description: "Millora la flexibilitat, equilibri i recuperació muscular",
      price: "35€/sessió",
      color: "from-indigo-500 to-purple-500",
      image: "/images/yoga-studio.jpg",
    },
  ]

  const categories = [
    { id: "tots", name: "Tots els Esports", icon: Star },
    { id: "fitness", name: "Fitness", icon: Zap },
    { id: "aquatic", name: "Esports Aquàtics", icon: Target },
    { id: "raqueta", name: "Esports de Raqueta", icon: Target },
    { id: "atletisme", name: "Atletisme", icon: Target },
    { id: "wellness", name: "Wellness", icon: Heart },
  ]

  const filteredSports =
    selectedCategory === "tots" ? sports : sports.filter((sport) => sport.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                SportElite
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Inici
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sobre Nosaltres
                </Link>
                <Link
                  href="/sports"
                  className="text-blue-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Esports
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contacte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div
            className={`text-center text-white transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tornar a l'inici
            </Link>
            <h1 className="text-5xl font-bold mb-6">
              Els Nostres <span className="text-yellow-300">Programes</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Descobreix la nostra àmplia gamma de programes d'entrenament dissenyats per atletes de tots els nivells i
              disciplines esportives.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSports.map((sport, index) => (
              <div
                key={sport.id}
                className={`group transform transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${sport.color} relative overflow-hidden`}>
                    <img
                      src={sport.image || "/placeholder.svg"}
                      alt={sport.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white font-semibold text-sm">{sport.price}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{sport.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{sport.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Durada: {sport.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        <span>Participants: {sport.participants}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="h-4 w-4 mr-2" />
                        <span>Nivell: {sport.level}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Reservar Classe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Què Inclou Cada Programa?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tots els nostres programes inclouen serveis premium per garantir la millor experiència
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Entrenador Personal",
                description: "Seguiment individualitzat durant tota la sessió",
              },
              {
                icon: Target,
                title: "Anàlisi de Rendiment",
                description: "Mesurament i seguiment dels teus progressos",
              },
              {
                icon: Heart,
                title: "Pla Nutricional",
                description: "Assessorament nutricional personalitzat",
              },
              {
                icon: Zap,
                title: "Equipament Premium",
                description: "Accés a instal·lacions i material d'última generació",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Preparat per començar?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contacta amb nosaltres per reservar la teva primera classe gratuïta
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 font-bold uppercase text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Classe Gratuïta
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
              <h4 className="text-lg font-semibold mb-4">Horaris</h4>
              <p className="text-gray-400">Dilluns - Divendres: 6:00 - 22:00</p>
              <p className="text-gray-400">Dissabte: 8:00 - 20:00</p>
              <p className="text-gray-400">Diumenge: 9:00 - 18:00</p>
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
