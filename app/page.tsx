import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Chrome,
  ShoppingCart,
  CheckSquare,
  Heart,
  Sparkles,
  Zap,
  Users,
  Star,
  ArrowRight,
  Download,
} from "lucide-react"

export default function VibeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className="border-b border-sky-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo section */}
            <div className="flex items-center h-16">
              <div className="px-4">
                <img
                  src="icons/vibe192.png"
                  className="w-12 h-12"
                  alt="Vibe Logo"
                />
              </div>
            </div>

            {/* Mobile Chrome button */}
            <div className="flex md:hidden relative">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                <Chrome className="w-4 h-4" />
              </Button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-sky-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-sky-600 transition-colors">
                How it Works
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-sky-600 transition-colors">
                Reviews
              </a>
              <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                <Chrome className="w-4 h-4 mr-2" />
                Add to Chrome
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-sky-100 text-sky-700 hover:bg-sky-200">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Chrome Extension
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your AI Shopping
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Companion
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform any webpage into your personal productivity hub. Manage shopping lists, wishlists, and
              checklists with AI-powered insights that help you shop smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg">
                <Chrome className="w-5 h-5 mr-2" />
                Add to Chrome - Free
              </Button>

            </div>
            <p className="text-sm text-gray-500 mt-4">Coming Soon • Join the Waitlist • Free During Beta</p>
          </div>

          {/* Hero Video */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-sky-200/50 overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/bhPvHOEmtZs"
                title="Vibe Chrome Extension Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform how you <span className="text-sky-500">shop online</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vibe adds a powerful tab to every webpage, giving you instant access to AI-powered shopping tools and
              productivity features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sky-200/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Shopping Lists</h3>
                <p className="text-gray-600">
                  Create and manage shopping lists that sync across all your devices. AI automatically categorizes items
                  and suggests better alternatives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Wishlists</h3>
                <p className="text-gray-600">
                  Save items you love and let AI track prices, notify you of deals, and find similar products at better
                  prices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckSquare className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Checklists</h3>
                <p className="text-gray-600">
                  Create task lists and shopping checklists that adapt to your needs. AI suggests items you might have
                  forgotten.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compatibility Checker</h3>
                <p className="text-gray-600">
                  AI analyzes product compatibility, compares specifications, and warns you about potential issues
                  before you buy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Vibe Shopping Experience</h3>
                <p className="text-gray-600">
                  Just tell Vibe what you need in natural language. "Find me a laptop for video editing under $1500" and
                  get instant results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Universal Access</h3>
                <p className="text-gray-600">
                  Access your lists and AI assistant from any webpage. Vibe seamlessly integrates with your browsing
                  experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Vibe <span className="text-sky-500">works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in seconds and transform your browsing experience with AI-powered shopping assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">
                  <img src="icons/Kippi_1.png" className="w-24 h-24" alt="Vibe Logo" />
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Install Extension</h3>
              <p className="text-gray-600">
                Add Vibe to Chrome in one click. No signup required, start using immediately on any webpage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">
                  <img src="icons/Kippi_2.png" className="w-24 h-24" alt="Vibe Logo" />
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Open Vibe Tab</h3>
              <p className="text-gray-600">
                Click the Vibe tab that appears on every page. Access your lists, AI assistant, and shopping tools
                instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">
                  <img src="icons/Kippi_3.png" className="w-24 h-24" alt="Vibe Logo" />
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Shop Smarter</h3>
              <p className="text-gray-600">
                Let AI help you compare products, check compatibility, and find exactly what you need with natural
                language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join our <span className="text-sky-500">beta testers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be among the first to experience the future of smart shopping with Vibe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-sky-200/50 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="bg-sky-100 rounded-lg p-6 mb-4 flex-grow">
                  <p className="text-gray-600">
                    "Looking forward to trying Vibe's AI shopping assistant. The concept of smart compatibility checking and price tracking sounds promising!"
                  </p>
                </div>
                <div className="flex items-center space-x-3 mt-auto">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="text-sky-600 font-semibold">BT</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Beta Tester</p>
                    <p className="text-sm text-gray-500">Waitlist Member</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sky-200/50 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="bg-sky-100 rounded-lg p-6 mb-4 flex-grow">
                  <p className="text-gray-600">
                    "Excited to see how Vibe can help me shop more efficiently. The AI features look like they could save me a lot of time!"
                  </p>
                </div>
                <div className="flex items-center space-x-3 mt-auto">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="text-sky-600 font-semibold">CT</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Beta Tester</p>
                    <p className="text-sm text-gray-500">Waitlist Member</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sky-200/50 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="bg-sky-100 rounded-lg p-6 mb-4 flex-grow">
                  <p className="text-gray-600">
                    "The idea of having an AI shopping companion is brilliant. Can't wait to try out the smart lists and price tracking!"
                  </p>
                </div>
                <div className="flex items-center space-x-3 mt-auto">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="text-sky-600 font-semibold">LT</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Beta Tester</p>
                    <p className="text-sm text-gray-500">Waitlist Member</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Be the first to experience Vibe</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Join our waitlist to get early access and help shape the future of AI-powered shopping assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Join Waitlist
            </Button>

          </div>
          <p className="text-sky-100 mt-6 text-sm">Early access • Free beta testing </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center">
                <img src="icons/vibe192.png" className="w-6 h-6" alt="Vibe Logo" />
              </div>
              <span className="text-xl font-bold">Vibe</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Vibe. All rights reserved. Currently in development.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
