import * as React from 'react';
// Instalar npm install @mui/material @emotion/react @emotion/styled
// Instalar npm install @mui/icons-material

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Icones
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CakeIcon from '@mui/icons-material/Cake';
import NatureIcon from '@mui/icons-material/Nature';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import PortraitIcon from '@mui/icons-material/Portrait';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CelebrationIcon from '@mui/icons-material/Celebration';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  marginBottom: '8px',
  '&:last-child': {
    marginBottom: '0',
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(() => ({
  backgroundColor: '#ffffff', 
  padding: '16px',
  '& .MuiAccordionSummary-content': {
    marginLeft: '8px',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-root': {
    fontSize: '1rem',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '16px',
  backgroundColor: '#f9fafb',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <section className='min-h-[60vh] flex flex-col justify-center md:p-20 m:pt-20 p-5' id='tips'>
      
      <div className="before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:bg-[#9b4819] pt-20 md:p-0 flex flex-col mb-6">
        <h2 className="text-5xl text-[#9b4819] md:mb-0 font-bold w-full">Principais dúvidas</h2>
      </div>

      <div className="space-y-4">
        
        {/* Retratos */}
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <PortraitIcon className='mr-3 text-[#9b4819]'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Retratos Individuais</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm sm:text-lg'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-[#9b4819]">📸 Serviço:</strong>
                  <p>Ensaios fotográficos individuais personalizados para destacar sua personalidade única.</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">💰 Investimento:</strong>
                  <p>$150/hora • Pacote mínimo: 1 hora</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">👥 Capacidade:</strong>
                  <p>1 pessoa principal + 1 acompanhante opcional</p>
                </div>
                <div>
                  <strong className="text-[#9b4819]">📍 Locais disponíveis:</strong>
                  <ul className="list-disc list-inside ml-2">
                    <li>Estúdio próprio</li>
                    <li>Residência do cliente</li>
                    <li>Parques e praças</li>
                    <li>Locais externos especiais</li>
                  </ul>
                  
                  <strong className="text-[#9b4819] mt-3 block">⏰ Prazo de entrega:</strong>
                  <p>• Fotos editadas: 10-15 dias úteis</p>
                  <p>• Preview: 24-48 horas</p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Smash the Cake */}
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <CakeIcon className='mr-3 text-[#9b4819]'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Smash the Cake</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm sm:text-lg'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-[#9b4819]">🎂 Serviço:</strong>
                  <p>Ensaio temático para o primeiro aniversário do bebê, incluindo cenário personalizado e bolo para destruição.</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">💰 Investimento:</strong>
                  <p>$250/sessão • Duração: 1-2 horas</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">👥 Capacidade:</strong>
                  <p>Bebê + até 4 familiares</p>
                </div>
                <div>
                  <strong className="text-[#9b4819]">📍 Locais disponíveis:</strong>
                  <ul className="list-disc list-inside ml-2">
                    <li>Estúdio com cenário incluso</li>
                    <li>Residência</li>
                    <li>Salão de festas</li>
                  </ul>
                  
                  <strong className="text-[#9b4819] mt-3 block">⏰ Prazo de entrega:</strong>
                  <p>• Fotos editadas: 10-15 dias úteis</p>
                  <p>• Preview rápido: 48 horas</p>
                  <p>• Álbum digital incluso</p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Natureza */}
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <NatureIcon className='mr-3 text-[#9b4819]'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Ensaios na Natureza</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm sm:text-lg'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-[#9b4819]">🌿 Serviço:</strong>
                  <p>Ensaios fotográficos em ambientes naturais, aproveitando a luz natural e paisagens deslumbrantes.</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">💰 Investimento:</strong>
                  <p>$180/hora</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">👥 Capacidade:</strong>
                  <p>Até 6 pessoas por sessão</p>
                </div>
                <div>
                  <strong className="text-[#9b4819]">📍 Locais disponíveis:</strong>
                  <ul className="list-disc list-inside ml-2">
                    <li>Parques urbanos (incluso)</li>
                    <li>Jardins</li>
                    <li>Praias e lagos</li>
                  </ul>
                  
                  <strong className="text-[#9b4819] mt-3 block">⏰ Prazo de entrega:</strong>
                  <p>• Fotos editadas: 10-15 dias úteis</p>
                  <p>• Seleção prévia: 2-3 dias</p>
                  <p>• Tratamento especial de luz natural</p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Gestantes */}
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <PregnantWomanIcon className='mr-3 text-[#9b4819]'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Ensaio Gestante</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm sm:text-lg'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-[#9b4819]">🤱 Serviço:</strong>
                  <p>Ensaio especializado para gestantes, capturando a beleza e emoção desta fase única da vida.</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">💰 Investimento:</strong>
                  <p>$200/sessão • Duração: 1h</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">👥 Capacidade:</strong>
                  <p>Gestante + parceiro + até 2 filhos</p>
                </div>
                <div>
                  <strong className="text-[#9b4819]">📍 Locais disponíveis:</strong>
                  <ul className="list-disc list-inside ml-2">
                    <li>Estúdio confortável (incluso)</li>
                    <li>Residência</li>
                    <li>Jardins e parques</li>
                    <li>Praia (golden hour)</li>
                  </ul>
                  
                  <strong className="text-[#9b4819] mt-3 block">⏰ Prazo de entrega:</strong>
                  <p>• Fotos editadas: 10-15 dias úteis</p>
                  <p>• Gallery online: 3 dias</p>
                  <p>• Poses especializadas e confortáveis</p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Família */}
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <FamilyRestroomIcon className='mr-3 text-[#9b4819]'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Ensaios Familiares</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm sm:text-lg'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-[#9b4819]">👨‍👩‍👧‍👦 Serviço:</strong>
                  <p>Ensaios familiares para capturar a união e amor entre todos os membros da família.</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">💰 Investimento:</strong>
                  <p>$180/hora • Até 5 pessoas: $200/hora para 6+</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">👥 Capacidade:</strong>
                  <p>Até 8 pessoas (família estendida)</p>
                </div>
                <div>
                  <strong className="text-[#9b4819]">📍 Locais disponíveis:</strong>
                  <ul className="list-disc list-inside ml-2">
                    <li>Estúdio amplo (incluso)</li>
                    <li>Residência familiar</li>
                    <li>Parques e praças</li>
                    <li>Locais temáticos</li>
                    <li>Chácaras e fazendas</li>
                  </ul>
                  
                  <strong className="text-[#9b4819] mt-3 block">⏰ Prazo de entrega:</strong>
                  <p>• Fotos editadas: 10-14 dias úteis</p>
                  <p>• Galeria online: 4-5 dias</p>
                  <p>• Álbum familiar disponível</p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Crianças */}
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <ChildCareIcon className='mr-3 text-[#9b4819]'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Ensaios Infantis</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm sm:text-lg'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-[#9b4819]">👶 Serviço:</strong>
                  <p>Ensaios especializados para crianças, com paciência e técnicas específicas para capturar sua essência natural.</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">💰 Investimento:</strong>
                  <p>$160/hora • Sessões flexíveis</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">👥 Capacidade:</strong>
                  <p>Até 3 crianças + 2 responsáveis</p>
                </div>
                <div>
                  <strong className="text-[#9b4819]">📍 Locais disponíveis:</strong>
                  <ul className="list-disc list-inside ml-2">
                    <li>Estúdio lúdico (incluso)</li>
                    <li>Residência</li>
                    <li>Parques infantis</li>
                  </ul>
                  
                  <strong className="text-[#9b4819] mt-3 block">⏰ Prazo de entrega:</strong>
                  <p>• Fotos editadas: 10-15 dias úteis</p>
                  <p>• Preview rápido: 48 horas</p>
                  <p>• Edição lúdica e colorida</p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Eventos */}
        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <CelebrationIcon className='mr-3 text-[#9b4819]'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Cobertura de Eventos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm sm:text-lg'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-[#9b4819]">🎉 Serviço:</strong>
                  <p>Cobertura fotográfica completa para aniversários, formaturas, celebrações e eventos especiais.</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">💰 Investimento:</strong>
                  <p>$250/hora • Mínimo 2 horas</p>
                  <p>Eventos +6h: $100/hora adicional</p>
                  
                  <strong className="text-[#9b4819] mt-3 block">👥 Capacidade:</strong>
                  <p>Sem limite de convidados</p>
                </div>
                <div>
                  <strong className="text-[#9b4819]">📍 Locais disponíveis:</strong>
                  <ul className="list-disc list-inside ml-2">
                    <li>Salões de festa (incluso)</li>
                    <li>Residências (+$30)</li>
                    <li>Clubes e buffets (+$40)</li>
                    <li>Espaços externos (+$50)</li>
                    <li>Locais corporativos (+$60)</li>
                  </ul>
                  
                  <strong className="text-[#9b4819] mt-3 block">⏰ Prazo de entrega:</strong>
                  <p>• Fotos editadas: 15-20 dias úteis</p>
                  <p>• Preview destaque: 3-5 dias</p>
                  <p>• Galeria online completa</p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
    </section>
  );
}