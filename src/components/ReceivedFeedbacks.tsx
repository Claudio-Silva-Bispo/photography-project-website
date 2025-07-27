import React, { useState, useEffect, useRef } from 'react';

const feedbacks = [
    "O ensaio fotográfico foi incrível! A equipe capturou cada momento de forma única, e o resultado final superou todas as minhas expectativas. Recomendo com certeza!",
    "A fotografia do casamento ficou impecável! Os profissionais foram muito atenciosos e conseguiram registrar todos os momentos mais especiais de maneira incrível.",
    "Fiquei impressionado com a qualidade das fotos do evento. Cada detalhe foi registrado com perfeição, e o atendimento foi excelente. Vou contratar novamente!",
    "O trabalho de fotografia de produtos foi excelente! As fotos mostraram os detalhes de forma nítida e profissional, ajudando a destacar nossos produtos para a loja online."
];

export default function ReceberFeedbacks() {
    const [feedbackAtivo, setFeedbackAtivo] = useState(0);
    const [sliderValue, setSliderValue] = useState(50);
    const sliderRef = useRef<HTMLDivElement>(null);

    // Rotate feedbacks
    useEffect(() => {
        const intervalId = setInterval(() => {
            setFeedbackAtivo((feedbackAtual) => (feedbackAtual + 1) % feedbacks.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    // Função para lidar com o movimento do slider
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(e.target.value));
    };

    return (
        <section id='Testimonials' className='feedback-background min-h-[70vh] flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {/* Left side - Feedbacks */}
            <div className="w-full md:w-1/2 flex flex-col gap-10 py-16 md:py-20" >
                <div className="text-center md:text-left before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto md:before:mx-0 before:bg-[#314027] pt-10 md:pt-0 flex flex-col gap-3">
                    <h3 className="text-4xl md:text-5xl text-[#314027] mb-5 md:mb-0 text-center md:text-left font-bold">O que nossos clientes dizem</h3>
                    
                    <span className="text-md md:text-lg tracking-wider text-[#314027] max-w-md mx-auto md:mx-0 text-center md:text-left">
                        Veja o que as pessoas estão dizendo sobre os nossos serviços de fotografia e como conseguimos capturar momentos especiais.
                    </span>
                </div>
                
                <p className="text-xl md:text-2xl text-center md:text-left max-w-md mx-auto md:mx-0 text-[#9b4819] leading-normal">
                    "{feedbacks[feedbackAtivo]}"
                </p>

                <div className='grid md:flex gap-5'>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-[#314027] text-gray-50 focus:ring-[#9b4819] hover:ring-[#9b4819]">Galeria personalizada</button>

                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-[#314027] text-gray-50 focus:ring-[#9b4819] hover:ring-[#9b4819]">Orçamento grátis</button>
                </div>
            </div>

            {/* Right side - Before/After Image Comparison */}
            <div className="w-full md:w-5/12 h-96 lg:h-[500px] relative rounded-lg overflow-hidden shadow-xl mt-10 md:mt-0" ref={sliderRef}>
                {/* Container para as imagens */}
                <div className="relative w-full h-full">
                    {/* After image (imagem editada) */}
                    <div className="absolute inset-0 w-full h-full">
                        <img 
                            src="/assets/Service/imagem1.jpeg" 
                            alt="Depois da edição" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Before image (imagem original) com máscara baseada no valor do slider */}
                    <div 
                        className="absolute inset-0 w-full h-full overflow-hidden" 
                        style={{ 
                            width: `${sliderValue}%`,
                            borderRight: '2px dashed #fff'
                        }}
                    >
                        <img 
                            src="/assets/Service/imagem1.jpeg" 
                            alt="Antes da edição" 
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ 
                                filter: 'grayscale(100%)',  // Efeito visual para diferenciar a versão "antes"
                                width: `${100 / (sliderValue / 100)}%`,
                                minWidth: '100%'
                            }}
                        />
                    </div>
                    
                    {/* Controlador do slider (range input) */}
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={sliderValue} 
                        onChange={handleSliderChange}
                        className="absolute w-full top-1/2 left-0 transform -translate-y-1/2 z-10 opacity-0 cursor-pointer h-10"
                    />
                    
                    {/* Linha vertical com efeito de "ants" */}
                    <div 
                        className="absolute top-0 bottom-0 z-20 w-1"
                        style={{ 
                            left: `${sliderValue}%`,
                            backgroundColor: 'white',
                            transform: 'translateX(-50%)'
                        }}
                    >
                        {/* Círculo do controle deslizante */}
                        <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
                            <div className="flex">
                                <div className="w-1 h-3 border-l border-[#314027]"></div>
                                <div className="w-1 h-3 border-r border-[#314027] ml-2"></div>
                            </div>
                        </div>
                        
                        {/* Efeito visual de ants */}
                        <div 
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'linear-gradient(to bottom, #000 50%, transparent 50%)',
                                backgroundSize: '1px 8px',
                                backgroundRepeat: 'repeat-y',
                                animation: 'moveAnts 0.6s linear infinite'
                            }}
                        ></div>
                    </div>
                </div>
                
                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">Antes</div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">Depois</div>
            </div>
        </section>
    );
}