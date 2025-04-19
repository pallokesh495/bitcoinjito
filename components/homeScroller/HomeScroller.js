"use client"
import { useEffect, useRef } from "react"
import styles from "./HomeScroller.module.css"

export default function HomeScroller() {
  const scrollerRef = useRef(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    // Clone the content to create a seamless loop
    const scrollerContent = scroller.querySelector(`.${styles.scrollerContent}`)
    const scrollerItems = Array.from(scrollerContent.children)

    // Clone items and append to create the illusion of infinite scroll
    scrollerItems.forEach((item) => {
      const clone = item.cloneNode(true)
      scrollerContent.appendChild(clone)
    })

    // Auto scroll animation
    let animationId
    let scrollPosition = 0
    const scrollSpeed = 1 // Medium speed - adjust as needed

    const scroll = () => {
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled the width of the original items
      // to create a seamless loop
      if (scrollPosition >= scrollerItems[0].offsetWidth * scrollerItems.length) {
        scrollPosition = 0
      }

      scrollerContent.style.transform = `translateX(-${scrollPosition}px)`
      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationId = requestAnimationFrame(scroll)

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll)
    }

    scroller.addEventListener("mouseenter", handleMouseEnter)
    scroller.addEventListener("mouseleave", handleMouseLeave)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      scroller.removeEventListener("mouseenter", handleMouseEnter)
      scroller.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Sample game data - you can replace this with your actual data
  const games = [
    { id: 1, title: "BIG BASS BONANZA", currency: "ETH", value: "6.98", hidden: true },
    { id: 2, title: "CANDY STARS", currency: "ETC", value: "4.99", hidden: true },
    { id: 3, title: "GREAT GIFTS", currency: "TRON", value: "22.46", hidden: true },
    { id: 4, title: "BIG BASS CHRISTMAS", currency: "ETH", value: "5.55", hidden: true },
    { id: 5, title: "GATES OF OLYMPUS", currency: "ETC", value: "8.33", hidden: true },
    { id: 6, title: "BUFFALO KING", currency: "ETH", value: "6.45", hidden: true },
    { id: 7, title: "GREAT RHINO", currency: "ETH", value: "8.36", hidden: true },
    { id: 8, title: "BIG JUAN", currency: "USDT", value: "108.06", hidden: true },
    { id: 9, title: "PEARLOUS PRINCESS", currency: "ETH", value: "13.20", hidden: true },
    { id: 10, title: "BIG BASS AMAZON", currency: "TRON", value: "132.58", hidden: true },
    { id: 11, title: "ZEUS VS HADES", currency: "ETH", value: "10.47", hidden: true },
    { id: 12, title: "FURY OF ODIN", currency: "TRON", value: "413.3", hidden: true },
    { id: 13, title: "SWEET BONANZA", currency: "ETH", value: "5.94", hidden: true },
    { id: 14, title: "HOT PEPPER", currency: "USDT", value: "76.8", hidden: true },
    { id: 15, title: "PIZZA PIZZA", currency: "TRON", value: "130.5", hidden: true },
    { id: 16, title: "REEL BANKS", currency: "TRON", value: "455.5", hidden: true },
    { id: 17, title: "SHIELD OF SPARTA", currency: "ETH", value: "6.98", hidden: true },
  ]

  return (
    <div className={styles.scrollerContainer} ref={scrollerRef}>
      <div className={styles.scrollerContent}>
        {games.map((game) => (
          <div key={game.id} className={styles.gameCard}>
            <div className={styles.imageContainer}>
              <img
                src={`/placeholder.svg?height=150&width=120&text=${encodeURIComponent(game.title)}`}
                alt={game.title}
                className={styles.gameImage}
              />
              <div className={styles.gameTitle}>{game.title}</div>
            </div>
            <div className={styles.gameInfo}>
              <div className={styles.hiddenBadge}>
                <span className={styles.hiddenDot}></span>
                Hidden
              </div>
              <div className={styles.currencyValue}>
                {game.value} {game.currency}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
