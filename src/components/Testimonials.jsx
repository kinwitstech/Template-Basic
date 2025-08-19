import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const testimonials = [
  { id: 1, content: "I'm a testimonial...", author: "Name 1", role: "Role of Name 1" },
  { id: 2, content: "I'm a testimonial...", author: "Name 2", role: "Role of Name 2" },
  { id: 3, content: "I'm a testimonial...", author: "Name 3", role: "Role of Name 3" },
  { id: 4, content: "I'm a testimonial...", author: "Name 4", role: "Role of Name 4" },
  { id: 5, content: "I'm a testimonial...", author: "Name 5", role: "Role of Name 5" },
  { id: 6, content: "I'm a testimonial...", author: "Name 6", role: "Role of Name 6" },
  { id: 7, content: "I'm a testimonial...", author: "Name 7", role: "Role of Name 7" },
  { id: 8, content: "I'm a testimonial...", author: "Name 8", role: "Role of Name 8" },
];

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1); // mobile → 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2); // tablet → 2 cards
      } else {
        setCardsPerPage(3); // desktop → 3 cards
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const startIndex = page * cardsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + cardsPerPage);

  const filledTestimonials = [
    ...currentTestimonials,
    ...Array(cardsPerPage - currentTestimonials.length).fill(null),
  ];

  return (
    <section id="testimonials" className="py-20 bg-base-200">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">Testimonials</h2>
        </div>

        {/* Cards Grid */}
        <div
          className={`
            grid gap-6 justify-center
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          `}
        >
          {filledTestimonials.map((testimonial, idx) =>
            testimonial ? (
              <div
                key={testimonial.id}
                className="bg-base-300 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 max-w-sm"
              >
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-secondary/60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <blockquote className="text-secondary text-base leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

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
            ) : (
              <div key={`empty-${idx}`} className="invisible max-w-sm" />
            )
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-40"
          >
            <ChevronLeftIcon className="w-6 h-6 text-primary" />
          </button>

          <span className="text-secondary font-medium">
            Page {page + 1} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-40"
          >
            <ChevronRightIcon className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
