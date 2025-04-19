"use client";

import "../globals.css";
import WalletSidebar from "./walletSideBar/page";

export default function WalletLayout({ children }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <WalletSidebar />
        {children}
      </div>
    </>
  );
}
