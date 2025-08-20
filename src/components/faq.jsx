import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "Question 1",
      answer: "Answer for Question 1 is entered here"
    },
    {
      id: 2,
      question: "Question 2",
      answer: "Answer for Question 2 is entered here"
    },
    {
      id: 3,
      question: "Question 3",
      answer: "Answer for Question 3 is entered here"
    },
    {
      id: 4,
      question: "Question 4",
      answer: "Answer for Question 4 is entered here"
    },
    {
      id: 5,
      question: "Question 5",
      answer: "Answer for Question 5 is entered here"
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="container scroll-mt-20 mt-10 sm:mt-15 lg:mt-20 bg-base-200">
    <div className="bg-base-200 mt-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* FAQ Title */}
          <div className="lg:col-span-1">
            <h1 className="text-4xl md:text-5xl font-serif text-accent leading-none">
              Frequently Asked Questions
            </h1>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-2 space-y-1">
            {faqData.map((item) => (
              <div key={item.id} className="border-b border-info/2  0">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-4 py-6 flex items-center justify-between text-left group hover:bg-base-300 transition-colors duration-200"
                >
                  <span className="text-lg md:text-xl font-serif text-info font-medium pr-4 group-hover:text-info transition-colors duration-200">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.has(item.id) ? (
                      <MinusIcon className="w-8 h-8 text-primary/60 transition-transform duration-200 group-hover:scale-110" />
                    ) : (
                      <PlusIcon className="w-8 h-8 text-primary/60 transition-transform duration-200 group-hover:scale-110" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(item.id) 
                      ? 'max-h-96 opacity-100 pb-6' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-info/70 font-serif px-6 mt-3 text-lg leading-relaxed pr-12">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FAQ;