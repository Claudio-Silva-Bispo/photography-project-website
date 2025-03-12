import Image from "next/image";

export default function About() {
    return (
        <section className="bg-[#f4f1e8] text-gray-800 min-h-[75vh] p-3 flex md:justify-center md:items-center" id="about">
            <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-3 flex flex-col gap-3 lg:gap-5">
                    <span className="text-5xl leading-none sm:text-6xl xl:max-w-2xl text-[#9b4819] radley-regular-italic">Sobre</span>
                    <p className="text-2xl xl:max-w-2xl text-gray-600 carlito-regular">
                    Sou apaixonada experiência e registrar momentos onde as pessoas estão felizes e realizando seus sonhos. Meu objetivo é deixar minha marca no mundo digital e na tecnologia, criando visuais que unem sofisticação e propósito. Quero colaborar com pessoas e empresas que valorizam um estilo refinado e impactante. Se você busca uma abordagem minimalista e poderosa para sua identidade visual, vamos criar algo extraordinário juntos.
                    </p>
                </div>
                <div className="relative w-full xl:col-span-2">
                    <Image 
                        src="/assets/About/pessoal.jpg" 
                        alt="Limpeza Profissional" 
                        className="object-cover w-full h-auto max-w-full md:w-3/4 md:h-[500px] rounded-t-full xl:rounded-b-none bg-gray-500" 
                        width={800} 
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
}
