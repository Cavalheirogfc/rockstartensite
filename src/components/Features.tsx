import React, { useState } from 'react';
import { Bot, Code, Layout, GraduationCap } from 'lucide-react';
import { AutomationDetails } from './AutomationDetails';
import { FeatureDetails } from './FeatureDetails';

const features = [
  {
    name: 'Bots de Atendimento',
    description: 'Atendimento 24/7 com IA avançada que entende e responde naturalmente às necessidades dos seus clientes.',
    icon: Bot
  },
  {
    name: 'Criação de Sites',
    description: 'Sites modernos e responsivos gerados por IA, otimizados para conversão e experiência do usuário.',
    icon: Layout
  },
  {
    name: 'Automação de Processos',
    description: 'Automatize tarefas repetitivas e aumente a produtividade com nossas soluções personalizadas.',
    icon: Code
  },
  {
    name: 'Treinamentos em IA',
    description: 'Capacite sua equipe com conhecimentos práticos em IA, desde conceitos básicos até aplicações avançadas.',
    icon: GraduationCap
  }
];

export default function Features() {
  const [isAutomationModalOpen, setIsAutomationModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleFeatureClick = (featureName: string) => {
    if (featureName === 'Automação de Processos') {
      setIsAutomationModalOpen(true);
    } else {
      setSelectedFeature(featureName);
    }
  };

  return (
    <>
      <div className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Nossas Soluções
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Tecnologia de ponta para impulsionar seu negócio
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div 
                  key={feature.name} 
                  className="pt-6 h-full"
                  onClick={() => handleFeatureClick(feature.name)}
                >
                  <div className="flow-root bg-gray-900 rounded-lg px-6 pb-8 h-full flex flex-col cursor-pointer hover:bg-gray-900/80 transition-colors duration-300">
                    <div className="flex-1">
                      <div className="-mt-6">
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AutomationDetails 
        isOpen={isAutomationModalOpen}
        onClose={() => setIsAutomationModalOpen(false)}
      />

      {selectedFeature && selectedFeature !== 'Automação de Processos' && (
        <FeatureDetails
          isOpen={!!selectedFeature}
          onClose={() => setSelectedFeature(null)}
          featureName={selectedFeature as keyof typeof features}
        />
      )}
    </>
  );
}