import aboutImage from "../assets/60241.jpg";

export default function About() {
  return (
    <section id="about" className="px-20 py-20 bg-base-200">
      <div className="flex flex-col items-stretch gap-8 lg:flex-row">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-wide text-secondary">
              OUR STORY
            </span>
            <h2 className="text-4xl font-bold leading-snug text-primary">
              Crafting Digital Experiences <br />
              <span className="text-accent">that inspire</span>
            </h2>
            <h4 className="text-lg font-medium text-gray-700">
              At Kinwits, we don’t just build websites – we create powerful, tailored
              digital solutions that help businesses thrive in the modern world.
            </h4>
            <p className="leading-relaxed text-gray-600">
              Founded in 2023, Kinwits is a creative technology company driven by the vision
              of making digital innovation accessible to all. We specialize in designing
              engaging user experiences, developing high-performance web applications, and
              delivering solutions that are as functional as they are beautiful. Our
              passionate team blends creativity, strategy, and technology to help brands
              stand out, connect with their audience, and grow in an ever-evolving
              marketplace.
            </p>
            <a
              href="about-1.html"
              className="inline-block px-6 py-2 text-white transition-colors duration-200 bg-primary/80 rounded hover:bg-primary"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2">
          <img
            src={aboutImage}
            className="object-cover w-full rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
