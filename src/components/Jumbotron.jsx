import aboutImage from "../assets/60241.jpg";

export default function Jumbotron() {
  return (
    <section
      id="home"
      className="relative w-full h-screen text-center bg-secondary/10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${aboutImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container relative h-full flex flex-col sm:items-center justify-center">
        <h2 className="mb-4 text-white">CREATIVE DESIGN</h2>
        <p className="max-w-2xl mx-auto mb-6 text-white">
          Kinwits is a Creative Minimal Style Onepage. It is Fully Responsive and Retina Ready.
          Grab This Awesome Template Now.
        </p>
        <div className="flex justify-center space-x-5">
          <button className="px-6 py-2 text-white bg-gradient-to-r from-primary/90 to-accent/90 hover:bg-primary">
            Learn More
          </button>
          <button className="px-6 py-2 bg-base-300 text-neutral-content hover:bg-base-200">
            Purchase It
          </button>
        </div>
      </div>
    </section>
  );
}
