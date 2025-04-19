"use client"

import { useState } from "react"
import { X, Eye, Edit, ChevronRight } from "lucide-react"
import styles from "./ClubMembershipModal.module.css"
import InviteModal from "../inviteModal/InviteModal"

export default function ClubMembershipModal({ isOpen, onClose }) {
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [currentPercentage, setCurrentPercentage] = useState(10) // Current rakeback percentage

  // Club data - in a real app, this would come from an API
  const clubData = {
    name: "CLUB_GJ3RER_5664",
    id: "D12E89B970",
    description: "Welcome to the Club!",
    availableRakeback: 247.85,
    timeRemaining: "3d 14h remaining",
    totalRakeback: 0,
    yesterdayRakeback: 0,
    activePlayers: 0,
    totalPlayers: 0,
  }

  // Percentage markers for the progress bar
  const percentageMarkers = [
    { value: 5, label: "5%" },
    { value: 15, label: "15%" },
    { value: 50, label: "50%" },
    { value: 100, label: "100%" },
    { value: 200, label: "200%" },
    { value: 300, label: "300%" },
  ]

  // Percentage values for the bottom scale
  const percentageValues = [0, 10, 15, 20, 25, 27, 30]

  // Calculate progress bar width based on current percentage
  const getProgressWidth = () => {
    const maxPercentage = 30 // Maximum percentage in the scale
    return (currentPercentage / maxPercentage) * 100
  }

  // Handle opening the invite modal
  const handleInviteClick = () => {
    setShowInviteModal(true)
  }

  // Handle closing the invite modal
  const handleInviteClose = () => {
    setShowInviteModal(false)
  }

  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        {/* Close button */}
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        {/* Club header */}
        <div className={styles.clubHeader}>
          <div className={styles.hostBadge}>Host</div>
          <div className={styles.clubLogo}>
            <div className={styles.sunIcon}></div>
          </div>
          <div className={styles.clubInfo}>
            <h2 className={styles.clubName}>{clubData.name}</h2>
            <p className={styles.clubId}>Club ID: {clubData.id}</p>
            <div className={styles.clubDescription}>
              {clubData.description}
              <button className={styles.editButton}>
                <Edit size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Club content */}
        <div className={styles.clubContent}>
          {/* Rakeback section */}
          <div className={styles.rakebackSection}>
            <div className={styles.rakebackHeader}>
              <h3 className={styles.rakebackTitle}>Club Rakeback</h3>
              <Eye size={20} className={styles.eyeIcon} />
              <span className={styles.rakebackPercentage}>{currentPercentage}%</span>
            </div>

            {/* Available rakeback */}
            <div className={styles.availableRakeback}>
              <div className={styles.rakebackInfo}>
                <span className={styles.rakebackLabel}>Available Rakeback</span>
                <span className={styles.rakebackAmount}>${clubData.availableRakeback}</span>
              </div>
              <button className={styles.claimButton}>
                Claim <span className={styles.timeRemaining}>{clubData.timeRemaining}</span>
              </button>
            </div>

            {/* Progress bar */}
            <div className={styles.progressContainer}>
              <div className={styles.progressMarkers}>
                {percentageMarkers.map((marker) => (
                  <div key={marker.value} className={styles.marker}>
                    <span className={styles.markerLabel}>{marker.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${getProgressWidth()}%` }}></div>
              </div>
              <div className={styles.percentageScale}>
                {percentageValues.map((value) => (
                  <div key={value} className={styles.percentageValue}>
                    {value}%
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className={styles.statsContainer}>
              <div className={styles.statBox}>
                <h4 className={styles.statTitle}>Active Players</h4>
                <p className={styles.statValue}>
                  <span className={styles.greenText}>{clubData.activePlayers}</span>/{clubData.totalPlayers}
                </p>
                <p className={styles.statSubtext}>Past 7 days</p>
              </div>
              <div className={styles.statBox}>
                <h4 className={styles.statTitle}>Total Rakeback</h4>
                <p className={styles.statValue}>
                  <span className={styles.greenText}>${clubData.totalRakeback}</span>
                </p>
                <p className={styles.statSubtext}>Yesterday: ${clubData.yesterdayRakeback}</p>
              </div>
            </div>

            {/* Invite button */}
            <button className={styles.inviteButton} onClick={handleInviteClick}>
              Invite players <ChevronRight size={20} className={styles.rightIcon} />
            </button>
            <p className={styles.inviteText}>Invite Players to earn more rakeback</p>
          </div>
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && <InviteModal isOpen={showInviteModal} onClose={handleInviteClose} clubId={clubData.id} />}
    </div>
  )
}
