import React, { useRef, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollTo({
        left: scrollContainer.current.offsetWidth * index,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <section
      id="testimonials"
      className="container scroll-mt-20 mb-10 mt-10 lg:mt-15 bg-base-100"
    >
      <div className="container mx-auto px-4 bg-base-100">
        <div className="text-center mb-12">
          <h1 className="text-accent">
            What Our Clients Say
          </h1>
          <p className="text-base-content/70 mt-2">
            Hear from those who’ve experienced the difference.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={scrollLeft}
            className="
              hidden lg:block
              absolute top-1/2 -translate-y-1/2 
              -left-12 z-10 bg-gradient-to-r from-primary to-accent shadow-xl rounded-full p-3
              transition-all duration-200 hover:scale-110 
            "
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={scrollRight}
            className="
              hidden lg:block
              absolute top-1/2 -translate-y-1/2 
              -right-12 z-10 bg-gradient-to-r from-primary to-accent shadow-xl rounded-full p-3
              transition-all duration-200 hover:scale-110 
            "
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>

          <div
            ref={scrollContainer}
            className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-full snap-center bg-base-200 rounded-2xl shadow-md p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-xl transition-shadow duration-300 mb-5"
              >
                <div className="flex flex-col items-center text-center">
                  <p className="italic text-base-content/80 mb-4">
                    "{testimonial.feedback}"
                  </p>
                  <h5 className="font-semibold text-base-content">
                    {testimonial.name}
                  </h5>
                  <h6 className="text-base-content/60">
                    {testimonial.role}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
