import React from 'react';
import ContactForm from './ContactForm';

export default function CTA() {
  return (
    <div id="contact" className="bg-purple-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Pronto para começar?</span>
              <span className="block text-purple-200">Entre em contato hoje mesmo.</span>
            </h2>
            <p className="mt-4 text-lg text-purple-100">
              Preencha o formulário ao lado e nossa equipe entrará em contato para entender melhor suas necessidades.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}