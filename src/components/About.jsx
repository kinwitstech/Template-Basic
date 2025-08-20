import { useState } from "react";
import aboutImage from "../assets/60241.jpg";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="container scroll-mt-20 mt-10 bg-base-200">
      <div className="flex flex-col items-stretch gap-8 lg:flex-row">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <div className="space-y-4">
            <span className="text-sm font-serif tracking-wide text-info-content">
              OUR STORY
            </span>
            <h2 className="text-4xl font-serif leading-snug text-primary">
              Crafting Digital Experiences <br />
              <span className="text-accent">that inspire</span>
            </h2>
            <h4 className="text-lg font-serif text-info-content text-balance">
              At Kinwits, we don’t just build websites – we create powerful,
              tailored digital solutions that help businesses thrive in the
              modern world.
            </h4>
            <p className="font-serif leading-relaxed text-info-content text-balance">
              Founded in 2023, Kinwits is a creative technology company driven by
              the vision of making digital innovation accessible to all.
            </p>

            {/* Read More Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-block px-6 py-2 font-serif text-white bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-lg hover:cursor-pointer hover:scale-110"
            >
              Read More
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src={aboutImage}
            className="object-cover w-full rounded-3xl shadow-lg"
          />
        </div>
      </div>

      {isOpen && (
        <dialog id="about-modal" className="modal modal-open">
          <div className="modal-box max-w-3xl">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Crafting Digital Experiences that inspire
            </h3>
            <p className="text-info-content font-serif leading-relaxed mb-4">
              At Kinwits, we don’t just build websites – we create powerful,
              tailored digital solutions that help businesses thrive in the
              modern world.
            </p>
            <p className="text-info-content font-serif leading-relaxed mb-4">
              Founded in 2023, Kinwits is a creative technology company driven by
              the vision of making digital innovation accessible to all. We
              specialize in designing engaging user experiences, developing
              high-performance web applications, and delivering solutions that
              are as functional as they are beautiful.
            </p>
            <p className="text-info-content font-serif leading-relaxed">
              Our passionate team blends creativity, strategy, and technology to
              help brands stand out, connect with their audience, and grow in an
              ever-evolving marketplace. We believe in a collaborative approach,
              ensuring every solution is tailored to the unique vision and goals
              of our clients. Whether it’s startups or enterprises, we’re here to
              turn ideas into impactful digital realities.
            </p>

            <div className="modal-action">
              <button
                className="btn btn-primary font-serif rounded-2xl bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
