"use client";

import React, { useState } from 'react';
import { faqItems } from '@/data/constants';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight" style={{ color: '#0C5C38' }}>
            Питання та відповіді
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: '#75DEAF' }}></div>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border-2 shadow-md hover:shadow-xl transition-all relative overflow-hidden group" style={{ borderColor: '#E5E5E5' }}>
              <div className="absolute top-0 left-0 w-20 h-20 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(-25%, -25%)' }}></div>
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-gray-50 rounded-2xl relative z-10"
              >
                <span className="text-lg md:text-xl font-black pr-4" style={{ color: '#0C5C38' }}>
                  {item.question}
                </span>
                <div 
                  className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all shadow-sm"
                  style={{ 
                    backgroundColor: openFaq === index ? '#75DEAF' : '#F8F9FA',
                    color: openFaq === index ? 'white' : '#2F2F2F',
                    border: openFaq === index ? 'none' : '2px solid #E5E5E5'
                  }}
                >
                  <span className="text-xl font-light">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openFaq === index && (
                <div className="px-8 pb-8 pt-2 relative z-10">
                  <div className="pl-4 border-l-4" style={{ borderColor: '#75DEAF' }}>
                    <p className="text-base md:text-lg leading-relaxed font-medium" style={{ color: '#2F2F2F' }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

