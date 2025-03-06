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
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImageIcon from '@mui/icons-material/Image';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: '1px solid #e5e7eb', // Estilo da borda como no exemplo
  borderRadius: '8px', // Bordas arredondadas como no exemplo
  marginBottom: '8px', // Espaçamento entre os accordions
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
  padding: '16px', // Espaçamento interno
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
    <section className='min-h-[60vh] flex flex-col justify-center md:p-20 m:pt-20'>
      
      <div className="before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:bg-[#9b4819]pt-20 md:p-0 flex flex-col mb-6">
        <h2 className="text-5xl text-[#9b4819] md:mb-0 font-bold">Principais serviços de fotografia</h2>
      </div>

      <div className="space-y-4">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <CameraAltIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Fotografia de Casamento</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
              Capturamos os momentos mais especiais do seu grande dia, com fotos emocionantes que você poderá guardar para sempre. Nosso serviço inclui ensaio pré-casamento, cerimônia e recepção, tudo feito com profissionalismo e criatividade.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <CameraEnhanceIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Fotografia de Eventos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
              Realizamos coberturas fotográficas para eventos corporativos, festas e outros encontros sociais, com foco nos momentos mais importantes e detalhes que fazem a diferença.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <AddPhotoAlternateIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Ensaio Fotográfico</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
              Oferecemos ensaios fotográficos personalizados para todas as ocasiões: aniversários, retratos familiares, ensaios de moda e muito mais. Garantimos um trabalho autêntico, criativo e com alta qualidade.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <ImageIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Fotografia de Produtos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
              Oferecemos fotografia de produtos para e-commerce, com imagens de alta qualidade que destacam os detalhes e características dos seus produtos, contribuindo para vendas de sucesso.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <PhotoSizeSelectActualIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Fotografia Arquitetônica</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
              Capturamos a beleza e a funcionalidade de espaços internos e externos, criando imagens que mostram cada detalhe arquitetônico com clareza e estilo. Ideal para designers, arquitetos e imobiliárias.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}
