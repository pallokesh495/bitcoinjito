"use client"

import { useState } from "react"
import { X, Copy } from "lucide-react"
import styles from "./InviteModal.module.css"

export default function InviteModal({ isOpen, onClose, clubId }) {
  const [copySuccess, setCopySuccess] = useState({
    id: false,
    link: false,
  })

  // Generate share link based on club ID
  const shareLink = `https://bitcoinjito.com/club/${clubId}`

  // Handle copying text to clipboard
  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)

      // Show success state
      setCopySuccess({ ...copySuccess, [type]: true })

      // Reset success state after 2 seconds
      setTimeout(() => {
        setCopySuccess({ ...copySuccess, [type]: false })
      }, 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        {/* Close button */}
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        {/* Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <span className={styles.bitcoinSymbol}>₿</span>
            <span className={styles.logoText}>
              itcoin<span className={styles.jitoText}>Jito</span>
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className={styles.title}>Invite Players</h2>

        {/* Invite content */}
        <div className={styles.inviteContent}>
          {/* Invite ID */}
          <div className={styles.inviteField}>
            <div className={styles.fieldLabel}>Invite ID</div>
            <div className={styles.fieldValue}>
              <span>{clubId}</span>
              <button className={styles.copyButton} onClick={() => handleCopy(clubId, "id")}>
                {copySuccess.id ? <span className={styles.checkmark}>✓</span> : <Copy size={18} />}
              </button>
            </div>
          </div>

          {/* Share Link */}
          <div className={styles.inviteField}>
            <div className={styles.fieldLabel}>Share Link</div>
            <div className={styles.fieldValue}>
              <span className={styles.link}>{shareLink}</span>
              <button className={styles.copyButton} onClick={() => handleCopy(shareLink, "link")}>
                {copySuccess.link ? <span className={styles.checkmark}>✓</span> : <Copy size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Done button */}
        <button className={styles.doneButton} onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  )
}
