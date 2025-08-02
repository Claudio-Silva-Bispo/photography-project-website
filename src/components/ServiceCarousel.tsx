import React, { useState, useEffect } from 'react';
import { FaCamera, FaPhotoVideo, FaImage, FaArrowRight, FaHeart, FaCameraRetro, FaLaptopMedical, FaBaby } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const ServiceCarousel: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const services = [
    { 
      title: 'Retratos Femininos', 
      description: 'Capturamos os melhores momentos da sua vida com cuidado e carinho.', 
      icon: FaCamera, 
      details: 'Saiba mais', 
      images: ['/assets/Gallery/IMG_3351.jpg'] 
    },
    { 
      title: 'Smash the Cake', 
      description: 'Ensaios personalizados para qualquer ocasião especial do seu bebê.', 
      icon: FaPhotoVideo, 
      details: 'Saiba mais', 
      images: ['/assets/Service/service_crianca.jpg'] 
    },
    { 
      title: 'Ensaios Familiares', 
      description: 'Ensaios personalizados com sua família para eventos especiais como natal e comemorações.', 
      icon: FaHeart, 
      details: 'Saiba mais', 
      images: ['/assets/Service/service_family.jpg'] 
    },
    { 
      title: 'Temáticos', 
      description: 'Monte uma galeria diferenciada para suas festas de natal e datas comemorativas.', 
      icon: FaLaptopMedical, 
      details: 'Saiba mais', 
      images: ['/assets/Service/espaco_natal.png'] 
    },
    { 
      title: 'Gestantes', 
      description: 'Salve seus momentos enquanto seu baby ainda te espera na melhor etapa da sua vida.', 
      icon: FaBaby, 
      details: 'Saiba mais', 
      images: ['/assets/Gallery/IMG_7460.jpg']
    },
  ];

  return (
    <section className='scrollbar-none p-0 md:p-5 bg-[#f4f1e8] pb-10 md:pb-0' id='services'>
      <div className="text-gray-700 flex justify-center items-center rounded-md">
        <div className="container text-start p-6">
          <h2 className="text-5xl text-[#9b4819] md:mb-0 w-full">Serviços de Fotografia</h2>
          <p className="mt-4 text-2xl text-gray-600">Capturamos momentos inesquecíveis com alta qualidade.</p>
        </div>
      </div>

      {isMobile ? (
        <div className="flex flex-col gap-6 items-center">
          {services.map((service, index) => (
            <div key={index} className="w-11/12 bg-white p-6 rounded-lg shadow-lg text-gray-700 flex flex-col h-auto">
              <div className="flex justify-start mb-4">
                <service.icon className="text-4xl text-[#9b4819]" />
              </div>
              
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-center mb-3 min-h-[2.5rem] flex items-center justify-center">
                  {service.title}
                </h3>
                
                <div className="mb-4">
                  <img 
                    src={service.images[0]} 
                    alt={service.title} 
                    className="w-full h-[300px] object-cover rounded-md" 
                  />
                </div>
                
                <div className="flex-grow flex flex-col justify-between">
                  <p className="text-gray-600 text-center mb-4 min-h-[4.5rem] flex items-start">
                    {service.description}
                  </p>
                  
                  <a href="/Gallery" className="text-[#9b4819] block text-center mt-auto font-medium hover:underline">
                    {service.details}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative w-full flex gap-4 py-6 overflow-x-auto custom-scrollbar">
          {services.map((service, index) => (
            <div key={index} className="min-w-[350px] max-w-[350px] bg-white p-4 rounded-lg shadow-lg text-gray-700 flex flex-col h-[600px]">
              <div className="flex justify-start mb-4">
                <service.icon className="text-4xl text-[#9b4819]" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-center min-h-[2.5rem] flex items-center justify-center">
                {service.title}
              </h3>
              
              <div className="mb-4">
                <Swiper spaceBetween={10} slidesPerView={1} autoplay={{ delay: 3000 }} loop className="h-[300px]">
                  {service.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <img 
                        src={image} 
                        alt={`Imagem ${idx + 1}`} 
                        className="w-full h-[300px] object-contain rounded-md" 
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              <div className="flex-grow flex flex-col justify-between">
                <p className="text-gray-600 mb-4 text-center min-h-[4.5rem] flex items-start">
                  {service.description}
                </p>
                
                <a href="/Gallery" className="text-[#9b4819] text-center block mt-auto font-medium hover:underline">
                  {service.details}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServiceCarousel;