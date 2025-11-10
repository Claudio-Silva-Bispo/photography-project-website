import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBuilding, faPhone, faCalendarAlt, faCalendarTimes, faComments, faChevronDown, faUsers, faThumbsUp, faShareAlt, faEnvelope, faGlobe, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeHash, setActiveHash] = useState('');
  const router = useRouter();

  const menuItems: Array<{ item: string, path: string, icon: any, type: 'page' | 'section' }> = [
    { item: 'Home', path: '/', icon: faHome, type: 'page' },
    { item: 'Sobre nós', path: '#about', icon: faBuilding, type: 'section' },
    { item: 'Contato', path: '#ContactSection', icon: faPhone, type: 'section' },
    // { item: 'Orçamento', path: '#quote', icon: faCalendarAlt, type: 'section' },
    // { item: 'Tabela preço', path: '#price-table', icon: faMoneyCheckDollar, type: 'section' },
    // { item: 'Serviços', path: '#services', icon: faCalendarTimes, type: 'section' },
    { item: 'Testimonials', path: '#Testimonials', icon: faThumbsUp, type: 'section' },
    { item: 'Dicas', path: '#tips', icon: faShareAlt, type: 'section' },
    { item: 'Galeria', path: '/Gallery', icon: faGlobe, type: 'page' },
  ];

  const sections: Array<{
    title: string;
    icon: any;
    description: string;
    path: string;
    type: 'page' | 'section';
  }> = [
    {
      title: 'Sobre nós',
      icon: faBuilding,
      description: 'Aprenda mais sobre nós',
      path: '#AboutCompany',
      type: 'section'
    },
    // {
    //   title: 'Contato',
    //   icon: faPhone,
    //   description: 'Get in touch with us',
    //   path: '#ContactSection',
    //   type: 'section'
    // },
    {
      title: 'Testimonials',
      icon: faThumbsUp,
      description: 'O que nossos clientes andam falando',
      path: '#Testimonials',
      type: 'section'
    },
    // {
    //   title: 'Preço',
    //   icon: faUsers,
    //   description: 'Sessão exclusiva com os preços bases',
    //   path: '#PriceTable',
    //   type: 'section'
    // },
    // {
    //   title: 'Serviços',
    //   icon: faEnvelope,
    //   description: 'serviços disponiveis',
    //   path: '#Services',
    //   type: 'section'
    // },
    {
      title: 'Galeria Personalizada',
      icon: faGlobe,
      description: 'Fotos dos principais serviços',
      path: '/Gallery',
      type: 'page'
    },
  ];

  // Função aprimorada para navegação
  const handleNavigation = async (path: string, type: 'page' | 'section' = 'section') => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);

    if (type === 'page') {
      // Navegação para páginas
      await router.push(path);
    } else if (type === 'section') {
      // Navegação para seções
      if (path.startsWith('#')) {
        const sectionId = path.substring(1);
        
        if (router.pathname === '/') {
          // Se já estiver na home, rola diretamente para a seção
          scrollToSection(sectionId);
        } else {
          // Se não estiver na home, navega para a home primeiro
          await router.push('/');
          // Aguarda um pequeno delay para garantir que a página carregou
          setTimeout(() => {
            scrollToSection(sectionId);
          }, 100);
        }
      }
    }
  };

  // Função para rolar até uma seção específica
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId) || document.querySelector(`[data-section="${sectionId}"]`);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Atualiza o hash da URL sem recarregar a página
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `#${sectionId}`);
        setActiveHash(`#${sectionId}`);
      }
    } else {
      console.warn(`Seção com ID "${sectionId}" não encontrada`);
    }
  };

  // Hook para detectar mudanças no hash da URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setActiveHash(hash);
      
      if (hash && router.pathname === '/') {
        const sectionId = hash.substring(1);
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    };

    // Detecta mudanças no hash
    window.addEventListener('hashchange', handleHashChange);
    
    // Verifica o hash inicial
    if (typeof window !== 'undefined' && window.location.hash) {
      handleHashChange();
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [router.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fechar menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Container principal respeitando o limite de 1280px */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - visível apenas em desktop */}
          <div className="hidden md:flex items-center">
            <button onClick={() => handleNavigation('/', 'page')} className="flex items-center">
              <Image 
                width={40} 
                height={40} 
                src="/assets/Logo/logo.png" 
                alt="Logo da empresa"
                className="w-10 h-10 object-contain"
              />
            </button>
          </div>
          
          {/* Menu Desktop - oculto em mobile */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button 
              onClick={() => handleNavigation('/', 'page')} 
              className={`px-3 py-2 text-sm hover:bg-[#9b4819] hover:text-white rounded-md flex items-center space-x-2 transition-colors ${router.pathname === '/' ? 'bg-[#9b4819] text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
              <span>Home</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('#ContactSection', 'section')} 
              className={`px-3 py-2 text-sm hover:bg-[#9b4819] hover:text-white rounded-md flex items-center space-x-2 transition-colors ${activeHash === '#FormQuote' ? 'bg-[#9b4819] text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
              <span>Contact</span>
            </button>
            
            {/* Dropdown Seções */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={handleDropdownToggle} 
                className="px-3 py-2 text-sm hover:bg-[#9b4819] hover:text-white rounded-md flex items-center space-x-2 transition-colors text-gray-700"
              >
                <span>Seções</span>
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[70vw] max-w-4xl bg-white shadow-xl rounded-lg z-50 border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                    {sections.map((section) => (
                      <button
                        key={section.title}
                        onClick={() => handleNavigation(section.path, section.type)}
                        className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg text-left w-full transition-colors"
                      >
                        <div className="bg-[#9b4819] bg-opacity-10 p-2 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={section.icon} className="text-[#9b4819] w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-gray-900 text-sm">{section.title}</div>
                          <div className="text-xs text-gray-600 mt-1 line-clamp-2">{section.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
          
          {/* Botão de Contato Desktop */}
          <div className="hidden lg:flex items-center">
            <a 
              href="tel:+14255886654" 
              className="px-4 py-2 bg-[#9b4819] hover:bg-[#7a3614] text-white rounded-md transition-colors text-sm font-medium"
            >
              +1 (425) 588-6654
            </a>
          </div>
          
          {/* Logo Mobile - centralizado */}
          <div className="flex lg:hidden items-center absolute left-1/2 transform -translate-x-1/2">
            <button onClick={() => handleNavigation('/', 'page')} className="flex items-center">
              <Image 
                width={35} 
                height={35} 
                src="/assets/Logo/logo.png" 
                alt="Logo da empresa"
                className="w-9 h-9 object-contain"
              />
            </button>
          </div>
          
          {/* Botão Hamburger - apenas mobile */}
          <button 
            onClick={toggleMobileMenu} 
            className="lg:hidden p-2 text-gray-700 hover:text-[#9b4819] transition-colors"
            aria-label="Abrir menu"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-full bg-[#f4f1e8] shadow-xl">
            {/* Header do menu mobile */}
            <div className="flex items-center justify-between p-4 border-b border-[#9b4819] border-opacity-20">
              <h2 className="text-lg font-semibold text-[#9b4819]">Menu</h2>
              <button 
                onClick={toggleMobileMenu} 
                className="p-2 text-[#9b4819] hover:bg-[#9b4819] hover:bg-opacity-10 rounded-lg transition-colors"
                aria-label="Fechar menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Lista de menu items */}
            <nav className="flex flex-col">
              {menuItems.map((menuItem) => (
                <button
                  key={menuItem.item}
                  onClick={() => handleNavigation(menuItem.path, menuItem.type)}
                  className="flex items-center space-x-3 px-6 py-4 text-[#9b4819] hover:bg-[#9b4819] hover:bg-opacity-10 transition-colors text-left"
                >
                  <FontAwesomeIcon icon={menuItem.icon} className="w-5 h-5" />
                  <span className="font-medium">{menuItem.item}</span>
                </button>
              ))}
              
              {/* Botão de contato no mobile */}
              <div className="px-6 pt-4">
                <a 
                  href="tel:+14255886654" 
                  className="flex items-center justify-center w-full px-4 py-3 bg-[#9b4819] hover:bg-[#7a3614] text-white rounded-lg transition-colors font-medium"
                >
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
                  Ligar Agora
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}