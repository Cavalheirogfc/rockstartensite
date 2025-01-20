import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import { FAQ } from './components/FAQ';
import { HowItWorks } from './components/HowItWorks';

// Lazy load components that are not immediately visible
const CTA = React.lazy(() => import('./components/CTA'));
const ChatWidget = React.lazy(() => import('./components/chat/ChatWidget'));

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Carregando...</div>}>
          <CTA />
        </Suspense>
      </main>

      <Footer />

      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
}

export default App;