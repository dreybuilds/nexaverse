"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Globe,
  Shield,
  Zap,
  Users,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Send,
  Menu,
  X,
  Download,
  ArrowRight,
  ExternalLink,
  Wallet,
  BookOpen,
  Layers,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground dark">
      <header
        className={`sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/80" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground">N</span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">NexaVerse</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#community"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Community
            </Link>
            <Link
              href="#roadmap"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="hidden md:flex border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <Link href="/waitlist">Join Waitlist</Link>
            </Button>
            <button className="md:hidden text-muted-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10">
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#community"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="#roadmap"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/waitlist"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md border border-primary/20">
                  Africa's Future in Blockchain
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-primary-foreground">
                  Bridging the Future of Finance
                </h1>
                <p className="text-xl text-muted-foreground">
                  Empowering Retailers, Crypto Businesses, and Communities through a Revolutionary Web3 Ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 transition-all duration-300 rounded-full"
                    asChild
                  >
                    <Link href="/waitlist">
                      Join the Movement
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-black/40 to-primary/5 border border-white/10 p-1">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent animate-pulse"></div>
                <Image
                  src="/nexaverse.jpeg?height=400&width=600"
                  alt="NexaVerse - Africa's Future in Blockchain"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md border border-primary/20">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Our Mission & Vision
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mb-8 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">Our Mission</h3>
                <p className="text-muted-foreground">
                  At NexaVerse, our mission is to transform retail loyalty programs and humanitarian aid distribution in
                  Africa by leveraging blockchain technology. We aim to build a transparent, secure, and scalable
                  ecosystem that connects retailers, crypto vendors, and communities to drive financial inclusion and
                  sustainable growth.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-muted-foreground">
                  To make Africa a global leader in Web3 innovation by creating an ecosystem where everyday transactions
                  empower communities and foster economic empowerment.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">Our Story</h3>
                <p className="text-muted-foreground">
                  Founded by Tabitha Rotich, a passionate advocate for Web3 solutions and financial inclusion, NexaVerse
                  was born out of the need to address inefficiencies in traditional loyalty programs and aid
                  distribution. We believe that blockchain can create a fair, decentralized system that benefits
                  everyone—from local retailers to underprivileged communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background z-0"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md border border-primary/20">
                Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Our Blockchain Solutions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mb-8 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Nexa Points Hub</h3>
                <p className="text-muted-foreground">
                  Our blockchain-powered loyalty program enables retailers and crypto companies to issue digital rewards
                  (Nexa Points) that can be earned by customers and redeemed for discounts, products, or even crypto
                  payments.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Mary's Foundation Aid</h3>
                <p className="text-muted-foreground">
                  A transparent, blockchain-based aid platform that ensures donations and aid funds reach those in
                  need—directly and efficiently. Smart contracts automatically release funds based on verified community
                  needs.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Crypto Integration</h3>
                <p className="text-muted-foreground">
                  We seamlessly integrate crypto payments and Web3 technologies to facilitate secure and fast
                  transactions, bridging traditional retail with the world of decentralized finance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md border border-primary/20">
                Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                How It Works
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mb-8 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 pt-2 text-white">For Retailers & Crypto Vendors</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sign up for NexaVerse and integrate the Nexa Points Hub into your business.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Reward customers with digital loyalty points every time they make a purchase or engage with your
                      service.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 pt-2 text-white">For Consumers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Earn Nexa Points on every transaction at participating retailers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Redeem points for discounts, free products, or convert them into crypto through our integrated
                      payment systems.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 pt-2 text-white">For Aid Distribution</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Donations and funds are securely transferred via blockchain.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Smart contracts release aid based on verified community needs, ensuring transparency and
                      efficiency.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background z-0"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md border border-primary/20">
                Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Features & Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mb-8 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Crypto Education & Onboarding</h3>
                <p className="text-muted-foreground">
                  Comprehensive resources and tools to help newcomers understand blockchain technology and start their
                  crypto journey with confidence.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">DeFi & Web3 Adoption Tools</h3>
                <p className="text-muted-foreground">
                  User-friendly interfaces and simplified processes to make decentralized finance accessible to
                  everyone, regardless of technical expertise.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Financial Inclusion Programs</h3>
                <p className="text-muted-foreground">
                  Initiatives designed to bring banking services to the unbanked through blockchain technology, mobile
                  solutions, and community outreach.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Decentralized Rewards</h3>
                <p className="text-muted-foreground">
                  Enjoy a trustless, blockchain-based loyalty system that eliminates fraud and ensures transparency for
                  all participants.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Real-Time Aid Distribution</h3>
                <p className="text-muted-foreground">
                  Our smart contracts enable instant, verified distribution of aid to underprivileged communities with
                  complete transparency.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Secure Crypto Transactions</h3>
                <p className="text-muted-foreground">
                  State-of-the-art security protocols ensuring your digital assets remain protected throughout all
                  transactions on our platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Model Section */}
        <section id="business-model" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md border border-primary/20">
                Revenue
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Business Model
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mb-8 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">Subscription Fees</h3>
                <p className="text-muted-foreground">
                  Retailers and crypto vendors pay a subscription fee to access the NexaVerse platform and loyalty
                  tools.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">Transaction Fees</h3>
                <p className="text-muted-foreground">
                  A 7% fee is applied on all blockchain aid transactions, ensuring sustainable operations and continuous
                  platform improvements.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">Partnerships & Sponsorships</h3>
                <p className="text-muted-foreground">
                  We collaborate with crypto companies, NGOs, and government agencies to expand our ecosystem and drive
                  Web3 adoption.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">Premium Features</h3>
                <p className="text-muted-foreground">
                  Advanced analytics, targeted marketing tools, and specialized integrations for larger partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Partnerships Section */}
        <section id="community" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background z-0"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md border border-primary/20">
                Collaborate
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Community & Partnerships
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mb-8 rounded-full"></div>
              <p className="max-w-2xl text-muted-foreground text-lg">
                We're actively seeking partnerships with organizations that share our vision for a decentralized,
                transparent future.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">Retailers & Merchants</h3>
                <p className="text-muted-foreground mb-4">
                  To integrate our loyalty system and provide your customers with blockchain-powered rewards.
                </p>
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 rounded-full">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">Crypto Companies & Payment Processors</h3>
                <p className="text-muted-foreground mb-4">
                  To foster digital adoption and secure transactions across our ecosystem.
                </p>
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 rounded-full">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">NGOs & Aid Organizations</h3>
                <p className="text-muted-foreground mb-4">
                  For transparent and efficient distribution of aid funds to communities in need.
                </p>
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 rounded-full">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">Government & Financial Institutions</h3>
                <p className="text-muted-foreground mb-4">
                  To support financial inclusion initiatives across Africa through blockchain technology.
                </p>
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 rounded-full">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md border border-primary/20">
                Timeline
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Roadmap & Whitepaper
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mb-8 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] border-t-4 border-t-primary">
                <h3 className="text-xl font-bold mb-4 text-white">Phase 1 (0-6 Months)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Launch pilot program in Koriema, Baringo County with Asili Luxe Beauty.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Onboard initial retail partners and crypto vendors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Implement and test Mary's Foundation Aid for transparent aid distribution.</span>
                  </li>
                </ul>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] border-t-4 border-t-blue-500">
                <h3 className="text-xl font-bold mb-4 text-white">Phase 2 (6-12 Months)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Expand platform usage across Kenya.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Introduce a mobile app for easier access.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Develop strategic partnerships with NGOs and crypto organizations.</span>
                  </li>
                </ul>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] border-t-4 border-t-primary">
                <h3 className="text-xl font-bold mb-4 text-white">Phase 3 (1-2 Years)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Scale across Africa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Enhance platform features (e.g., DeFi integrations, NFT-based rewards).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Form global partnerships to solidify NexaVerse as a leading Web3 ecosystem.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background z-0"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md border border-primary/20">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Contact Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mb-8 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                      Subject
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 transition-all duration-300 rounded-full"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
                <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Email</h4>
                        <p className="text-muted-foreground">info@nexaverse.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Phone</h4>
                        <p className="text-muted-foreground">+254 +254 743084940</p>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/10">
                      <h4 className="font-medium mb-4 text-white">Follow Us</h4>
                      <div className="flex gap-4">
                        <a
                          href="https://twitter.com/nexaverse9"  // Replace with your Twitter profile URL
                          className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors border border-primary/30"
                          target="_blank"  // Opens the link in a new tab
                          rel="noopener noreferrer"  // Recommended for security when using target="_blank"
                        >
                          <Twitter className="h-5 w-5 text-primary" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/nexa-verse-3b3727357?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcXzrOCV2Q5m5dh%2BNRbKR8w%3D%3D"  // Replace with your LinkedIn profile URL
                          className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors border border-primary/30"
                          target="_blank"  // Opens the link in a new tab
                          rel="noopener noreferrer"  // Recommended for security when using target="_blank"
                        >
                          <Linkedin className="h-5 w-5 text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
            <div className="container relative z-10">
              <div className="flex flex-col items-center text-center mb-12">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md border border-primary/20">
                  Questions
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Frequently Asked Questions
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mb-8 rounded-full"></div>
              </div>
              <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-primary">
                      How do I earn Nexa Points?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Simply shop at any participating retailer or engage with our services, and you'll automatically earn
                      digital loyalty points.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-primary">
                      What is Mary's Foundation Aid?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      It's our blockchain-powered aid system that ensures transparency in fund distribution to
                      underprivileged communities.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-primary">
                      How is NexaVerse different?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We uniquely integrate retail loyalty, crypto adoption, and transparent aid distribution—all built on
                      secure blockchain technology.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-primary">
                      How can I become a partner?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      You can reach out to us through our contact form or email us directly at partnerships@nexaverse.com
                      to discuss partnership opportunities.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-primary">
                      Is NexaVerse available outside Kenya?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Currently, we're focused on Kenya, but we have plans to expand across Africa in Phase 3 of our
                      roadmap.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-90 z-0"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10 mix-blend-overlay z-0"></div>
            <div className="container relative z-10">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get Started with NexaVerse</h2>
                <p className="max-w-2xl text-white/80 mb-8 text-lg">
                  Be part of Africa's blockchain future. Join NexaVerse today and help us build a more transparent,
                  inclusive financial ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="rounded-full bg-white text-primary hover:bg-white/90">
                  <Link href="/waitlist">
                      Join the Movement
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Link href="#contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="border-t border-white/10 py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-2 font-bold text-xl mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground">N</span>
                  </div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                    NexaVerse
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">Africa's Future in Blockchain Loyalty & Aid</p>
                <div className="flex gap-4">
                <a
                  href="https://twitter.com/nexaverse9"  // Replace with your Twitter profile URL
                  className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors border border-primary/30"
                  target="_blank"  // Opens the link in a new tab
                  rel="noopener noreferrer"  // Recommended for security when using target="_blank"
                >
                  <Twitter className="h-4 w-4 text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nexa-verse-3b3727357?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcXzrOCV2Q5m5dh%2BNRbKR8w%3D%3D"  // Replace with your LinkedIn profile URL
                  className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors border border-primary/30"
                  target="_blank"  // Opens the link in a new tab
                  rel="noopener noreferrer"  // Recommended for security when using target="_blank"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
              </div>                
              </div>
              <div>
                <h3 className="font-bold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#roadmap" className="text-muted-foreground hover:text-primary transition-colors">
                      Roadmap
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-white">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-white">Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">info@nexaverse.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">+254 743084940</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} NexaVerse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


