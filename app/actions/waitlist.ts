"use server"

import { redirect } from "next/navigation"

export type WaitlistFormData = {
  name: string
  email: string
  interests: string[]
  referral: string
}

export async function submitWaitlistForm(formData: FormData) {
  // Simulate a delay to mimic server processing
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Extract and validate form data
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const interests = formData.getAll("interests") as string[]
  const referral = formData.get("referral") as string

  // Basic validation
  if (!name || !email) {
    return {
      success: false,
      message: "Name and email are required.",
    }
  }

  if (!email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    }
  }

  // In a real app, you would save this data to your database
  // For now, we'll just log it and redirect to the success page
  console.log("Waitlist signup:", { name, email, interests, referral })

  // Store data in the URL to display on the success page
  const searchParams = new URLSearchParams()
  searchParams.set("name", name)
  searchParams.set("email", email)

  // Redirect to success page with user data
  redirect(`/waitlist/success?${searchParams.toString()}`)
}

