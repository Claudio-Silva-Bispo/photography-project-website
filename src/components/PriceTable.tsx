import { GiButterfly } from 'react-icons/gi';
import { useState } from 'react';

export default function ServicePlan() {
  const [activeTab, setActiveTab] = useState('todos');

  const plans = [
    {
      id: 'pessoal',
      category: 'individual',
      title: 'Pessoal',
      subtitle: 'Pessoal',
      description: 'Pacote feito para fotos individuais',
      price: '$150.00',
      features: [
        'Uma hora de ensaio',
        'Pacote com Trinta fotos editadas',
        'Edição em todas as fotos ou fotos originais',
      ],
      buttonText: 'Start now',
      highlighted: false
    },
    {
      id: 'familia',
      category: 'grupo',
      title: 'Pacote',
      subtitle: 'Familia',
      description: 'Monte um album junto com quem você ama',
      price: '$180.00',
      features: [
        'Uma hora de ensaio',
        'Pacote com Quarenta fotos',
        'Pacote com até cinco pessoas',
        'Preço $180.00 pela sessão'
      ],
      buttonText: 'Start',
      highlighted: true
    },
    {
      id: 'smash',
      category: 'especial',
      title: 'Plano',
      subtitle: 'Smash Cake',
      description: 'Uma combinação perfeita dos outros pacotes e o que você precisar.',
      price: '$250.00',
      features: [
        'Cenário incluso',
        'Pacote com Trinta fotos editadas',
        'Atendimento personalizado para seu baby',
        'Uma hora de sessão'
      ],
      buttonText: 'Quote free',
      highlighted: false
    },
    {
      id: 'gestante',
      category: 'especial',
      title: 'Ensaio',
      subtitle: 'Gestante',
      description: 'Capture a beleza única deste momento especial da sua vida.',
      price: '$180.00',
      features: [
        'Uma hora de ensaio',
        'Pacote com Trinta fotos editadas',
        'Poses especializadas para gestantes',
        'Acompanhante incluso no ensaio',
      ],
      buttonText: 'Agendar',
      highlighted: false
    }
  ];

  const categories = [
    { id: 'todos', label: 'Planos' },
    { id: 'individual', label: 'Pessoal' },
    { id: 'grupo', label: 'Familia' },
    { id: 'especial', label: 'Especiais' }
  ];

  const filteredPlans = activeTab === 'todos' 
    ? plans 
    : plans.filter(plan => plan.category === activeTab);

  return (
    <section className="py-10 md:py-20 bg-gray-100 text-gray-800 md:pt-20" id='PriceTable'>
      <div className="container md:px-4 mx-auto">
        
        <div className="max-w-2xl mx-auto md:mb-16 md:text-center p-6 md:p-0">
          <span className="text-5xl text-[#9b4819] md:mb-0 w-full">
            Tabela de serviços
          </span>
          <h2 className="text-2xl lg:text-2xl pt-5 md:pt-0 text-[#b45309]">
            escolha o melhor plano para o seu momento
          </h2>
        </div>

        {/* Barra de Navegação */}
        <div className="flex justify-center mb-8 p-3 m:p-0">
          <div className="bg-white rounded-lg p-2 shadow-md">
            <nav className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-[#9b4819] text-white shadow-md'
                      : 'text-[#9b4819] hover:bg-[#9b4819] hover:bg-opacity-10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 pb-10">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="flex">
              <div className={`flex flex-grow flex-col p-6 space-y-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                plan.highlighted 
                  ? 'bg-[#9b4819] text-gray-50 transform scale-105' 
                  : 'bg-gray-50'
              }`}>
                <div className="space-y-2">
                  <h4 className="text-2xl font-semibold">{plan.title}</h4>
                  <span className={`text-4xl font-bold ${plan.subtitle === 'Smash Cake' ? 'text-3xl' : ''}`}>
                    {plan.subtitle}
                  </span>
                  <div className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#9b4819]'}`}>
                    {plan.price}
                  </div>
                </div>
                
                <p className={`mt-3 leading-relaxed text-lg ${
                  plan.highlighted ? 'text-gray-100' : 'text-black'
                }`}>
                  {plan.description}
                </p>
                
                <ul className="flex-1 mb-6 space-y-3 text-md">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <GiButterfly className={`w-6 h-6 mt-1 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-[#9b4819]'
                      }`} />
                      <span className={plan.highlighted ? 'text-gray-100' : 'text-black'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`w-full px-5 py-3 tracking-wider text-center rounded-lg font-bold text-lg uppercase transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-gray-100 text-[#9b4819] hover:bg-white'
                      : 'bg-[#9b4819] text-gray-50 hover:bg-[#8a3f16]'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}