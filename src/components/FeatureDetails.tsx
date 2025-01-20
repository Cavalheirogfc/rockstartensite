import React from 'react';
import { X } from 'lucide-react';

const featureDetails = {
  'Bots de Atendimento': [
    {
      title: 'Atendimento 24/7',
      description: 'Disponibilidade constante para atender seus clientes, mesmo fora do horário comercial.'
    },
    {
      title: 'Respostas Personalizadas',
      description: 'IA treinada para fornecer respostas contextualizadas e relevantes para cada cliente.'
    },
    {
      title: 'Integração Multicanal',
      description: 'Atendimento integrado via WhatsApp, Facebook, Instagram e site.'
    },
    {
      title: 'Análise de Sentimento',
      description: 'Identificação automática do tom e emoção nas mensagens dos clientes.'
    },
    {
      title: 'Escalonamento Inteligente',
      description: 'Transferência automática para atendentes humanos quando necessário.'
    },
    {
      title: 'Histórico de Conversas',
      description: 'Registro completo de todas as interações para melhor contexto.'
    },
    {
      title: 'Automação de FAQ',
      description: 'Respostas automáticas para perguntas frequentes.'
    },
    {
      title: 'Personalização de Fluxos',
      description: 'Fluxos de conversa customizados para diferentes situações.'
    },
    {
      title: 'Relatórios e Analytics',
      description: 'Métricas detalhadas sobre o desempenho do atendimento.'
    },
    {
      title: 'Aprendizado Contínuo',
      description: 'Melhoria constante nas respostas com base nas interações.'
    }
  ],
  'Criação de Sites': [
    {
      title: 'Design Responsivo',
      description: 'Sites que se adaptam perfeitamente a qualquer dispositivo.'
    },
    {
      title: 'Otimização SEO',
      description: 'Implementação das melhores práticas para ranking no Google.'
    },
    {
      title: 'Performance Otimizada',
      description: 'Carregamento rápido e eficiente em todas as páginas.'
    },
    {
      title: 'UI/UX Moderno',
      description: 'Interface intuitiva e experiência do usuário excepcional.'
    },
    {
      title: 'Integração com APIs',
      description: 'Conexão com diversos serviços e sistemas externos.'
    },
    {
      title: 'CMS Personalizado',
      description: 'Sistema de gestão de conteúdo fácil de usar.'
    },
    {
      title: 'Analytics Avançado',
      description: 'Monitoramento detalhado do comportamento dos usuários.'
    },
    {
      title: 'Segurança Reforçada',
      description: 'Proteção contra ameaças e vulnerabilidades.'
    },
    {
      title: 'Escalabilidade',
      description: 'Preparado para crescer junto com seu negócio.'
    },
    {
      title: 'Suporte Contínuo',
      description: 'Manutenção e atualizações regulares do site.'
    }
  ],
  'Treinamentos em IA': [
    {
      title: 'Fundamentos de IA',
      description: 'Conceitos básicos e aplicações práticas de Inteligência Artificial.'
    },
    {
      title: 'Machine Learning',
      description: 'Técnicas e ferramentas para aprendizado de máquina.'
    },
    {
      title: 'Processamento de Linguagem Natural',
      description: 'Desenvolvimento de aplicações que entendem e processam texto.'
    },
    {
      title: 'Visão Computacional',
      description: 'Análise e processamento de imagens com IA.'
    },
    {
      title: 'Automação com IA',
      description: 'Integração de IA em processos de automação.'
    },
    {
      title: 'Deep Learning',
      description: 'Redes neurais profundas e suas aplicações.'
    },
    {
      title: 'IA para Negócios',
      description: 'Aplicações práticas de IA no ambiente empresarial.'
    },
    {
      title: 'Ética em IA',
      description: 'Considerações éticas no desenvolvimento e uso de IA.'
    },
    {
      title: 'Workshops Práticos',
      description: 'Exercícios e projetos hands-on com ferramentas de IA.'
    },
    {
      title: 'Consultoria Especializada',
      description: 'Orientação personalizada para projetos específicos.'
    }
  ]
};

interface FeatureDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  featureName: keyof typeof featureDetails;
}

export const FeatureDetails: React.FC<FeatureDetailsProps> = ({ isOpen, onClose, featureName }) => {
  if (!isOpen) return null;

  const details = featureDetails[featureName];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 rounded-lg shadow-xl">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
            <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {featureName}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {detail.title}
                  </h4>
                  <p className="text-gray-300">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
