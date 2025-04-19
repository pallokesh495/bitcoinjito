"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./GuestHeader.module.css";
import { Menu, MessageSquare, Globe } from "lucide-react";
import Sidebar from "@/components/sidebar/Sidebar";
import SignInModal from "../signInModal/SignInModal";
import SignUpModal from "../signUpModal/SignUpModal";

const GuestHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleOpenSignIn = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
  };

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  };

  const handleClose = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <button
              id="menu-button"
              className={styles.menuButton}
              onClick={toggleSidebar}
            >
              <Menu size={24} color="#fff" />
            </button>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logo}>
                <span className={styles.bitcoinLogo}>#</span>
                <span>itcoin</span>
                <span className={styles.jitoText}>Jito</span>
              </div>
            </Link>
          </div>

          <div className={styles.rightSection}>
            <button
              className={styles.signInButton}
              onClick={handleOpenSignIn}
            >
              Sign in
            </button>
            <button
              className={styles.signUpButton}
              onClick={handleOpenSignUp}
            >
              Sign up
            </button>
            <button className={styles.iconButton}>
              <MessageSquare size={20} color="#fff" />
            </button>
            <button className={styles.iconButton}>
              <Globe size={20} color="#fff" />
            </button>
          </div>
        </div>
      </header>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <SignInModal
        isOpen={isSignInOpen}
        onClose={handleClose}
        onSwitchToSignUp={handleOpenSignUp}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={handleClose}
        onSwitchToSignIn={handleOpenSignIn}
      />
    </>
  );
};

export default GuestHeader;