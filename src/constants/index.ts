export const CONTACT_FORM_INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
};

export const NAV_ITEMS = [
  { label: 'Início', href: '#' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
] as const;

export const SOCIAL_LINKS = {
  INSTAGRAM: 'https://instagram.com/rockstarten',
  LINKEDIN: 'https://linkedin.com/company/rockstarten',
  WHATSAPP: 'https://wa.me/seu-numero',
} as const;

export const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    title: 'Consultoria gratuita',
    description: 'Fale com um engenheiro de sistemas real (normalmente +R$500/hora) e discuta os requisitos e objetivos do seu projeto. Ouviremos atentamente para entender sua visão e objetivos.',
    ctaText: 'Agendar uma chamada',
    ctaLink: '#contact'
  },
  {
    number: 2,
    title: 'Escopo e Proposta',
    description: 'Com base na sua consulta, forneceremos um escopo detalhado, incluindo etapas detalhadas, cronograma, orçamento e algumas possíveis modificações ou extensões ao seu sistema.',
    ctaText: 'Agendar uma chamada',
    ctaLink: '#contact'
  },
  {
    number: 3,
    title: 'Início do projeto',
    description: 'Com a proposta acertada, agendaremos uma reunião inicial para apresentar nossa equipe e começarmos de verdade.',
    ctaText: 'Agendar uma chamada',
    ctaLink: '#contact'
  }
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Como a Rockstarten pode ajudar o meu negócio?',
    answer: 'A Rockstarten oferece soluções personalizadas de automação e inteligência artificial que podem otimizar seus processos, aumentar a eficiência operacional e impulsionar o crescimento do seu negócio através de tecnologias inovadoras.'
  },
  {
    question: 'Quanto tempo leva para criar meu projeto',
    answer: 'O tempo de desenvolvimento varia de acordo com a complexidade e escopo do projeto. Após nossa análise inicial, forneceremos um cronograma detalhado com estimativas precisas para cada fase do desenvolvimento.'
  },
  {
    question: 'Qual a minha garantia?',
    answer: 'Oferecemos garantia completa de satisfação em todos os nossos serviços, com suporte técnico dedicado e manutenção contínua para assegurar o funcionamento ideal das soluções implementadas.'
  },
  {
    question: 'Como vocês criam suas Soluções?',
    answer: 'Desenvolvemos soluções através de um processo colaborativo, utilizando metodologias ágeis e as mais recentes tecnologias em IA e automação, sempre adaptando cada projeto às necessidades específicas do seu negócio.'
  },
  {
    question: 'Como nos comunicamos?',
    answer: 'Mantemos uma comunicação clara e constante através de canais dedicados, com reuniões regulares de acompanhamento e relatórios de progresso para garantir total transparência durante todo o processo.'
  },
  {
    question: 'E se algo der errado com a automação?',
    answer: 'Nossa equipe de suporte está disponível 24/7 para resolver qualquer problema que possa surgir. Além disso, implementamos sistemas de monitoramento proativo para identificar e corrigir possíveis problemas antes que afetem suas operações.'
  },
  {
    question: 'Preciso de conhecimentos técnicos para usar os sistemas automatizados?',
    answer: 'Não, nossas soluções são desenvolvidas com foco na usabilidade, com interfaces intuitivas e treinamento completo para sua equipe. Fornecemos todo o suporte necessário para garantir uma utilização eficiente do sistema.'
  }
] as const;
