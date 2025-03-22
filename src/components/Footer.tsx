import React from 'react';
import Image from 'next/image';
// Instalar npm install react-icons
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp, FaSms } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="footercontent" className="bg-white text-white">
      <div className="container p-5">
        <div className="grid md:flex md:flex-row justify-between">
          
          <div className="flex items-center pt-10 mb-5">
            <Image width={100} height={100} src="/assets/Logo/logo.png" alt="Logo da empresa" className="h-20 w-20" />
          </div>

          <div className="grid m:grid-cols-3 sm:flex justify-center items-center gap-3 mb-10">
            <button className="text-gray-700 hover:text-gray-400 text-start">Termos de Uso</button>
            <button className="text-gray-700 hover:text-gray-400 text-start"><a href="/Documetation">Documentação</a></button>
            <button className="text-gray-700 hover:text-gray-400 text-start"><a href="/AboutCompany">About</a></button>
          </div>
        </div>

        <div className="text-sm mb-5 sm:mb-0 text-gray-400 text-center">
          © Copyright 2024. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
