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
    { title: 'Fotografia Pessoal', description: 'Capturamos os melhores momentos da sua vida com cuidado e carinho.', icon: FaCamera, details: 'Saiba mais', images: ['/assets/Service/imagem1.jpeg'] },
    { title: 'Fotografias Profissionais', description: 'Fotografia especializada para empresas.', icon: FaImage, details: 'Saiba mais', images: ['/assets/Service/profissional/camera-carrousel.png'] },
    { title: 'Ensaios Fotográficos', description: 'Ensaios personalizados para qualquer ocasião.', icon: FaPhotoVideo, details: 'Saiba mais', images: ['/assets/Service/cozinheira-baby.png'] },
    { title: 'Ensaios Familiares', description: 'Ensaios personalizados com sua família para eventos especiais como natal, comemorações, eventos que são importates para você.', icon: FaHeart, details: 'Saiba mais', images: ['/assets/Service/familia/familia-natureza.jpg'] },
    { title: 'Ensaios Personalizados', description: 'Ensaios do seu jeito e com ambientes que combinam com você.', icon: FaCameraRetro, details: 'Saiba mais', images: ['/assets/Service/sofa-mulher.png'] },
    { title: 'Redes Sociais', description: 'Monte uma galeria diferenciada para suas Redes Sociais.', icon: FaLaptopMedical, details: 'Saiba mais', images: ['/assets/Service/social-media/janela-media-social.png'] },
    { title: 'Gestantes', description: 'Salve seus momentos enquanto seu baby ainda te espera e está na melhor etapa da sua vida.', icon: FaBaby, details: 'Saiba mais', images: ['/assets/Service/baby-gestantes.png']},
    { title: 'Publicidade', description: 'Divulgue seus produtos e serviços.', icon: FaBaby, details: 'Saiba mais', images: ['/assets/Service/social-media/publicidade.jpg']},
  ];

  return (
    <section className='scrollbar-none p-2 md:p-5 bg-[#f4f1e8] pb-10 md:pb-0' id='services'>
      <div className="text-gray-700 flex justify-center items-center rounded-md">
        <div className="container text-start p-6">
          <h2 className="text-4xl font-bold text-[#9b4819]">Serviços de Fotografia</h2>
          <p className="mt-4 text-2xl text-gray-600">Capturamos momentos inesquecíveis com alta qualidade.</p>
        </div>
      </div>

      {isMobile ? (
        <div className="flex flex-col gap-6 items-center">
          {services.map((service, index) => (
            <div key={index} className="w-11/12 bg-white p-6 rounded-lg shadow-lg text-gray-700">
              <div className="flex justify-start mb-4">
                <service.icon className="text-4xl text-[#9b4819]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
              <img src={service.images[0]} alt={service.title} className="w-full h-[400px] object-cover rounded-md mb-3" />
              <p className="text-gray-600 text-center mb-3">{service.description}</p>
              <a href="/Gallery" className="text-[#9b4819] block text-center mt-3">{service.details}</a>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative w-full flex gap-4 py-6 overflow-x-auto custom-scrollbar">
          {services.map((service, index) => (
            <div key={index} className="min-w-[350px] bg-white p-3 rounded-lg shadow-lg text-gray-700">
              <div className="flex justify-start mb-4">
                <service.icon className="text-4xl text-[#9b4819]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-5 text-center">{service.description}</p>
              <Swiper spaceBetween={10} slidesPerView={1} autoplay={{ delay: 3000 }} loop className="mb-4">
                {service.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={image} alt={`Imagem ${idx + 1}`} className="w-full h-[400px] object-cover rounded-md" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <a href="/Gallery" className="text-[#9b4819] text-center block">{service.details}</a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServiceCarousel;
