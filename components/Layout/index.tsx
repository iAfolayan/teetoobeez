import React from 'react'
import Footer from '../Footer'
import HeroBanner from '../Hero-Banner'
import Navbar from '../Navbar'
// import WhatsAppButton from '@/components/WhatsAppButton';
// import { WhatsAppWidget } from "react-whatsapp-widget";
import { FloatingWhatsApp } from "react-floating-whatsapp";

interface IProp {
    children: any
}
const Layout: React.FC<IProp> = ({ children }) => {
  return (
    <div className="relative">
      <FloatingWhatsApp
        phoneNumber="2347033010687"
        accountName="Teetoobeez"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />

      <Navbar />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout