"use client"
import { useEffect } from "react"
import Link from "next/link"
import styles from "./Sidebar.module.css"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: "Casino", icon: "🃏", href: "/casino" },
    { name: "Sports", icon: "🏀", href: "/sports" },
    { name: "Spribe", icon: "🎫", href: "/spribe" },
    { name: "Slots", icon: "🎰", href: "/slots" },
    { name: "Live", icon: "🚀", href: "/live" },
    { name: "Promotions", icon: "🎟️", href: "/promotions" },
    { name: "VIP Club", icon: "👑", href: "/vip-club", highlight: true },
    { name: "Bonus", icon: "🎁", href: "/bonus" },
    { name: "Affiliate", icon: "⭕", href: "/affiliate" },
    { name: "Provably Fair", icon: "⚖️", href: "/provably-fair" },
  ]

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar")
      const menuButton = document.getElementById("menu-button")

      if (isOpen && sidebar && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        toggleSidebar()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, toggleSidebar])

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className={styles.overlay} onClick={toggleSidebar} />}

      <div id="sidebar" className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <Link href={item.href} className={styles.menuLink}>
                  <span className={styles.icon}>{item.icon}</span>
                  {isOpen && (
                    <span className={`${styles.text} ${item.highlight ? styles.highlight : ""}`}>{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
