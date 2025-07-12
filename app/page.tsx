import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Sparkles, Heart, Star } from "lucide-react"
import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"></div>
        <div className="absolute inset-0 opacity-30">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,182,193,0.3) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-rose-500" />
              <h1 className="text-2xl font-bold text-gray-800">Navya Fashion</h1>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Section */}
            <div className="mb-16">
              <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4" />
                <span>Coming Soon</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Navya Fashion
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">Your Vision, Our Creation</p>

              <div className="flex items-center justify-center space-x-2 text-gray-500 mb-12">
                <Heart className="h-5 w-5 text-rose-500" />
                <span className="text-lg">Where Dreams Meet Design</span>
                <Heart className="h-5 w-5 text-rose-500" />
              </div>
            </div>

            {/* Coming Soon Message */}
            <Card className="mb-12 bg-white/70 backdrop-blur-sm border-rose-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Something Beautiful is Coming</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're crafting an extraordinary fashion experience just for you. Get ready to explore unique designs
                  that bring your vision to life.
                </p>

                {/* Newsletter Signup */}
                <div className="max-w-md mx-auto">
                  <p className="text-sm text-gray-500 mb-4">Be the first to know when we launch</p>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 border-rose-200 focus:border-rose-400"
                    />
                    <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600">
                      Notify Me
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Designer Info */}
              <Card className="bg-white/70 backdrop-blur-sm border-rose-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Meet Your Designer</h3>
                  <p className="text-2xl font-bold text-rose-600 mb-2">Chandni Singh</p>
                  <p className="text-gray-600 text-sm">
                    Passionate about creating unique fashion pieces that reflect your personal style
                  </p>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="bg-white/70 backdrop-blur-sm border-rose-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-rose-500 flex-shrink-0" />
                      <Link href="tel:9326123594" className="text-gray-700 hover:text-rose-600 transition-colors">
                        +91 9326123594
                      </Link>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-rose-500 flex-shrink-0" />
                      <Link
                        href="mailto:navya8052023@gmail.com"
                        className="text-gray-700 hover:text-rose-600 transition-colors break-all"
                      >
                        navya8052023@gmail.com
                      </Link>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-rose-500 flex-shrink-0 mt-1" />
                      <address className="text-gray-700 not-italic text-sm leading-relaxed">
                        F1323 Bhairav Residency,
                        <br />
                        Kanakia Road, Beverly Park,
                        <br />
                        Next to Commissioner Bunglow,
                        <br />
                        Mira Road East, 401107
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-rose-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Custom Designs</h4>
                <p className="text-gray-600 text-sm">Tailored fashion pieces designed just for you</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Premium Quality</h4>
                <p className="text-gray-600 text-sm">High-quality materials and craftsmanship</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Personal Touch</h4>
                <p className="text-gray-600 text-sm">Every piece tells your unique story</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Navya Fashion. All rights reserved.</p>
          <p className="text-gray-400 text-xs mt-2">Designed with love for fashion enthusiasts</p>
        </footer>
      </div>
    </div>
  )
}
