import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/assets/Service/bagunca.jpg", "/assets/Service/bagunca-depois.jpg"];

export default function Hero() {

    const [linePosition, setLinePosition] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setLinePosition((prevPosition) => (prevPosition + 1) % 101); 
        }, 70); 
    
        return () => clearInterval(interval);
      }, []);
      
    return (
        <section className="bg-gray-100 text-gray-800 max-h-[100vh]">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 md:flex-row lg:justify-between">

                <div className="flex flex-col justify-center items-center p-6 text-center rounded-sm">
                    {/* Logo no topo como imagem */}
                    <div className="top-10 hidden sm:flex mb-4">
                        <img src="/assets/Logo/logo.png" alt="Logo" className="w-20 h-20" />
                    </div>
                    
                    {/* Texto principal com animação no nome "Any" */}
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        <span className="italic text-black radley-regular-italic">Hello, </span>
                        <span className="text-[#9b4819] relative inline-block after:content-[''] radley-regular-italic"> I am Any!</span>
                    </h1>
                    
                    {/* Descrição */}
                    <p className="mt-5 md:mb-8 text-lg sm:mb-12 text-gray-700 max-w-4xl carlito-regular-italic">
                        Momentos eternos, capturados com elegância e simplicidade. Iluminamos histórias com um olhar minimalista, onde cada detalhe expressa emoção e autenticidade.
                    </p>

                    <div className="hidden md:flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#contact" className="px-8 py-3 text-lg font-semibold rounded bg-white text-[#9b4819]">Contato</a>
                        <a rel="noopener noreferrer" href="#price-table" className="px-8 py-3 text-lg font-semibold rounded bg-[#9b4819] text-white">Tabela Preço</a>
                    </div>
                    
                </div>

                <div className="flex-1">
                    {/* Slider dentro do Header */}
                    <div className="w-full h-[50vh] md:w-[60vh] md:h-[60vh] overflow-hidden relative md:pt-10 md:pt-0">
                    <div className="relative w-full h-full">
                        {/* Imagem 1 */}
                        <Image
                        src={images[0]}
                        alt="Gallery"
                        layout="fill"
                        objectFit="fill"
                        className="rounded-lg"
                        />
                        {/* A linha que vai cortar a imagem */}
                        <div
                        className="absolute top-0 left-0 h-full"
                        style={{ width: `${linePosition}%` }}
                        ></div>
                        {/* Imagem 2 */}
                        <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            clipPath: `inset(0 ${100 - linePosition}% 0 0)` 
                        }}
                        >
                        <Image
                            src={images[1]}
                            alt="Gallery"
                            layout="fill"
                            objectFit="fill"
                            className="rounded-lg"
                        />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
