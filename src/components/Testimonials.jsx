import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "swiper/css";


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
  return (
    <section
      id="testimonials"
      className="container scroll-mt-25 mb-10 mt-10 lg:mt-15 bg-base-100"
    >
      <div className="container mx-auto px-4 bg-base-100">
        <div className="text-center mb-12">
          <h1 className="text-primary">What Our Clients Say</h1>
          <p className="text-base-content/70 mt-2">
            Hear from those who’ve experienced the difference.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="rounded-2xl"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-base-200 rounded-2xl shadow-md p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col items-center text-center">
                    <p className="italic text-base-content/80 mb-4">
                      "{testimonial.feedback}"
                    </p>
                    <h5 className="font-semibold text-base-content">
                      {testimonial.name}
                    </h5>
                    <h6 className="text-base-content/60">{testimonial.role}</h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </section>
  );
}
