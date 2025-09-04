export default function Jumbotron() {
  return (
    <section
      id="home"
      className="relative w-full h-screen text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1678690832310-cf614292671d?q=80&w=1389&auto=format&fit=crop&ixlib=rb)`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="section-container relative h-full flex flex-col sm:items-center justify-center">
        <h2 className="mb-4 text-white">CREATIVE DESIGN</h2>
        <p className="max-w-2xl mx-auto mb-6 text-white text-center">
          Kinwits is a Creative Minimal Style Onepage. It is Fully Responsive and Retina Ready.
          Grab This Awesome Template Now.
        </p>
        <div className="flex justify-center space-x-5">
          <button className="px-6 py-2 text-white bg-secondary/80 hover:bg-secondary/100">
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
