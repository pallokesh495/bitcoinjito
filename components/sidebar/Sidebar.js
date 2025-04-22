"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./Sidebar.module.css"

const Sidebar = ({ isOpen: initialIsOpen }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)

  // Sync isOpen with prop changes on client
  useEffect(() => {
    setIsOpen(initialIsOpen)
  }, [initialIsOpen])

  return (
    <>
      {/* Overlay for mobile - no longer needed for auto-close */}
      {isOpen && <div className={styles.overlay} />}

      <div id="sidebar" className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/casino" className={styles.menuLink}>
                <span className={styles.icon}>🃏</span>
                {isOpen && <span className={styles.text}>Casino</span>}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/sports" className={styles.menuLink}>
                <span className={styles.icon}>🏀</span>
                {isOpen && <span className={styles.text}>Sports</span>}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/spribe" className={styles.menuLink}>
                <span className={styles.icon}>🎫</span>
                {isOpen && <span className={styles.text}>Spribe</span>}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/slots" className={styles.menuLink}>
                <span className={styles.icon}>🎰</span>
                {isOpen && <span className={styles.text}>Slots</span>}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/live" className={styles.menuLink}>
                <span className={styles.icon}>🚀</span>
                {isOpen && <span className={styles.text}>Live</span>}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/promotions" className={styles.menuLink}>
                <span className={styles.icon}>🎟️</span>
                {isOpen && <span className={styles.text}>Promotions</span>}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/vip-club" className={styles.menuLink}>
                <span className={styles.icon}>👑</span>
                {isOpen && <span className={`${styles.text} ${styles.highlight}`}>VIP Club</span>}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <div className={styles.groupDivider}></div>
            </li>
            <li className={styles.menuItem}>
              <Link href="/bonus" className={styles.menuLink}>
                <span className={styles.icon}>🎁</span>
                {isOpen && <span className={styles.text}>Bonus</span>}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/affiliate" className={styles.menuLink}>
                <span className={styles.icon}>⭕</span>
                {isOpen && <span className={styles.text}>Affiliate</span>}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/provably-fair" className={styles.menuLink}>
                <span className={styles.icon}>⚖️</span>
                {isOpen && <span className={styles.text}>Provably Fair</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar