import React from 'react';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    content: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    author: "Name 1",
    role: "Role of Name 1"
  },
  {
    id: 2,
    content: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    author: "Name 2",
    role: "Role of Name 2"
  },
  {
    id: 3,
    content: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    author: "Name 3",
    role: "Role of Name 3"
  },
  {
    id: 4,
    content: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    author: "Name 4",
    role: "Role of Name 4"
  },
  {
    id: 5,
    content: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    author: "Name 5",
    role: "Role of Name 5"
  },
  {
    id: 6,
    content: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    author: "Name 6",
    role: "Role of Name 6"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-base-200">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">
            Testimonials
          </h2>
        </div>
        
        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-80 bg-base-300 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg 
                    className="w-12 h-12 text-secondary/60" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-secondary text-base leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <cite className="not-italic">
                    <div className="text-primary font-semibold text-lg">
                      {testimonial.author}
                    </div>
                    {testimonial.role && (
                      <div className="text-accent text-sm mt-1">
                        {testimonial.role}
                      </div>
                    )}
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Hint */}
        <div className="text-center mt-6">
          <p className="text-secondary/80 text-sm">
            ← Scroll to see more testimonials →
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;