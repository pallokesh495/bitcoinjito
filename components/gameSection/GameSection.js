"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

import styles from "./GameSection.module.css"

// Sample game data - replace with your actual data fetching
const GAMES = [
  { id: 1, name: "Aviator", color: "#f44336", icon: "✈️" },
  { id: 2, name: "Dice", color: "#e040fb", icon: "🎲" },
  { id: 3, name: "Goal", color: "#4caf50", icon: "⚽" },
  { id: 4, name: "Hilo", color: "#ff9800", icon: "🎴" },
  { id: 5, name: "Hotline", color: "#2196f3", icon: "📱" },
  { id: 6, name: "Keno", color: "#e91e63", icon: "🎯" },
  { id: 7, name: "Mines", color: "#0277bd", icon: "💣" },
  { id: 8, name: "Mini Roulette", color: "#00c853", icon: "🎰" },
  { id: 9, name: "Plinko", color: "#00bcd4", icon: "🔽" },
  { id: 10, name: "Balloon", color: "#d50000", icon: "🎈" },
  { id: 11, name: "Keno 80", color: "#6200ea", icon: "🎲" },
  { id: 12, name: "Crash", color: "#ff6d00", icon: "📉" },
  { id: 13, name: "Blackjack", color: "#263238", icon: "🃏" },
  { id: 14, name: "Poker", color: "#c2185b", icon: "♠️" },
  { id: 15, name: "Baccarat", color: "#00695c", icon: "🎭" },
  { id: 16, name: "Slots", color: "#ffd600", icon: "🎰" },
  { id: 17, name: "Wheel", color: "#6a1b9a", icon: "🎡" },
  { id: 18, name: "Lottery", color: "#1565c0", icon: "🎟️" },
]

const GameCard = ({ game, loading = false }) => {
  if (loading) {
    return (
      <div className={styles.skeletonCard}>
        <div className={styles.skeleton}></div>
      </div>
    )
  }

  return (
    <div className={styles.gameCard} style={{ backgroundColor: game.color }}>
      <div className={styles.gameContent}>
        <div className={styles.gameIcon}>{game.icon}</div>
        <div className={styles.gameInitials}>
          {game.name.charAt(0)}
          {game.name.charAt(1)}
        </div>
        <div className={styles.gameName}>{game.name}</div>
      </div>

      {/* Hover overlay with play button */}
      <div className={styles.hoverOverlay}>
        <button size="icon" variant="outline" className={styles.playButton}>
          <Play className={styles.playIcon} />
        </button>
      </div>
    </div>
  )
}

export default function GameSection() {
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const scrollContainerRef = useRef(null)

  // Calculate items per row based on container width (responsive)
  const [itemsPerRow, setItemsPerRow] = useState(8)
  const [totalPages, setTotalPages] = useState(1)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Handle window resize to update items per row
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setItemsPerRow(2)
      else if (width < 768) setItemsPerRow(3)
      else if (width < 1024) setItemsPerRow(4)
      else if (width < 1280) setItemsPerRow(6)
      else setItemsPerRow(8)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate total pages based on expanded state
  useEffect(() => {
    const rowsToShow = expanded ? 3 : 1
    const itemsPerPage = itemsPerRow * rowsToShow
    setTotalPages(Math.ceil(GAMES.length / itemsPerPage))
  }, [expanded, itemsPerRow])

  // Get visible games based on current page and expanded state
  const getVisibleGames = () => {
    const rowsToShow = expanded ? 3 : 1
    const itemsPerPage = itemsPerRow * rowsToShow
    const startIndex = (currentPage - 1) * itemsPerPage
    return GAMES.slice(startIndex, startIndex + itemsPerPage)
  }

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const scrollAmount = direction === "left" ? -600 : 600
    container.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const toggleExpand = () => {
    setExpanded(!expanded)
    setCurrentPage(1) // Reset to first page when toggling
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Spribe</h2>
        <div className={styles.controls}>
          <button variant="ghost" onClick={toggleExpand} className={styles.toggleButton}>
            {expanded ? "Show Less" : "Show More"}
          </button>
          <button
            size="icon"
            variant="ghost"
            onClick={() => handleScroll("left")}
            className={styles.navButton}
            disabled={loading}
          >
            <ChevronLeft className={styles.navIcon} />
          </button>
          <button
            size="icon"
            variant="ghost"
            onClick={() => handleScroll("right")}
            className={styles.navButton}
            disabled={loading}
          >
            <ChevronRight className={styles.navIcon} />
          </button>
        </div>
      </div>

      {/* Scrollable container for horizontal scrolling */}
      <div
        ref={scrollContainerRef}
        className={`${styles.gamesContainer} ${expanded ? styles.expanded : styles.collapsed}`}
      >
        {loading
          ? // Skeleton loading state
            Array.from({ length: itemsPerRow }).map((_, index) => (
              <GameCard key={`skeleton-${index}`} game={GAMES[0]} loading={true} />
            ))
          : // Actual game cards
            getVisibleGames().map((game) => <GameCard key={game.id} game={game} />)}
      </div>

      {/* Pagination - only show when expanded */}
      {expanded && !loading && totalPages > 1 && (
        <div className={styles.paginationWrapper}>
          <div className={styles.pagination}>
            <button
              size="sm"
              variant="ghost"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              <ChevronLeft className={styles.paginationIcon} /> Previous
            </button>

            <div className={styles.pageInfo}>
              Page {currentPage} of {totalPages}
            </div>

            <button
              size="sm"
              variant="ghost"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
            >
              Next <ChevronRight className={styles.paginationIcon} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}