import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const images = ["/assets/Service/imagem1.jpeg", "/assets/Service/imagem2.jpeg"];

const AboutPage: React.FC = () => {
  const [linePosition, setLinePosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLinePosition((prevPosition) => (prevPosition + 1) % 101); // A linha vai de 0 a 100
    }, 70); // Intervalo de tempo para mover a linha aos poucos (40ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-amber-700 min-h-screen text-white p-5 flex flex-col justify-between text-start">
      {/* Header */}
      <div className="max-w-5xl mx-auto w-full pt-16 relative md:flex gap-10">

        <div className="flex-1">
          <div className="relative">
            <h1 className="text-5xl md:text-6xl radley-regular text-[#f4f1e8]">
              About the <span className="relative z-10">Live Hope</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mt-12 text-2xl space-y-4 sm:max-w-3xl carlito-regular">
            <p>
              Live Hope é uma empresa de fotografia apaixonada por capturar
              momentos com elegância e autenticidade.
            </p>
            <p>
              Nosso foco está em criar imagens minimalistas e sofisticadas,
              transformando memórias em arte.
            </p>
            <p>
              Com um olhar atento aos detalhes, buscamos transmitir emoção e
              contar histórias únicas através de cada clique.
            </p>
          </div>
        </div>

        <div className="flex-1">
          {/* Slider dentro do Header */}
          <div className="w-full h-[60vh] md:w-[60vh] md:h-[60vh] overflow-hidden relative pt-10 md:pt-0">
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
                  clipPath: `inset(0 ${100 - linePosition}% 0 0)` // O corte da imagem 2 vai aumentando com o movimento da linha
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

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full my-5">
        <hr className="border-[#f4f1e8]" />
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row justify-between">
        {/* Social Media */}
        <div>
          <p className="uppercase tracking-wide mb-4">
            To see more of my work, visit my socials:
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white hover:text-white/80">
              <FaFacebook size={28} />
            </a>
            <a href="#" className="text-white hover:text-white/80">
              <FaInstagram size={28} />
            </a>
            <a href="#" className="text-white hover:text-white/80">
              <FaTwitter size={28} />
            </a>
            <span className="ml-2 text-lg italic">@reallygreatsite</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 md:mt-0">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
              <div className="text-amber-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="uppercase tracking-wide text-sm">EMAIL</p>
              <p className="text-lg">livehopephotography.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-9 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
              <div className="text-amber-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="uppercase tracking-wide text-sm">PHONE</p>
              <p className="text-lg ">+ (425) 588-6654</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
