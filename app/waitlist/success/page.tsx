"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Home, Twitter, Linkedin, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WaitlistSuccessPage() {
  const searchParams = useSearchParams()
  const name = searchParams.get("name") || "there"
  const email = searchParams.get("email") || "your email"

  const [copied, setCopied] = useState(false)

  // Clear copied status after 2 seconds
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  const shareUrl =
    typeof window !== "undefined" ? `${window.location.origin}/waitlist` : "https://nexaverse.com/waitlist"

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => setCopied(true))
      .catch((err) => console.error("Failed to copy: ", err))
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

      <main className="flex-1 container flex items-center justify-center py-12 md:py-24 z-10">
        <div className="max-w-md mx-auto backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] text-center">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center mb-6">
            <Check className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-primary-foreground">
            You're on the Waitlist!
          </h1>

          <p className="text-lg text-white mb-2">Hey {name.split(" ")[0]},</p>

          <p className="text-muted-foreground mb-6">
            Thanks for joining the NexaVerse waitlist! We've sent a confirmation to{" "}
            <span className="text-white">{email}</span>. We'll notify you as soon as we're ready to welcome you to the
            revolution.
          </p>

          <div className="space-y-4 mb-8">
            <h2 className="text-lg font-medium text-white">Share with your network</h2>
            <div className="flex justify-center gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Just joined the waitlist for NexaVerse - the future of blockchain loyalty and aid in Africa! Join me:")}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors border border-primary/30"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors border border-primary/30"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <button
                onClick={handleCopyLink}
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors border border-primary/30"
              >
                {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-primary" />}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">Want to know more about NexaVerse?</p>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 transition-all duration-300 rounded-full"
            >
              <Link href="/">
                Back to Homepage
                <Home className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="container py-6 border-t border-white/10 text-center text-sm text-muted-foreground z-10">
        &copy; {new Date().getFullYear()} NexaVerse. All rights reserved.
      </footer>
    </div>
  )
}

