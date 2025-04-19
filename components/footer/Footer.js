"use client";

import styles from "./Footer.module.css"
import Link from "next/link"

import { use } from "react"

const Footer = () => {
  const partnerLogos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p1-YRiqul6WuI0GD1IrYzgKb3iExB190c.webp",
      alt: "SiGMA",
      width: 140,
      height: 40,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-H2JU70wOmyYXqyp50iDwo2Fe8hn0oT.webp",
      alt: "Responsible Gambling",
      width: 160,
      height: 40,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-RMQaDYzuPyJo56pbb0Q0m8ZId7YcLN.webp",
      alt: "GamCare",
      width: 150,
      height: 40,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-X6d8TSweccNci6ucIKatvjfvunbGii.webp",
      alt: "betblocker",
      width: 160,
      height: 40,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p5-DX8n3dFNoqdgTKGmVm9fw4BRK5yKU3.webp",
      alt: "cloud9",
      width: 100,
      height: 40,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p6-k6eRrslEdvFA26rn9BfEbTXMlGtDXI.webp",
      alt: "18+",
      width: 60,
      height: 40,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p7-ck4ubB43Kb04sy3bdySwTcbxoHG4nW.png",
      alt: "Leicester City Football Club",
      width: 60,
      height: 60,
    },
  ]

  const cryptoLogos = [
    { name: "Bitcoin", symbol: "BTC", color: "#F7931A" },
    { name: "Ethereum", symbol: "ETH", color: "#627EEA" },
    { name: "Dogecoin", symbol: "DOGE", color: "#C2A633" },
    { name: "Tether", symbol: "USDT", color: "#26A17B" },
    { name: "Litecoin", symbol: "LTC", color: "#BFBBBB" },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.partnersSection}>
        <div className={styles.partnerLogos}>
          {partnerLogos.map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={styles.partnerLogo}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.mainContent}>
        <div className={styles.companyInfo}>
          <div className={styles.logo}>
            <span className={styles.bitcoinLogo}>#</span>
            <span>itcoin</span>
            <span className={styles.jitoText}>Jito</span>
          </div>
          <p className={styles.description}>
            Bitcoinjito is built by gamblers for gamblers. With our unique community and a huge selection of games like
            Crash, HashDice, Plinko, Slots, and many more. Your greatest casino adventure is waiting for you!
          </p>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.links}>
            <Link href="/help" className={styles.link}>
              HELP CENTER
            </Link>
            <Link href="/agreement" className={styles.link}>
              USER AGREEMENT
            </Link>
            <Link href="/privacy" className={styles.link}>
              PRIVACY POLICY
            </Link>
          </div>

          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>CONTACT US</h3>
            <p className={styles.contactInfo}>
              Email:{" "}
              <a href="mailto:admin@bitcoinjito.com" className={styles.emailLink}>
                admin@bitcoinjito.com
              </a>
            </p>
          </div>

          <div className={styles.currenciesSection}>
            <h3 className={styles.sectionTitle}>ACCEPTED CURRENCIES</h3>
            <div className={styles.cryptoIcons}>
              {cryptoLogos.map((crypto, index) => (
                <div key={index} className={styles.cryptoIcon} style={{ backgroundColor: crypto.color }}>
                  {crypto.symbol.charAt(0)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
