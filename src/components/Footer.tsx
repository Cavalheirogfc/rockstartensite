import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; 2024 Rockstarten. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}