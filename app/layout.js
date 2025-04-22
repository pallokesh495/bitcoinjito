"use client";
import { useState } from "react";
import Footer from "@/components/footer/Footer";  
import UserHeader from "@/components/userHeader/UserHeader";
import GuestHeader from "@/components/guestHeader/GuestHeader";
import styles from './layout.module.css';
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";

export default function RootLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const Header = isAuthenticated ? UserHeader : GuestHeader;
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <html lang="en">
      <body>
        <Header toggleSidebar={toggleSidebar} />
        <div className={styles.container}>
          <Sidebar isOpen={sidebarOpen}  />
          <main className={`${sidebarOpen ? styles.ContentSidebarOpen : styles.ContentSidebarClosed}`}>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}