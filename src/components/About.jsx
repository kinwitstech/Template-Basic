import { useState } from "react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="section-container scroll-mt-10 section-padding bg-base-100">
      <div className="section-grid">
        <div className="section-flex space-y-4">
          <span className="text-sm font-semibold tracking-wide text-info">
            OUR STORY
          </span>
          <h2 className="text-primary">
            Crafting Digital Experiences <br />
            <span className="text-secondary">that inspire</span>
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
            className="px-6 py-2 w-32 h-10 text-white bg-secondary transition-transform"
          >
            Read More
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1574556132185-5f4a6ffa80c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb"
            alt="About Kinwits"
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
            <p className="text-neutral-content/70 mb-4">
              Our passionate team blends creativity, strategy, and technology to
              help brands stand out, connect with their audience, and grow in an
              ever-evolving marketplace. We believe in a collaborative approach,
              ensuring every solution is tailored to the unique vision and goals
              of our clients. Whether it’s startups or enterprises, we’re here to
              turn ideas into impactful digital realities.
            </p>
            <div className="modal-action">
              <button
                className="px-6 py-2 text-white bg-secondary transition-transform"
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
