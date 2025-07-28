import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes, faExpand, faDownload } from '@fortawesome/free-solid-svg-icons';

const galleryImages = [
  {
    id: 1,
    src: '/assets/Gallery/baby_party_one.png',
    alt: 'Acompanhamento mensal de 0 até 1 ano',
    category: 'criancas',
    title: 'Smash the Cake'
  },
  {
    id: 2,
    src: '/assets/Gallery/IMG_3345.jpg',
    alt: 'Momento único para cada pessoa',
    category: 'retrato',
    title: 'Retrato'
  },
  {
    id: 3,
    src: '/assets/Gallery/IMG_3351.jpg',
    alt: 'Momento único para cada pessoa',
    category: 'retrato',
    title: 'Retrato'
  },
  {
    id: 4,
    src: '/assets/Gallery/IMG_5494.png',
    alt: 'Cada mulher tem sua luz única para ser capturada.',
    category: 'empresarial',
    title: 'Retrato'
  },
  {
    id: 5,
    src: '/assets/Gallery/IMG_7454.jpg',
    alt: 'Eternizando a espera mais linda da sua vida.',
    category: 'gestante',
    title: 'Gestantes'
  },
  {
    id: 6,
    src: '/assets/Gallery/IMG_7460.jpg',
    alt: 'Capturando a beleza única da maternidade.',
    category: 'gestante',
    title: 'Gestantes'
  },
    {
    id: 7,
    src: '/assets/Gallery/IMG_7525.jpg',
    alt: 'Cada curva conta uma história de amor.',
    category: 'gestante',
    title: 'Gestantes'
  },
    {
    id: 8,
    src: '/assets/Gallery/IMG_7901.jpg',
    alt: 'Acompanhamento mensal de 0 até 1 ano',
    category: 'criancas',
    title: 'Smash the Cake'
  },
  {
    id: 9,
    src: '/assets/Gallery/IMG_8174.jpg',
    alt: 'Acompanhamento mensal de 0 até 1 ano',
    category: 'criancas',
    title: 'Smash the Cake'
  },
  {
    id: 10,
    src: '/assets/Gallery/baby_one.png',
    alt: 'Acompanhamento mensal de 0 até 1 ano',
    category: 'criancas',
    title: 'Smash the Cake'
  },
  {
    id: 11,
    src: '/assets/Gallery/baby_two.jpg',
    alt: 'Acompanhamento mensal de 0 até 1 ano',
    category: 'criancas',
    title: 'Smash the Cake'
  },
  {
    id: 12,
    src: '/assets/Gallery/company_one.png',
    alt: 'Desperte sua beleza natural através das lentes.',
    category: 'pessoal',
    title: 'Retrato'
  },
  {
    id: 13,
    src: '/assets/Gallery/cozinheira-baby.png',
    alt: 'Acompanhamento mensal de 0 até 1 ano',
    category: 'criancas',
    title: 'Smash the Cake'
  },
  {
    id: 14,
    src: '/assets/Gallery/detalhe.jpg',
    alt: 'Retratos que revelam sua essência feminina.',
    category: 'retrato',
    title: 'Retrato'
  },
  {
    id: 15,
    src: '/assets/Gallery/janela-media-social.png',
    alt: 'Sua beleza, nossa arte',
    category: 'retrato',
    title: 'Retrato'
  },
  {
    id: 16,
    src: '/assets/Gallery/maquiagem.jpg',
    alt: 'Capturando a força e delicadeza que há em você.',
    category: 'retrato',
    title: 'Retrato'
  },
  {
    id: 17,
    src: '/assets/Service/hero_crianca.jpg',
    alt: 'Acompanhamento mensal de 0 até 1 ano',
    category: 'retrato',
    title: 'Smash the Cake'
  },
  {
    id: 18,
    src: '/assets/Service/service_familia.jpg',
    alt: 'Onde dois corações batem como um.',
    category: 'familia',
    title: 'Familia'
  },
  {
    id: 19,
    src: '/assets/Service/service_crianca.jpg',
    alt: 'Descubra-se através do nosso olhar.',
    category: 'familia',
    title: 'Familia'
  },
  {
    id: 20,
    src: '/assets/Service/espaco_natal.png',
    alt: 'Descubra-se através do nosso olhar.',
    category: 'tematico',
    title: 'Tematico'
  }
];

const categories = [
  { id: 'todos', name: 'Todos', count: galleryImages.length },
  { id: 'criancas', name: 'Criancas', count: galleryImages.filter(img => img.category === 'criancas').length },
  { id: 'familia', name: 'Familia', count: galleryImages.filter(img => img.category === 'familia').length },
  { id: 'gestante', name: 'Gestante', count: galleryImages.filter(img => img.category === 'gestante').length },
  { id: 'retrato', name: 'Retrato', count: galleryImages.filter(img => img.category === 'retrato').length },
  { id: 'tematico', name: 'Tematico', count: galleryImages.filter(img => img.category === 'tematico').length },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  // Filtrar imagens por categoria
  useEffect(() => {
    if (selectedCategory === 'todos') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Abrir lightbox
  const openLightbox = (index: React.SetStateAction<number>) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Fechar lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Navegar no lightbox
  const navigateLightbox = (direction: string) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => 
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
    }
  };

  // Teclas do teclado para navegação
  useEffect(() => {
    const handleKeyPress = (e: { key: any; }) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen bg-[#f4f1e8] pt-20">
      {/* Header da Galeria */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9b4819] mb-4">
            Nossa Galeria
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Confira alguns dos nossos melhores trabalhos e serviços realizados com dedicação e qualidade.
          </p>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#9b4819] text-white shadow-lg transform scale-105'
                    : 'bg-white text-[#9b4819] hover:bg-[#9b4819] hover:text-white shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Imagens */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <FontAwesomeIcon 
                      icon={faExpand} 
                      className="text-white opacity-0 group-hover:opacity-100 text-2xl transform scale-75 group-hover:scale-100 transition-all duration-300"
                    />
                  </div>

                  {/* Badge da categoria */}
                  <div className="absolute top-2 left-2 bg-[#9b4819] text-white px-2 py-1 rounded-full text-xs font-medium">
                    {categories.find(cat => cat.id === image.category)?.name || 'Outros'}
                  </div>
                </div>

                {/* Informações da imagem */}
                <div className="p-4">
                  <h3 className="font-semibold text-[#9b4819] text-lg mb-1">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mensagem se não houver imagens */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhuma imagem encontrada nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          {/* Botão Fechar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>

          {/* Navegação Anterior */}
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-4 text-white hover:text-gray-300 z-10"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>

          {/* Navegação Próxima */}
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-4 text-white hover:text-gray-300 z-10"
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>

          {/* Imagem Principal */}
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
            />
            
            {/* Informações da imagem no lightbox */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
              <h3 className="text-xl font-semibold mb-1">
                {filteredImages[currentImageIndex]?.title}
              </h3>
              <p className="text-gray-300">
                {filteredImages[currentImageIndex]?.alt}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-400">
                  {currentImageIndex + 1} de {filteredImages.length}
                </span>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = filteredImages[currentImageIndex]?.src;
                    link.download = `galeria-${filteredImages[currentImageIndex]?.id}.jpg`;
                    link.click();
                  }}
                  className="flex items-center space-x-2 bg-[#9b4819] hover:bg-[#7a3614] px-3 py-1 rounded text-sm transition-colors"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Baixar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {filteredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-[#9b4819] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Gostou do que viu?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e solicite um orçamento personalizado!
          </p>
          <button 
            onClick={() => window.location.href = 'tel:+14255886654'}
            className="bg-white text-[#9b4819] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Entrar em Contato
          </button>
        </div>
      </section>
    </div>
  );
}