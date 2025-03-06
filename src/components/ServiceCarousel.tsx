import React from 'react';
import { FaCamera, FaPhotoVideo, FaImage, FaRegImages, FaInstagram, FaGlobe, FaAdjust, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importação do estilo do Swiper

const ServiceCarousel: React.FC = () => {
  const services = [
    { title: 'Fotografia de Eventos', description: 'Capturamos os melhores momentos do seu evento, garantindo recordações inesquecíveis.', icon: FaCamera, details: 'Saiba mais', images: ['/assets/Service/imagem1.jpeg', '/assets/Service/imagem2.jpg', '/assets/Service/image3.jpg'] },
    { title: 'Fotografia de Produtos', description: 'Fotografia especializada para mostrar seu produto da melhor forma possível.', icon: FaImage, details: 'Saiba mais', images: ['/assets/Service/imagem1.jpg', '/assets/Service/image5.jpg', '/assets/Service/image6.jpg'] },
    { title: 'Ensaios Fotográficos', description: 'Realizamos ensaios fotográficos personalizados para qualquer ocasião.', icon: FaPhotoVideo, details: 'Saiba mais', images: ['/assets/Service/imagem2.jpg', '/assets/Service/imagem3.jpg', '/assets/Service/imagem4.jpg'] },
    // ... outros serviços
  ];

  return (
    <section className='scrollbar-none p-3 bg-[#f4f1e8]'>

        <div className="text-gray-700 p-3 flex justify-center items-center rounded-md">
            <div className="container grid gap-6 mx-auto">
                <div className="w-full px-3 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 text-center">
                    <span className="text-5xl font-bold leading-none sm:text-6xl pt-10 text-[#9b4819] radley-regular-italic text-center">Serviços de Fotografia</span>
                    <p className="mt-6 mb-8 text-2xl sm:mb-12 text-gray-600 carlito-regular text-center">
                        Nosso objetivo é capturar momentos inesquecíveis, oferecendo imagens de alta qualidade que ajudam a destacar produtos, eventos, ambientes e muito mais. Se você busca um olhar profissional e criativo para suas fotos, estamos aqui para ajudar.
                    </p>
                </div>
            </div>
        </div>

        <div className="relative w-full flex gap-2 py-6 overflow-x-auto custom-scrollbar">
          {services.map((service, index) => (
            <div key={index} className="min-w-[40vh] sm:min-w-[60vh] h-200 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-700">
              <div className="flex justify-start mb-4">
                <service.icon className="text-4xl text-[#9b4819]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-5 text-center">{service.description}</p>
              {/* Carrossel de imagens */}
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="mb-4"
              >
                {service.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img 
                      src={image} 
                      alt={`Imagem ${idx + 1} do serviço`} 
                      className="w-full h-[200px] object-contains rounded-md" // Limitando a altura da imagem e mantendo a proporção
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <a href="/Service" className="text-[#9b4819] text-center block">{service.details}</a>
            </div>
          ))}
        </div>

        <div className="flex justify-end mb-3 pt-3 m-3">
          <button className="p-2 bg-[#9b4819] rounded-full hover:bg-gray-300 text-white">
            <FaArrowRight />
          </button>
        </div>
    </section>
  );
};

export default ServiceCarousel;

