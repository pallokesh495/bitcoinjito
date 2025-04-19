"use client"

import { useState, useEffect } from "react"
import styles from "./HomeLiveTable.module.css"

// Static table data
const staticTableData = [
  {
    id: "row1",
    game: { name: "Limbo", icon: "🔥" },
    player: "Hidden",
    betId: "161234567890",
    payout: "2.34x",
    profit: "0.0123456789",
    crypto: { symbol: "₿", color: "#F7931A" },
    timestamp: 1734567890000,
  },
  {
    id: "row2",
    game: { name: "Classic Dice", icon: "🎲" },
    player: "Hidden",
    betId: "162345678901",
    payout: "1.56x",
    profit: "0.0234567890",
    crypto: { symbol: "Ξ", color: "#627EEA" },
    timestamp: 1734567891000,
  },
  {
    id: "row3",
    game: { name: "Plinko", icon: "🟢" },
    player: "Hidden",
    betId: "163456789012",
    payout: "3.12x",
    profit: "0.0345678901",
    crypto: { symbol: "Ð", color: "#C2A633" },
    timestamp: 1734567892000,
  },
  {
    id: "row4",
    game: { name: "Hash Dice", icon: "❌" },
    player: "Hidden",
    betId: "164567890123",
    payout: "4.78x",
    profit: "0.0456789012",
    crypto: { symbol: "₮", color: "#26A17B" },
    timestamp: 1734567893000,
  },
  {
    id: "row5",
    game: { name: "Wheel", icon: "🎡" },
    player: "Hidden",
    betId: "165678901234",
    payout: "2.89x",
    profit: "0.0567890123",
    crypto: { symbol: "Ł", color: "#BFBBBB" },
    timestamp: 1734567894000,
  },
  {
    id: "row6",
    game: { name: "Limbo", icon: "🔥" },
    player: "Hidden",
    betId: "166789012345",
    payout: "5.23x",
    profit: "0.0678901234",
    crypto: { symbol: "₿", color: "#F7931A" },
    timestamp: 1734567895000,
  },
  {
    id: "row7",
    game: { name: "Classic Dice", icon: "🎲" },
    player: "Hidden",
    betId: "167890123456",
    payout: "1.98x",
    profit: "0.0789012345",
    crypto: { symbol: "Ξ", color: "#627EEA" },
    timestamp: 1734567896000,
  },
  {
    id: "row8",
    game: { name: "Plinko", icon: "🟢" },
    player: "Hidden",
    betId: "168901234567",
    payout: "3.45x",
    profit: "0.0890123456",
    crypto: { symbol: "Ð", color: "#C2A633" },
    timestamp: 1734567897000,
  },
  {
    id: "row9",
    game: { name: "Hash Dice", icon: "❌" },
    player: "Hidden",
    betId: "169012345678",
    payout: "4.12x",
    profit: "0.0901234567",
    crypto: { symbol: "₮", color: "#26A17B" },
    timestamp: 1734567898000,
  },
  {
    id: "row10",
    game: { name: "Wheel", icon: "🎡" },
    player: "Hidden",
    betId: "160123456789",
    payout: "2.67x",
    profit: "0.1012345678",
    crypto: { symbol: "Ł", color: "#BFBBBB" },
    timestamp: 1734567899000,
  },
]

// Functions for dynamic updates (if you want to keep them)
const generateRow = (seed = Math.random()) => {
  const games = [
    { name: "Limbo", icon: "🔥" },
    { name: "Classic Dice", icon: "🎲" },
    { name: "Plinko", icon: "🟢" },
    { name: "Hash Dice", icon: "❌" },
    { name: "Wheel", icon: "🎡" },
  ]
  const cryptoIcons = [
    { symbol: "₿", color: "#F7931A" },
    { symbol: "Ξ", color: "#627EEA" },
    { symbol: "Ð", color: "#C2A633" },
    { symbol: "₮", color: "#26A17B" },
    { symbol: "Ł", color: "#BFBBBB" },
  ]
  const game = games[Math.floor(seed * games.length)]
  const crypto = cryptoIcons[Math.floor(seed * cryptoIcons.length)]
  const betId = generateRandomBetId()
  const payout = (seed * 6 + 0.01).toFixed(2)
  const profit = (seed * 0.1).toFixed(10)

  return {
    id: seed.toString(36).substring(2, 15),
    game,
    player: "Hidden",
    betId,
    payout: `${payout}x`,
    profit,
    crypto,
    timestamp: Date.now(),
  }
}

const generateRandomBetId = () => {
  let result = "16"
  for (let i = 0; i < 10; i++) {
    result += Math.floor(Math.random() * 10)
  }
  return result
}

const HomeLiveTable = () => {
  const [tableData, setTableData] = useState(staticTableData)

  // Optional: Keep dynamic updates if needed
  useEffect(() => {
    const interval = setInterval(() => {
      setTableData((prevData) => {
        const newData = [...prevData]
        const randomIndex = Math.floor(Math.random() * newData.length)
        newData[randomIndex] = generateRow()
        return newData
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.tableContainer}>
      <table className={styles.liveTable}>
        <thead>
          <tr>
            <th>Game</th>
            <th>Player</th>
            <th>Bet ID</th>
            <th>Payout</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row) => (
            <tr key={row.id} className={styles.tableRow}>
              <td className={styles.gameCell}>
                <span className={styles.gameIcon}>{row.game.icon}</span>
                <span className={styles.gameName}>{row.game.name}</span>
              </td>
              <td>{row.player}</td>
              <td>{row.betId}</td>
              <td>{row.payout}</td>
              <td className={styles.profitCell}>
                <span className={styles.cryptoIcon} style={{ color: row.crypto.color }}>
                  {row.crypto.symbol}
                </span>
                <span className={styles.profitAmount}>{row.profit}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HomeLiveTable