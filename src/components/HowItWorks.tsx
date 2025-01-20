import { HOW_IT_WORKS_STEPS } from '../constants';

export const HowItWorks = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-blue-400 font-medium mb-2 block">Etapas</span>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Como funciona
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              A automação é complicada – mas implementá-la não precisa ser.
              Simplificaremos o processo para você em 3 etapas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {step.description}
                  </p>
                  <a
                    href={step.ctaLink}
                    className="inline-block text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    {step.ctaText} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
