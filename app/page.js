"use client";
import { useState } from "react";
import styles from "./page.module.css";
import HomeScroller from "@/components/homeScroller/HomeScroller";
import HomeLiveTable from "@/components/homeLiveTable/HomeLiveTable";
import HomeBanner from "@/components/homeBanner/HomeBanner";
import GameSection from "@/components/gameSection/GameSection";
import HomeCategories from "@/components/homeCategories/HomeCategories";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className={styles.page}>
      <HomeBanner  />

      <HomeScroller />
      <HomeCategories/>

      <GameSection />

      <HomeLiveTable />
    </div>
  );
}
