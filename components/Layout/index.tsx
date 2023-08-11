import React, { useEffect } from 'react'
import Footer from '../Footer'
import HeroBanner from '../Hero-Banner'
import Navbar from '../Navbar'
// import WhatsAppButton from '@/components/WhatsAppButton';
// import { WhatsAppWidget } from "react-whatsapp-widget";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IProp {
    children: any
}
const Layout: React.FC<IProp> = ({ children }) => {

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
    }); // Initialize AOS
  }, []);

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
      <main className="flex flex-col" data-aos="fade-down">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout