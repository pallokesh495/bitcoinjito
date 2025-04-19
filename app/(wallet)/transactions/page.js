// components/Transactions.js
"use client"

import { useState } from "react"
import styles from "./Transactions.module.css"
import { RefreshCw, ArrowDownToLine } from "lucide-react"

const Transactions = () => {
  const [filter, setFilter] = useState("Deposit")

  // Sample transaction data
  const transactions = [
    {
      id: "order174498864741",
      date: "Apr 18, 2025, 08:32 PM",
      amount: "100",
      amountType: "Crypto",
      status: "Processing",
      type: "Order",
    },
    {
      id: "25253535",
      date: "Apr 9, 2025, 11:44 AM",
      amount: "500 INR",
      amountType: "Fiat",
      status: "Approved",
      type: "Txn",
    },
    {
      id: "order174417907872",
      date: "Apr 9, 2025, 11:39 AM",
      amount: "100",
      amountType: "Crypto",
      status: "Processing",
      type: "Order",
    },
    {
      id: "order174342564811",
      date: "Mar 31, 2025, 06:24 PM",
      amount: "1",
      amountType: "Crypto",
      status: "Processing",
      type: "Order",
    },
    {
      id: "order174327234068",
      date: "Mar 29, 2025, 11:49 PM",
      amount: "1",
      amountType: "Crypto",
      status: "Processing",
      type: "Order",
    },
    {
      id: "order174297189143",
      date: "Mar 26, 2025, 12:21 PM",
      amount: "2",
      amountType: "Crypto",
      status: "Processing",
      type: "Order",
    },
  ]

  const handleRefresh = () => {
    console.log("Refreshing transactions...")
  }

  return (
    <div className={styles.transactionsPanel}>
      <div className={styles.transactionsHeader}>
        <div className={styles.filterDropdown}>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className={styles.filterSelect}>
            <option value="Deposit">Deposit</option>
            <option value="Withdraw">Withdraw</option>
            <option value="All">All Transactions</option>
          </select>
          <div className={styles.dropdownIcon}>
            <ArrowDownToLine size={16} />
          </div>
        </div>

        <button className={styles.refreshButton} onClick={handleRefresh}>
          <RefreshCw size={16} />
          <span>Refresh</span>
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.transactionsTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className={styles.transactionRow}>
                <td>{transaction.date}</td>
                <td>
                  {transaction.amount} <span className={styles.amountType}>({transaction.amountType})</span>
                </td>
                <td>
                  <span
                    className={`${styles.statusBadge} ${
                      transaction.status === "Approved" ? styles.approved : styles.processing
                    }`}
                  >
                    {transaction.status === "Approved" && <span className={styles.statusDot}>•</span>}
                    {transaction.status === "Processing" && <span className={styles.statusDot}>•</span>}
                    {transaction.status}
                  </span>
                </td>
                <td>
                  {transaction.type}: {transaction.id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transactions