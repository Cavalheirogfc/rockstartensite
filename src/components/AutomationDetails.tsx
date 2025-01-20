import React from 'react';
import { X } from 'lucide-react';

const automations = [
  {
    title: 'Automação de E-mails',
    description: 'Enviar e-mails personalizados automaticamente com base em gatilhos, como novos leads ou eventos em um CRM. Respostas automáticas para formulários ou mensagens recebidas.'
  },
  {
    title: 'Integração com WhatsApp',
    description: 'Enviar mensagens automáticas para clientes via API de WhatsApp, como confirmações de agendamento ou atualizações de status de pedidos.'
  },
  {
    title: 'Gestão de Leads',
    description: 'Capturar leads de formulários (Google Forms, Typeform, etc.), enviar para uma planilha (Google Sheets) e criar registros em um CRM (HubSpot, Pipedrive).'
  },
  {
    title: 'Automação de Redes Sociais',
    description: 'Publicar conteúdos automaticamente no Instagram, Twitter ou LinkedIn com base em um calendário de postagens armazenado no Google Sheets.'
  },
  {
    title: 'Monitoramento de Sites',
    description: 'Verificar a disponibilidade ou mudanças em sites e enviar alertas no Slack, Telegram ou e-mail quando algo relevante ocorrer.'
  },
  {
    title: 'Geração de Relatórios Automáticos',
    description: 'Coletar dados de múltiplas fontes (API, banco de dados, planilhas) e consolidar em relatórios PDF ou Excel, entregando via e-mail.'
  },
  {
    title: 'Atualização Automática de Planilhas',
    description: 'Sincronizar dados entre ferramentas, como transferir informações de um sistema ERP para o Google Sheets automaticamente.'
  },
  {
    title: 'Gestão de Tarefas e Projetos',
    description: 'Criar tarefas automaticamente em ferramentas como Trello, Asana ou Notion com base em eventos, como novos e-mails ou solicitações de clientes.'
  },
  {
    title: 'Backup e Armazenamento na Nuvem',
    description: 'Transferir arquivos recebidos (via e-mail ou formulários) para serviços como Google Drive, Dropbox ou AWS S3 de forma automatizada.'
  },
  {
    title: 'Notificações e Alertas',
    description: 'Enviar alertas personalizados no Slack ou Telegram quando condições específicas forem atendidas, como vendas em tempo real ou erros em um sistema.'
  }
];

interface AutomationDetailsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AutomationDetails: React.FC<AutomationDetailsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 rounded-lg shadow-xl">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
            <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Possibilidades de Automação
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
              {automations.map((automation, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {automation.title}
                  </h4>
                  <p className="text-gray-300">
                    {automation.description}
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
