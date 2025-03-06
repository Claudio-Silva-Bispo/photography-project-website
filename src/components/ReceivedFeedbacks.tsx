import React, { useState, useEffect } from 'react';

const feedbacks = [
    "O ensaio fotográfico foi incrível! A equipe capturou cada momento de forma única, e o resultado final superou todas as minhas expectativas. Recomendo com certeza!",
    "A fotografia do casamento ficou impecável! Os profissionais foram muito atenciosos e conseguiram registrar todos os momentos mais especiais de maneira incrível.",
    "Fiquei impressionado com a qualidade das fotos do evento. Cada detalhe foi registrado com perfeição, e o atendimento foi excelente. Vou contratar novamente!",
    "O trabalho de fotografia de produtos foi excelente! As fotos mostraram os detalhes de forma nítida e profissional, ajudando a destacar nossos produtos para a loja online."
];

export default function ReceberFeedbacks() {
    const [feedbackAtivo, setFeedbackAtivo] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFeedbackAtivo((feedbackAtual) => (feedbackAtual + 1) % feedbacks.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className='feedback-background min-h-[70vh] flex justify-start items-center text-start' id='receber-feedback' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>

            <div className="relative flex flex-col gap-10 md:p-20">

                <div className="text-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#314027] pt-36 p-5 md:p-0 flex flex-col gap-3 items-center md:items-end lg:items-start">
                    <h3 className="text-5xl text-[#314027] mb-5 md:mb-0 text-center md:text-end lg:text-start font-bold">O que nossos clientes dizem</h3>
                    
                    <span className="text-md md:text-lg tracking-wider text-[#314027] md:max-w-md lg:max-w-lg md:text-end lg:text-start">
                    Veja o que as pessoas estão dizendo sobre os nossos serviços de fotografia e como conseguimos capturar momentos especiais.
                    </span>
                </div>
                
                <p className="text-2xl md:text-2xl text-center md:max-w-md xl:max-w-3xl text-[#9b4819] leading-normal md:text-end xl:text-start">
                    "{feedbacks[feedbackAtivo]}"
                </p>

                <div className='grid md:flex gap-5'>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-[#314027] text-gray-50 focus:ring-[#9b4819] hover:ring-[#9b4819]">Galeria personalizada</button>

                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-[#314027] text-gray-50 focus:ring-[#9b4819] hover:ring-[#9b4819]">Orçamento grátis</button>
                </div>

            </div>
         
        </section>
    );
}
