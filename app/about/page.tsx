"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Users, Award, Heart, Zap } from "lucide-react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
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
                  className="text-blue-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sobre Nosaltres
                </Link>
                <Link
                  href="/sports"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div
            className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tornar a l'inici
            </Link>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Sobre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                SportElite
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des de 2009, hem estat dedicats a transformar vides a través de l'esport, oferint programes d'entrenament
              d'elit i creant una comunitat d'atletes excepcionals.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">La Nostra Història</h2>
              <p className="text-lg text-gray-600 mb-6">
                SportElite va néixer de la passió per l'excel·lència esportiva. Els nostres fundadors, antics atletes
                olímpics, van voler crear un espai on cada persona pogués descobrir i desenvolupar el seu màxim
                potencial atlètic.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Amb més de 15 anys d'experiència, hem entrenat centenars d'atletes, des de principiants fins a
                competidors d'elit internacional. La nostra filosofia es basa en la combinació de ciència esportiva
                avançada amb un enfocament personalitzat per a cada atleta.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Atletes Entrenats</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">Medalles Guanyades</div>
                </div>
              </div>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/training-facility.jpg"
                  alt="Instal·lacions d'entrenament"
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/images/athletes-training.jpg"
                  alt="Atletes entrenant"
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8"
                />
                <img
                  src="/images/modern-gym.jpg"
                  alt="Gimnàs modern"
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 -mt-8"
                />
                <img
                  src="/images/success-stories.jpg"
                  alt="Històries d'èxit"
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Els Nostres Valors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aquests principis guien tot el que fem i defineixen la nostra cultura esportiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excel·lència",
                description: "Busquem la perfecció en cada entrenament i competició",
              },
              {
                icon: Users,
                title: "Comunitat",
                description: "Creem vincles forts entre atletes i entrenadors",
              },
              {
                icon: Zap,
                title: "Innovació",
                description: "Utilitzem les últimes tecnologies i mètodes d'entrenament",
              },
              {
                icon: Heart,
                title: "Passió",
                description: "L'amor per l'esport és el que ens mou cada dia",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 delay-${(index + 1) * 100} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">El Nostre Equip</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professionals dedicats amb experiència internacional en esports d'alt rendiment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marc Rodríguez",
                role: "Director Tècnic",
                description: "Ex-atleta olímpic amb 20 anys d'experiència en entrenament d'elit",
                image: "/images/team-marc.jpg",
              },
              {
                name: "Laura Martínez",
                role: "Especialista en Rendiment",
                description: "Doctora en Ciències de l'Esport, experta en biomecànica i nutrició",
                image: "/images/team-laura.jpg",
              },
              {
                name: "David García",
                role: "Entrenador Principal",
                description: "Certificat internacional, especialitzat en esports de resistència",
                image: "/images/team-david.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Vols formar part de la família SportElite?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Descobreix com podem ajudar-te a aconseguir els teus objectius esportius
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 font-bold uppercase text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Contacta amb Nosaltres
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
