import React, { useState } from 'react';
import '../styles/theme.css'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const faqData = [
  {
    id: 1,
    question: "Question 1",
    answer: "Enter your answer to Question 1 here"  },
  {
    id: 2,
    question: "Question 2",
    answer: "Enter your answer to Question 2 here"
  },
  {
    id: 3,
    question: "Question 3",
    answer: "Enter your answer to Question 3 here"
  },
  {
    id: 4,
    question: "Question 4",
    answer: "Enter your answer to Question 4 here"
  },
];

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState(new Set([1]));

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="faq" className="px-4 py-20 bg-base-200">
    <div className="container">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Frequently Asked
            <span className="block bg-clip-text text-accent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Get answers to the most common questions about our design services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.has(item.id);
            
            return (
              <div
                key={item.id}
                className="bg-base-300 rounded-2xl border border-secondary/40 overflow-hidden transition-all duration-300 hover:bg-base-200 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 sm:px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-opacity-50 transition-all duration-200"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-semibold text-primary hover:text-accent bg-clip-text pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center transition-all duration-300 hover:scale-110">
                        {isOpen ? (
                          <ChevronUpIcon className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6">
                    <div className="bg-base-300 rounded-xl p-6 border border-secondary/20">
                      <p className="text-secondary leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </section>
  );
};

export default FAQAccordion;