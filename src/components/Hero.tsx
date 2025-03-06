export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen bg-[#f4f1e8] text-center px-6">
            {/* Logo no topo como imagem */}
            <div className="top-10">
                <img src="/assets/Logo/logo.png" alt="Logo" className="w-20 h-20" />
            </div>
            
            {/* Texto principal com animação no nome "Any" */}
            <h1 className="text-6xl font-serif font-bold mt-20 relative">
                <span className="italic text-black radley-regular-italic">Hello, </span> 
                <span className="text-[#9b4819] relative inline-block after:content-[''] radley-regular-italic"> I am Any!</span>
            </h1>
            
            {/* Descrição */}
            <p className="mt-6 text-4xl text-gray-700 max-w-4xl carlito-regular-italic">
                Momentos eternos, capturados com elegância e simplicidade. Iluminamos histórias com um olhar minimalista, onde cada detalhe expressa emoção e autenticidade.
            </p>
            
            {/* Botão de ação com linhas animadas */}
            <a 
                href="/ContactSection" 
                className="mt-6 text-[#9b4819] italic text-lg hover:underline relative"
            >
                Hire me
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-[#9b4819] animate-wavy-line"></span>
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#9b4819] animate-wavy-line-delay"></span>
            </a>
        </section>
    );
}
