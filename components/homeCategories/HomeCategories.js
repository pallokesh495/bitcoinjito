"use client"

import { useState, useEffect } from "react"
import { Dices, Trophy, Rocket, Radio, PlugIcon as Slot, CreditCard } from "lucide-react"
import styles from "./HomeCategories.module.css"

const categories = [
  {
    id: "casino",
    title: "CASINO",
    description: "Dive into our in-house games, casino and slots",
    icon: <Dices className={styles.categoryIcon} />,
    image: "/assets/images/casino-bjb.png",
    size: "large",
  },
  {
    id: "sports",
    title: "SPORTS",
    description: "Bet on Football, Cricket, NFL, eSports & over 80 sports!",
    icon: <Trophy className={styles.categoryIcon} />,
    image: "/placeholder.svg?height=300&width=300",
    size: "large",
  },
  {
    id: "spribe",
    title: "SPRIBE",
    description: "",
    icon: <Rocket className={styles.categoryIcon} />,
    image: "/placeholder.svg?height=150&width=150",
    size: "small",
  },
  {
    id: "live",
    title: "LIVE",
    description: "",
    icon: <Radio className={styles.categoryIcon} />,
    image: "/placeholder.svg?height=150&width=150",
    size: "small",
  },
  {
    id: "slots",
    title: "SLOTS",
    description: "",
    icon: <Slot className={styles.categoryIcon} />,
    image: "/placeholder.svg?height=150&width=150",
    size: "small",
  },
  {
    id: "ezugi",
    title: "EZUGI",
    description: "",
    icon: <CreditCard className={styles.categoryIcon} />,
    image: "/placeholder.svg?height=150&width=150",
    size: "small",
  },
]

export default function HomeCategories() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading images
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${styles.categoryCard} ${styles[category.size]} ${isLoaded ? styles.loaded : ""}`}
          >
            <div className={styles.cardContent}>
              <div className={styles.titleRow}>
                {category.icon}
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>

              {category.description && <p className={styles.categoryDescription}>{category.description}</p>}
            </div>

            <div className={styles.imageContainer}>
              {category.id === "casino" && <div className={styles.casinoImage}></div>}
              {category.id === "sports" && <div className={styles.sportsImage}></div>}
              {category.id === "spribe" && <div className={styles.spribeImage}></div>}
              {category.id === "live" && <div className={styles.liveImage}></div>}
              {category.id === "slots" && <div className={styles.slotsImage}></div>}
              {category.id === "ezugi" && <div className={styles.ezugiImage}></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
