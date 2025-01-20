import { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Perguntas frequentes
          </h2>
          <h3 className="text-2xl mb-8 text-gray-300">
            Tudo que você precisa saber
          </h3>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/50 transition-colors duration-200"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium text-gray-200">{item.question}</span>
                  <span className="text-blue-400 text-2xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-800/30">
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
