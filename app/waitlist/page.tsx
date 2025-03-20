"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, UserPlus, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WaitlistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormError("")

    try {
      // In a real implementation, you would handle the form submission here
      // For now, we'll simulate a submission and redirect
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Basic validation
      const name = formData.get("name") as string
      const email = formData.get("email") as string

      if (!name || !email) {
        setFormError("Name and email are required.")
        setIsSubmitting(false)
        return
      }

      if (!email.includes("@")) {
        setFormError("Please provide a valid email address.")
        setIsSubmitting(false)
        return
      }

      // Get selected interests
      const interests = formData.getAll("interests") as string[]
      const referral = formData.get("referral") as string

      // In a real app, you would save this data to your database
      console.log("Waitlist signup:", { name, email, interests, referral })

      // Redirect to success page with user data
      const searchParams = new URLSearchParams()
      searchParams.set("name", name)
      searchParams.set("email", email)

      window.location.href = `/waitlist/success?${searchParams.toString()}`
    } catch (error) {
      console.error(error)
      setFormError("Something went wrong. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <header className="container flex py-6 z-10">
        <Link href="/" className="flex items-center gap-2 group">
          <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Back to Home</span>
        </Link>
      </header>

      <main className="flex-1 container flex flex-col md:flex-row items-center justify-center py-12 md:py-24 gap-12 z-10">
        <div className="space-y-6 max-w-md">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md border border-primary/20">
            Join the Revolution
          </div>
          <h1 className="text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-primary-foreground">
            Sign Up for the NexaVerse Waitlist
          </h1>
          <p className="text-lg text-muted-foreground">
            Be among the first to experience the future of blockchain loyalty and aid in Africa. Early members will
            receive special benefits and exclusive access.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/30">
                <Check className="h-3.5 w-3.5 text-primary" />
              </div>
              <p className="text-muted-foreground">Early access to the NexaVerse platform</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/30">
                <Check className="h-3.5 w-3.5 text-primary" />
              </div>
              <p className="text-muted-foreground">Priority support and personalized onboarding</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(new FormData(e.currentTarget))
            }}
            className="space-y-4"
          >
            {formError && (
              <div className="p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {formError}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-white">
                Full Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  required
                  className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 pl-10 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="John Doe"
                />
                <Users className="h-4 w-4 text-muted-foreground absolute left-3 top-3" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 pl-10 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="you@example.com"
                />
                <Mail className="h-4 w-4 text-muted-foreground absolute left-3 top-3" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">I'm interested in (select all that apply)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input type="checkbox" name="interests" value="loyalty" className="peer hidden" />
                  <div className="w-5 h-5 rounded border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-primary/50 transition-colors peer-checked:border-primary peer-checked:bg-primary/20">
                    <Check className="h-3 w-3 text-primary opacity-0 group-hover:opacity-20 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">
                    Blockchain Loyalty
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input type="checkbox" name="interests" value="aid" className="peer hidden" />
                  <div className="w-5 h-5 rounded border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-primary/50 transition-colors peer-checked:border-primary peer-checked:bg-primary/20">
                    <Check className="h-3 w-3 text-primary opacity-0 group-hover:opacity-20 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">
                    Transparent Aid
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input type="checkbox" name="interests" value="crypto" className="peer hidden" />
                  <div className="w-5 h-5 rounded border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-primary/50 transition-colors peer-checked:border-primary peer-checked:bg-primary/20">
                    <Check className="h-3 w-3 text-primary opacity-0 group-hover:opacity-20 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">
                    Crypto Payments
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input type="checkbox" name="interests" value="business" className="peer hidden" />
                  <div className="w-5 h-5 rounded border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-primary/50 transition-colors peer-checked:border-primary peer-checked:bg-primary/20">
                    <Check className="h-3 w-3 text-primary opacity-0 group-hover:opacity-20 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">
                    Business Partnerships
                  </span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="referral" className="text-sm font-medium text-white">
                How did you hear about us? <span className="text-muted-foreground">(Optional)</span>
              </label>
              <div className="relative">
                <select
                  id="referral"
                  name="referral"
                  className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="" className="bg-background">
                    Select an option
                  </option>
                  <option value="social" className="bg-background">
                    Social Media
                  </option>
                  <option value="friend" className="bg-background">
                    Friend or Colleague
                  </option>
                  <option value="search" className="bg-background">
                    Search Engine
                  </option>
                  <option value="event" className="bg-background">
                    Event or Conference
                  </option>
                  <option value="news" className="bg-background">
                    News Article
                  </option>
                  <option value="other" className="bg-background">
                    Other
                  </option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 transition-all duration-300 rounded-full"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    Join the Waitlist
                    <UserPlus className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-2">
              By signing up, you agree to our{" "}
              <Link href="#" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </main>

      <footer className="container py-6 border-t border-white/10 text-center text-sm text-muted-foreground z-10">
        &copy; {new Date().getFullYear()} NexaVerse. All rights reserved.
      </footer>
    </div>
  )
}

