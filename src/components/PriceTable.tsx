import { GiButterfly } from 'react-icons/gi';

export default function ServicePlan() {
    return (
      <section className="py-10 md:py-20 bg-gray-100 text-gray-800 md:pt-20" id='price-table'>
        
        <div className="container md:px-4 mx-auto">
          
          <div className="max-w-2xl mx-auto md:mb-16 md:text-center p-6 md:p-0">
            <span className="tracking-wider uppercase text-[#9b4819] text-4xl md:text-5xl">
              Tabela de serviços
            </span>
            <h2 className="text-2xl lg:text-2xl pt-5 md:pt-0 text-[#b45309]">
            escolha o melhor plano para o seu momento
            </h2>
          </div>
  
          <div className="flex flex-wrap items-stretch mx-4 pb-10">
            {/* Plano Interno */}
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl">Pessoal</h4>
                  <span className="text-5xl">Essential</span>
                </div>
                <p className="mt-3 leading-relaxed text-black text-xl">
                Pacote feito para fotos individuais
                </p>
                
                <ul className="flex-1 mb-6 text-black text-md">
                  
                  <li className="flex mb-2 space-x-2">
                    <GiButterfly className="text-[#9b4819] w-8 h-8" />
                    <span>Uma hora de ensaio</span>
                  </li>

                  <li className="flex mb-2 space-x-2">
                  <GiButterfly className="text-[#9b4819] w-8 h-8" />
                    <span>Pacote com Quinze fotos</span>
                  </li>

                  <li className="flex mb-2 space-x-2">
                  <GiButterfly className="text-[#9b4819] w-8 h-8" />
                    <span>Edição em todas as fotos</span>
                  </li>

                  <li className="flex mb-2 space-x-2">
                  <GiButterfly className="text-[#9b4819] w-8 h-8" />
                    <span>Preço $45.00 pela sessão</span>
                  </li>

                </ul>

                <button
                  type="button"
                  className="inline-block px-5 py-3 tracking-wider text-center rounded bg-[#9b4819] text-gray-50 text-xl uppercase font-bold"
                >
                  Start now
                </button>
              </div>
            </div>
  
            {/* Plano Mensal */}
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-[#9b4819] text-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl">Pacote</h4>
                  <span className="text-5xl">Familia</span>
                </div>
                <p className="leading-relaxed text-xl">
                Monte um album junto com quem você ama
                </p>
                <ul className="flex-1 space-y-2 text-xl">
                  <li className="flex items-center space-x-2">
                    <GiButterfly className="text-white w-8 h-8" />
                    <span>Duas horas de ensario</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <GiButterfly className="text-white w-8 h-8" />
                    <span>Pacote com Vinte fotos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <GiButterfly className="text-white w-8 h-8" />
                    <span>Edição em todas as fotos</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <GiButterfly className="text-white w-8 h-8" />
                    <span>Preço $80.00 pela sessão</span>
                  </li>
                </ul>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block w-full px-5 py-3 tracking-wider text-center rounded bg-gray-100 text-[#9b4819] uppercase font-bold text-xl"
                >
                  Start
                </a>
              </div>
            </div>
  
            {/* Plano Combo */}
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl">Plano</h4>
                  <span className="text-4xl">Personalizado</span>
                </div>
                <p className="leading-relaxed text-black text-xl">
                Uma combinação perfeita dos outros pacotes e o que você precisar.
                </p>
                <ul className="space-y-2 text-black text-xl">
                  <li className="flex items-start space-x-2">
                    <GiButterfly className="text-[#9b4819] w-8 h-8" />
                    <span>Defina o horário</span>
                  </li>
                  <li className="flex items-start space-x-2">
                  <GiButterfly className="text-[#9b4819] w-8 h-8" />
                    <span>Desconto para cada personalização</span>
                  </li>
                  <li className="flex items-start space-x-2">
                  <GiButterfly className="text-[#9b4819] w-8 h-8" />
                    <span>Prioridade no atendimento</span>
                  </li>
                  <li className="flex items-start space-x-2">
                  <GiButterfly className="text-[#9b4819] w-8 h-8" />
                    <span>Preço começa com $120.00</span>
                  </li>
                </ul>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block w-full px-5 py-3 tracking-wider text-center rounded bg-[#9b4819] text-white uppercase text-xl font-bold"
                >
                  Quote free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  