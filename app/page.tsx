import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dumbbell, Heart, Users, Zap, Star, Check, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Quote } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function GymLanding() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-950/95 backdrop-blur-md border-b border-purple-900/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Dumbbell className="h-10 w-10 text-purple-400" />
              <div className="absolute inset-0 h-10 w-10 text-purple-400 animate-pulse opacity-50" />
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              IRON CORE
            </span>
          </div>
          <nav className=" hidden md:flex space-x-8">
            {['Home', 'Classes', 'Trainers', 'Pricing', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-semibold relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Gym Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-gray-900/80 to-pink-900/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none">
              <span className="block text-white drop-shadow-2xl">UNLEASH</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 animate-pulse">
                YOUR POWER
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto font-light leading-relaxed">
            Transform your body, elevate your mind, and unlock your true potential at Iron Core Gym
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:via-purple-600 hover:to-pink-600 text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden group"
            >
              <span className="relative z-10">JOIN NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Link href= "/contact "/>
              FREE TRIAL
            </Button>
            
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-pink-900/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-12">
            FORGE YOUR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              LEGACY
            </span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              At Iron Core, we believe fitness is more than just physical transformation. It's about building mental resilience, 
              creating lasting habits, and becoming the strongest version of yourself.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our state-of-the-art facility and expert trainers are here to guide you on your journey to greatness.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-24 bg-gray-950 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
            OUR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              CLASSES
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Dumbbell, title: "Weightlifting", desc: "Build raw strength and muscle mass with our comprehensive weightlifting programs", color: "purple" },
              { icon: Heart, title: "Cardio", desc: "Boost your endurance and burn calories with high-intensity cardio workouts", color: "pink" },
              { icon: Users, title: "Yoga", desc: "Improve flexibility, balance, and mental clarity through mindful movement", color: "purple" },
              { icon: Zap, title: "CrossFit", desc: "Challenge yourself with varied, high-intensity functional fitness workouts", color: "pink" }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-500 group hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`h-20 w-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-pink-500 to-pink-600'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center leading-relaxed">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
            SUCCESS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              STORIES
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Jessica Martinez",
                role: "Fitness Enthusiast",
                image: "/placeholder.svg?height=100&width=100",
                quote: "Iron Core completely transformed my life. I've never felt stronger or more confident. The trainers are incredible and the community is so supportive!",
                rating: 5
              },
              {
                name: "David Thompson",
                role: "Former Athlete",
                image: "/placeholder.svg?height=100&width=100",
                quote: "After my sports career ended, I thought my best days were behind me. Iron Core proved me wrong. I'm in the best shape of my life at 35!",
                rating: 5
              },
              {
                name: "Maria Rodriguez",
                role: "Busy Professional",
                image: "/placeholder.svg?height=100&width=100",
                quote: "As a working mom, finding time for fitness was impossible. Iron Core's flexible schedule and amazing results keep me motivated every day.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-500 group hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardContent className="p-8">
                  <Quote className="h-12 w-12 text-purple-400 mb-6 opacity-50" />
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-purple-500"
                    />
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-purple-400 text-sm">{testimonial.role}</p>
                      <div className="flex mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
            MEET YOUR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              TRAINERS
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Mike Johnson",
                specialty: "Strength & Conditioning",
                image: "/placeholder.svg?height=300&width=300",
                description: "10+ years experience in powerlifting and strength training. Certified personal trainer specializing in muscle building.",
                color: "purple"
              },
              {
                name: "Sarah Davis",
                specialty: "HIIT & Cardio",
                image: "/placeholder.svg?height=300&width=300",
                description: "Former competitive athlete with expertise in high-intensity training and cardiovascular conditioning.",
                color: "pink"
              },
              {
                name: "Alex Chen",
                specialty: "Yoga & Flexibility",
                image: "/placeholder.svg?height=300&width=300",
                description: "Certified yoga instructor with 8 years of experience in Hatha, Vinyasa, and restorative yoga practices.",
                color: "purple"
              }
            ].map((trainer, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-500 group hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden">
                <div className="relative">
                  <Image
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60`}></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{trainer.name}</h3>
                  <p className={`${trainer.color === 'purple' ? 'text-purple-400' : 'text-pink-400'} font-semibold mb-4 text-lg`}>
                    {trainer.specialty}
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {trainer.description}
                  </p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-pink-900/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
            CHOOSE YOUR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              PLAN
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic",
                price: 29,
                color: "purple",
                features: ["Access to gym equipment", "Locker room access", "Basic fitness assessment", "Mobile app access"]
              },
              {
                name: "Standard",
                price: 59,
                color: "pink",
                popular: true,
                features: ["Everything in Basic", "Group classes included", "Nutrition consultation", "Guest passes (2/month)", "Personal training discount"]
              },
              {
                name: "Pro",
                price: 99,
                color: "purple",
                features: ["Everything in Standard", "Personal training sessions", "24/7 gym access", "Priority booking", "Meal planning", "Recovery sessions"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`bg-gradient-to-br from-gray-900 to-gray-800 ${plan.popular ? 'border-pink-500 border-2 scale-105' : 'border-gray-700'} hover:border-purple-500 transition-all duration-500 group hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-white text-3xl font-bold mb-4">{plan.name}</CardTitle>
                  <div className={`text-6xl font-black mb-6 ${plan.color === 'purple' ? 'text-purple-400' : 'text-pink-400'}`}>
                    ${plan.price}
                    <span className="text-lg text-gray-400 font-normal">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className={`h-5 w-5 ${plan.color === 'purple' ? 'text-purple-400' : 'text-pink-400'}`} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full ${plan.color === 'purple' ? 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600' : 'bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600'} text-white font-bold py-4 text-lg transition-all duration-300 hover:shadow-lg`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
            GET IN{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              TOUCH
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-8 text-white">Ready to Start Your Journey?</h3>
              <p className="text-gray-300 mb-12 text-xl leading-relaxed">
                Contact us today to learn more about our programs, schedule a tour, or ask any questions you might have.
              </p>
              <div className="space-y-6">
                {[
                  { icon: MapPin, text: "123 Fitness Street, Muscle City, MC 12345", color: "purple" },
                  { icon: Phone, text: "(555) 123-IRON", color: "pink" },
                  { icon: Mail, text: "info@ironcoregym.com", color: "purple" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${item.color === 'purple' ? 'from-purple-600 to-purple-500' : 'from-pink-600 to-pink-500'} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-500 shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 h-14 text-lg"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 h-14 text-lg"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      rows={6}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 text-lg"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
              <div className="relative">
                <Dumbbell className="h-10 w-10 text-purple-400" />
                <div className="absolute inset-0 h-10 w-10 text-purple-400 animate-pulse opacity-50" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                IRON CORE
              </span>
            </div>
            <div className="flex space-x-6 mb-8 md:mb-0">
              {[
                { icon: Facebook, color: "purple" },
                { icon: Instagram, color: "pink" },
                { icon: Twitter, color: "purple" }
              ].map((social, index) => (
                <Link key={index} href="#" className="group">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${social.color === 'purple' ? 'from-purple-600 to-purple-500' : 'from-pink-600 to-pink-500'} group-hover:scale-110 transition-all duration-300 hover:shadow-lg`}>
                    <social.icon className="h-6 w-6 text-white" />
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-gray-400 text-lg">
              © {new Date().getFullYear()} Iron Core Gym. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
