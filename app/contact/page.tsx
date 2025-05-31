"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sport: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", sport: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Esports
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
              Contacta amb <span className="text-yellow-300">Nosaltres</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Estem aquí per ajudar-te a començar el teu viatge esportiu. Contacta amb el nostre equip per més
              informació sobre els nostres programes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Envia'ns un Missatge</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Missatge Enviat!</h3>
                    <p className="text-gray-600">Ens posarem en contacte amb tu aviat.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom Complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="El teu nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="el.teu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telèfon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="+34 123 456 789"
                        />
                      </div>
                      <div>
                        <label htmlFor="sport" className="block text-sm font-medium text-gray-700 mb-2">
                          Esport d'Interès
                        </label>
                        <select
                          id="sport"
                          name="sport"
                          value={formData.sport}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Selecciona un esport</option>
                          <option value="functional">Entrenament Funcional</option>
                          <option value="crossfit">CrossFit Elite</option>
                          <option value="swimming">Natació Competitiva</option>
                          <option value="tennis">Tennis Professional</option>
                          <option value="athletics">Atletisme Pista</option>
                          <option value="yoga">Yoga Esportiu</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Missatge *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Explica'ns els teus objectius esportius..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Missatge
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div
              className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Informació de Contacte</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Estem ubicats al cor de la ciutat amb fàcil accés en transport públic. Vine a visitar-nos o
                    contacta'ns per qualsevol consulta.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Adreça</h3>
                      <p className="text-gray-600">
                        Carrer de l'Esport, 123
                        <br />
                        08001 Barcelona, Catalunya
                        <br />
                        Espanya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Telèfon</h3>
                      <p className="text-gray-600">
                        +34 123 456 789
                        <br />
                        +34 987 654 321 (Emergències)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        info@sportelite.cat
                        <br />
                        entrenament@sportelite.cat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Horaris</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Dilluns - Divendres: 6:00 - 22:00</p>
                        <p>Dissabte: 8:00 - 20:00</p>
                        <p>Diumenge: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vine a Visitar-nos</h3>
                  <p className="text-gray-600 mb-4">
                    Estem al centre de Barcelona, a prop del metro i amb aparcament disponible.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Veure al Mapa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntes Freqüents</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Respostes a les preguntes més comunes sobre els nostres serveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Necessito experiència prèvia?",
                answer:
                  "No! Oferim programes per a tots els nivells, des de principiants fins a atletes professionals.",
              },
              {
                question: "Què inclou la classe gratuïta?",
                answer: "Una sessió completa d'entrenament, avaluació física i pla personalitzat inicial.",
              },
              {
                question: "Tenen vestuaris i dutxes?",
                answer: "Sí, disposem d'instal·lacions completes amb vestuaris, dutxes i taquilles.",
              },
              {
                question: "Puc cancel·lar una classe?",
                answer: "Sí, pots cancel·lar fins a 24 hores abans sense cap cost addicional.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
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
