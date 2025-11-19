import React from 'react';
import QrCode from '../../assets/QR.jpeg'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <aside className='flex gap-5 ml-20' >
      <div>
        <img className='w-[100px] h-[100px]' src={QrCode} alt="" />
      </div>
       <div>
                <h1 className='pt-2 text-2xl font-bold text-[#969696]'>MD:RASEL.HOSSEN</h1>
                
                <p className='pt-1 font-semibold text-[#969696]'>Parsonal All Dittel<br/>Providing reliable tech since 2025</p>
       </div>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
         <a href="https://www.facebook.com/share/1BkPhd7Y27/"><FaFacebook size={30}/></a>
         <a href=""><IoLogoWhatsapp size={30}/></a>
         <a href=""><FaSquarePhone size={30}/></a>
         <a href=""><FaLinkedin size={30}/></a>

    </div>
  </nav>
</footer>
    );
};

export default Footer;