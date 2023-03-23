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
      {/* <WhatsAppButton phoneNumber={"2348032167911"} message="Hey! Good day" /> */}
      {/* <WhatsAppWidget
        phoneNumber="2348030614003"
        companyName="Teetoobeez"
        replyTimeText="Always at your service 24/7"
      /> */}
      <FloatingWhatsApp
        phoneNumber="2348030614003"
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