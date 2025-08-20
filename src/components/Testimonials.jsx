import React, { useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const testimonials = [
  {
    id: 1,
    name: "Name 1",
    role: "Role 1",
    feedback:
      "This product transformed the way we work. Highly recommend to everyone!",
  },
  {
    id: 2,
    name: "Name 2",
    role: "Role 2",
    feedback:
      "Amazing experience! The support team is fantastic and the product is top-notch.",
  },
  {
    id: 3,
    name: "Name 3",
    role: "Role 3",
    feedback:
      "We’ve seen remarkable growth since implementing this solution. Truly a game-changer!",
  },
];

export default function Testimonials() {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -scrollContainer.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: scrollContainer.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="container scroll-mt-20 mt-10 sm:mt-15 lg:mt-20 bg-base-200">
      <div className="container mx-auto px-4 bg-base-200">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif text-accent">
            What Our Clients Say
          </h2>
          <p className="font-serif text-base-content/70 mt-2">
            Hear from those who’ve experienced the difference.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Left Button - only desktop */}
          <button
            onClick={scrollLeft}
            className="
              hidden lg:block
              absolute top-1/2 -translate-y-1/2 
              -left-12 z-10 bg-gradient-to-r from-primary to-accent rounded-full p-3 shadow-lg 
              hover:shadow-xl transition-all duration-200 hover:scale-110 
              focus:outline-none focus:ring-2 focus:ring-primary
            "
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white hover:cursor-pointer" />
          </button>

          {/* Right Button - only desktop */}
          <button
            onClick={scrollRight}
            className="
              hidden lg:block
              absolute top-1/2 -translate-y-1/2 
              -right-12 z-10 bg-gradient-to-r from-primary to-accent rounded-full p-3 shadow-lg 
              hover:shadow-xl transition-all duration-200 hover:scale-110 
              focus:outline-none focus:ring-2 focus:ring-primary
            "
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="w-6 h-6 text-white hover:cursor-pointer" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainer}
            className="flex overflow-x-auto lg:overflow-hidden scrollbar-hide snap-x snap-mandatory scroll-smooth"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-full snap-center bg-base-100 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-xl transition-shadow duration-300 mx-2"
              >
                <div className="flex flex-col items-center text-center">
                  <p className="text-lg italic font-serif text-base-content/80 mb-4">
                    "{testimonial.feedback}"
                  </p>
                  <h4 className="text-xl font-serif font-semibold text-base-content">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-serif text-base-content/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
