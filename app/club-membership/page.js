"use client"

import { useState } from "react"
import ClubMembershipModal from "@/components/clubMembershipModal/ClubMembershipModal"

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black" style={{padding:"20rem"}}>
      <button onClick={() => setShowModal(true)} className="bg-green-400 hover:bg-green-500 text-black font-bold">
        Open Club Membership
      </button>

      <ClubMembershipModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  )
}