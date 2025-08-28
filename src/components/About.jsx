import { useState } from "react";
import aboutImage from "../assets/60241.jpg";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="container scroll-mt-20 p-10 bg-base-100">
      <div className="flex flex-col items-stretch gap-8 lg:flex-row">
        <div className="lg:w-1/2">
          <div className="space-y-4">
            <span className="text-sm font-serif tracking-wide text-info">
              OUR STORY
            </span>
            <h2 className="text-primary">
              Crafting Digital Experiences <br />
              <span className="text-accent">that inspire</span>
            </h2>
            <p className="text-neutral-content/70">
              At Kinwits, we don’t just build websites – we create powerful,
              tailored digital solutions that help businesses thrive in the
              modern world.
            </p>
            <p className="text-neutral-content/70">
              Founded in 2023, Kinwits is a creative technology company driven by
              the vision of making digital innovation accessible to all.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="inline-block px-6 py-2 text-white bg-gradient-to-r from-primary to-accent hover:scale-110"
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
            <h3 className="text-primary mb-4">
              Crafting Digital Experiences that inspire
            </h3>
            <p className="text-neutral-content/70 mb-4">
              At Kinwits, we don’t just build websites – we create powerful,
              tailored digital solutions that help businesses thrive in the
              modern world.
            </p>
            <p className="text-neutral-content/70 mb-4">
              Founded in 2023, Kinwits is a creative technology company driven by
              the vision of making digital innovation accessible to all. We
              specialize in designing engaging user experiences, developing
              high-performance web applications, and delivering solutions that
              are as functional as they are beautiful.
            </p>
            <p className="text-neutral-content/70">
              Our passionate team blends creativity, strategy, and technology to
              help brands stand out, connect with their audience, and grow in an
              ever-evolving marketplace. We believe in a collaborative approach,
              ensuring every solution is tailored to the unique vision and goals
              of our clients. Whether it’s startups or enterprises, we’re here to
              turn ideas into impactful digital realities.
            </p>

            <div className="modal-action">
              <button
                className="px-6 py-2 text-white bg-gradient-to-r from-primary to-accent hover:scale-110" 
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
