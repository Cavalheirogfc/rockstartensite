import React, { useState } from 'react';
import { validateEmail } from '../utils/validation';
import { ContactFormData } from '../types/common';
import whatsappIcon from '../assets/whatsapp-icon.svg';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'whatsapp') {
      // Remove tudo que não é número
      const numbersOnly = value.replace(/\D/g, '');
      
      // Aplica a máscara (XX) XXXXX-XXXX
      let maskedValue = '';
      if (numbersOnly.length <= 11) {
        maskedValue = numbersOnly.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        if (numbersOnly.length < 11) {
          maskedValue = numbersOnly
            .replace(/^(\d{2})/, '($1) ')
            .replace(/^(\(\d{2}\) \d{5})/, '$1-');
        }
      }
      
      setFormData(prev => ({ ...prev, [name]: maskedValue || value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.whatsapp.trim() || formData.whatsapp.replace(/\D/g, '').length !== 11) {
      newErrors.whatsapp = 'WhatsApp inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Aqui você pode implementar a lógica de envio do formulário
      console.log('Form data:', formData);
      // Limpar o formulário após envio bem-sucedido
      setFormData({ name: '', email: '', whatsapp: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome completo"
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="exemplo@email.com"
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <div className="flex items-center gap-2 mb-1">
          <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
          <label htmlFor="whatsapp" className="block text-sm font-medium">
            WhatsApp
          </label>
        </div>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="(11) 98765-4321"
          maxLength={15}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
        />
        {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Digite sua mensagem aqui..."
          rows={4}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
      >
        Enviar mensagem
      </button>
    </form>
  );
};

export default ContactForm;