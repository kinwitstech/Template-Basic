import aboutImage from "../assets/60241.jpg";

export default function Jumbotron() {
  return (
    <section
      id="home"
      className="relative py-20 text-center bg-secondary/10"
      style={{
        backgroundImage: `url(${aboutImage})`, // put your image in public/images/
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center px-4 py-35">
        <h2 className="mb-4 text-4xl font-extrabold text-white">CREATIVE DESIGN</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-white">
          Kinwits is a Creative Minimal Style Onepage. It is Fully Responsive and Retina Ready.
          Grab This Awesome Template Now.
        </p>
        <div className="flex justify-center space-x-5">
          <button className="px-6 py-2 text-white bg-gradient-to-r from-primary/90 to-accent/90 rounded hover:bg-primary">
            Learn More
          </button>
          <button className="px-6 py-2 bg-gray-300 rounded hover:bg-secondary">
            Purchase It
          </button>
        </div>
      </div>
    </section>
  );
}
