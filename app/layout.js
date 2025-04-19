"use client";
import { useState } from "react";
import Footer from "@/components/footer/Footer";  
import UserHeader from "@/components/userHeader/UserHeader";
import GuestHeader from "@/components/guestHeader/GuestHeader";

import "./globals.css";




export default function RootLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const  Header = isAuthenticated ? UserHeader : GuestHeader;

  return (
    <html lang="en">
      <body>
        <Header />
       
        {children}
        <Footer/>
        </body>
       
    </html>
  );
}
