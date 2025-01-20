import React from 'react';
import { Bot, Layout, Code, GraduationCap, X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: string) => void;
}

const services = [
  {
    icon: Bot,
    name: 'Bots de Atendimento',
    description: 'Atendimento automatizado 24/7 com IA'
  },
  {
    icon: Layout,
    name: 'Criação de Sites',
    description: 'Sites modernos otimizados para conversão'
  },
  {
    icon: Code,
    name: 'Automação de Processos',
    description: 'Automatize tarefas repetitivas'
  },
  {
    icon: GraduationCap,
    name: 'Treinamentos em IA',
    description: 'Capacitação em IA para sua equipe'
  }
];

export default function ServiceModal({ isOpen, onClose, onSelectService }: ServiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-gray-900 rounded-lg max-w-2xl w-full p-6 border border-purple-500/20">
          <div className="absolute right-4 top-4">
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-6">Escolha um serviço para começar</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <button
                key={service.name}
                onClick={() => {
                  onSelectService(service.name);
                  onClose();
                }}
                className="flex flex-col items-start p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-purple-500/20"
              >
                <service.icon className="h-6 w-6 text-purple-500 mb-2" />
                <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                <p className="text-sm text-gray-400 mt-1">{service.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}