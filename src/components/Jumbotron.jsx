import aboutImage from "../assets/60241.jpg";

export default function Jumbotron() {
  return (
    <section
      id="home"
      className="relative px-4 py-20 text-center bg-gray-100"
      style={{
        backgroundImage: `url(${aboutImage})`, // put your image in public/images/
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-35">
        <h2 className="mb-4 text-4xl font-extrabold text-white">CREATIVE DESIGN</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-white">
          Enigma is a Creative Minimal Style Onepage. It is Fully Responsive and Retina Ready.
          Grab This Awesome Template Now.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Learn More
          </button>
          <button className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Purchase It
          </button>
        </div>
      </div>
    </section>
  );
}
