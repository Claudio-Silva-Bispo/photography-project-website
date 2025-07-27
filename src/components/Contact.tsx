import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp, FaSms } from 'react-icons/fa';

export default function Contact(){
    return (

        <section className="py-3 bg-[#f4f1e8] text-[#9b4819]" id="ContactSection">
            <div className="grid max-w-8xl grid-cols-1 px-3 mx-auto lg:px-8 md:grid-cols-2 md:divide-x md:pt-20">

                <div>
                    <div className="py-6 md:py-0 md:px-6 flex flex-col justify-center p-2 md:p-0 w-full md:w-auto">
                        <h1 className="text-5xl text-[#9b4819] radley-regular">Contato</h1>
                        <p className="pt-5 pb-4 text-xl text-[#9b4819] carlito-regular">Preenchendo este formulário simples, nossa equipe entrará em contato com você dentro de duas horas.</p>
                    </div>

                    <div className="hidden m:flex py-6 md:py-0 md:px-6 flex-col justify-center p-2 md:p-0">

                            <p className="flex items-center mb-3 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mr-2 sm:mr-6 text-[#9b4819]">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#9b4819] carlito-regular'>Totem Lake Way, Kirkland, WA 98034, EUA</span>
                            </p>
                            <p className="flex items-center mb-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mr-2 sm:mr-6 text-[#9b4819]">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span className='text-[#9b4819] carlito-regular'>+1 (425) 588-6654</span>
                            </p>
                            <p className="flex items-center mb-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mr-2 sm:mr-6 text-[#9b4819]">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span className='text-[#9b4819] carlito-regular'>any-bispo@outlook.com</span>
                            </p>
                            
                    </div>

                    <div className="py-6 md:py-0 md:px-6 flex flex-col justify-center p-2 md:p-0 w-full md:w-auto">
                        <p className="pt-5 pb-4 text-xl text-[#9b4819] carlito-regular">Conte-nos sua história e criaremos as imagens perfeitas para eternizá-la. Estamos ansiosos para conhecer sua visão!</p>
                    </div>
                </div>

                <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 p-2 md:p-0 md:mb-20">
                    <label className="block">
                        <span className="mb-3 text-[#9b4819]">Name</span>
                        <input type="text" placeholder="Please enter your name." className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3" />
                    </label>
                    <label className="block">
                        <span className="mb-1 text-[#9b4819]">Email address</span>
                        <input type="email" placeholder="leroy@gmail.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3" />
                    </label>
                    <label className="block">
                        <span className="mb-1 text-[#9b4819]">Message</span>
                        <textarea rows={5} className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 mt-3"></textarea>
                    </label>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-[#9b4819] text-white focus:ring-quinta hover:ring-[#b45309] w-full">Enviar</button>
                </form>

                <div className="md:hidden py-6 md:py-0 md:px-6 flex-col justify-center p-2 md:p-0">

                        <h1 className="text-4xl md:text-3xl font-bold text-[#9b4819] mb-5 radley-regular">Entre em contato</h1>

                            <p className="flex items-center mb-3 text-[#9b4819]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mr-2 sm:mr-6 text-[#9b4819]">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-black carlito-regular'>Totem Lake Way, Kirkland</span>
                            </p>
                            <p className="flex items-center mb-3 text-[#9b4819]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mr-2 sm:mr-6 text-[#9b4819]">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span className='text-black carlito-regular'>+ (425) 588-6654</span>
                            </p>
                            <p className="flex items-center mb-3 text-[#9b4819]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mr-2 sm:mr-6 text-[#9b4819]">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span className='text-black carlito-regular'>livehopephotografy@gmail.com</span>
                            </p>

                            
                    </div>

                
            </div>
        </section>

    );
}