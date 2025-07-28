import Image from "next/image";

export default function About() {
    return (
        <section className="bg-[#f4f1e8] text-gray-800 min-h-[75vh] p-3 flex md:justify-center md:items-center" id="about">
            <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-3 flex flex-col gap-3 lg:gap-5">
                    <span className="text-5xl text-[#9b4819] md:mb-0 w-full">Sobre</span>
                    <p className="text-xl md:text-2xl xl:max-w-2xl text-gray-600 carlito-regular">
                    A conexão entre as pessoas revela a profundidade dos seus laços e são justamente esses momentos que enchem meu coração de alegria.
                    </p>
                    <p className="text-xl md:text-2xl xl:max-w-2xl text-gray-600 carlito-regular">
                    É sensacional poder fazer parte da história de alguém, ainda que por instantes. Cada gesto, cada olhar, cada carinho sincero me mostra que estou registrando algo que vai muito além de uma imagem: estou guardando sentimentos.
                    </p>
                    <p className="text-xl md:text-2xl xl:max-w-2xl text-gray-600 carlito-regular">
                    Poder escrever um breve capítulo na vida de alguém através do meu olhar é, para mim, um privilégio. É como congelar o tempo em forma de afeto e isso, sem dúvida, é o que torna a fotografia tão mágica. ♥️
                    </p>
                </div>
                <div className="relative w-full xl:col-span-2">
                    <Image 
                        src="/assets/About/any-about.png" 
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
