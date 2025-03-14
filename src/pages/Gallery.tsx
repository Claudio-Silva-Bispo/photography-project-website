import React, { useState } from 'react';
import Image from 'next/image';

const services = {
  rooms: [
    { id: 1, name: 'Cozinha', images: ['/assets/Carrosel/cozinha/20200123_150607.jpg', 'imagem-dois.jpg'] },
    { id: 2, name: 'Banheiro', images: ['imagem-tres.jpg', 'imagem-quatro.jpg'] },
    { id: 3, name: 'Sala', images: ['imagem-cinco.jpg'] },
    { id: 4, name: 'Quarto', images: ['imagem-seis.jpg', 'imagem-sete.jpg', 'imagem-oito.jpg'] },
    { id: 5, name: 'Demais', images: ['imagem-nove.jpg', 'imagem-dez.jpg'] }
  ]
};

export default function Gallery() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  const handlePrevClick = () => {
    setSelectedRoomIndex((prevIndex) =>
      prevIndex === 0 ? services.rooms.length - 1 : prevIndex - 1
    );
    scrollToTop();
  };

  const handleNextClick = () => {
    setSelectedRoomIndex((prevIndex) =>
      prevIndex === services.rooms.length - 1 ? 0 : prevIndex + 1
    );
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const selectedRoom = services.rooms[selectedRoomIndex];
  const { name } = selectedRoom;

  return (
    <div>
      {/* Seção do nome e setas de navegação */}
      <section className="py-6 bg-[#f4f1e8] pt-10">
        <div className="container mx-auto text-center mb-8">
          
        </div>
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <Image width={800} height={800} src="/assets/Service/cozinheira.jpg" alt="image about kitchen" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
            <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Service/baby.jpg" />
            <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Service/cozinheira.jpg" />

            <Image width={800} height={800} src="/assets/Service/sofa.jpg" alt="image about kitchen" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
            <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/sala/IMG-20200204-WA0022.jpg" />
            <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/sala/20201217_095105.jpg" />

            <Image width={800} height={800} src="/assets/Service/camera.jpg" alt="image about kitchen" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
            <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Service/imagem1.jpeg" />
            <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/About/pessoal.jpg" />

            <Image width={800} height={800} src="/assets/Service/sofa.jpg" alt="image about kitchen" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
            <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/banheiro/20201125_105927.jpg" />
            <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/banheiro/20201125_151802.jpg" />

            <Image width={800} height={400} src="/assets/Service/janela.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
          </div>
        
        {/* Botões de navegação na parte inferior */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handlePrevClick}
            className="p-2 bg-gray-700 text-white rounded-l-full"
          >
            Anterior
          </button>
          <button
            onClick={handleNextClick}
            className="p-2 bg-gray-700 text-white rounded-r-full"
          >
            Próximo
          </button>
        </div>
      </section>
    </div>
  );
}
