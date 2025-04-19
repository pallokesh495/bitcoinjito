"use client"

import styles from "./WalletSideBar.module.css"
import { RefreshCcw, Wallet, BarChart3 } from "lucide-react"

const WalletSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <RefreshCcw size={18} className={styles.sidebarIcon} />
        <span>Deposit</span>
      </div>
      <div className={styles.sidebarItem}>
        <Wallet size={18} className={styles.sidebarIcon} />
        <span>Withdraw</span>
      </div>
      <div className={styles.sidebarItem}>
        <BarChart3 size={18} className={styles.sidebarIcon} />
        <span>Swap</span>
      </div>
      <div className={`${styles.sidebarItem} ${styles.active}`}>
        <RefreshCcw size={18} className={styles.sidebarIcon} />
        <span>Transactions</span>
      </div>
    </div>
  )
}

export default WalletSidebar