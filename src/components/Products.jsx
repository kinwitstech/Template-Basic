import React, { useEffect, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";

const galleryItems = [
  {
    id: 1,
    title: "PRODUCT 1",
    image:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Product 1 description",
  },
  {
    id: 2,
    title: "PRODUCT 2",
    image:
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    description: "Product 2 description",
  },
  {
    id: 3,
    title: "PRODUCT 3",
    image:
      "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Product 3 description",
  },
  {
    id: 4,
    title: "PRODUCT 4",
    image:
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800&h=700&fit=crop",
    description: "Product 4 description",
  },
  {
    id: 5,
    title: "PRODUCT 5",
    image:
      "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Product 5 description",
  },
  {
    id: 6,
    title: "PRODUCT 6",
    image:
      "https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=800&h=650&fit=crop",
    description: "Product 6 description",
  },
];

function Products() {
  const [initialLimit, setInitialLimit] = useState(2);
  const [visibleCount, setVisibleCount] = useState(2);
  const [selectedItem, setSelectedItem] = useState(null);

  const allVisible = visibleCount >= galleryItems.length;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    const applyLimit = () => {
      const limit = mq.matches ? 4 : 2;
      setInitialLimit(limit);
      setVisibleCount((prev) =>
        prev >= galleryItems.length ? prev : limit
      );
    };

    applyLimit();

    mq.addEventListener("change", applyLimit);
    return () => mq.removeEventListener("change", applyLimit);
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + initialLimit, galleryItems.length)
    );
  };

  const handleShowLess = () => {
    setVisibleCount(initialLimit);
    const section = document.getElementById("products");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="products"
      className="w-full scroll-mt-15 bg-base-200 p-10 md:p-10"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h1 className="text-accent mb-4">Our Products</h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleryItems.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="bg-white font-serif rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="
                  absolute inset-0 
                  bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                  opacity-80 lg:opacity-0 lg:group-hover:opacity-100 
                  transition-all duration-300
                "
                >
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      aria-label="View product details"
                      className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-200"
                      onClick={() => setSelectedItem(item)}
                    >
                      <EyeIcon className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4">
                      <h5 className="font-bold text-white mb-2">
                        {item.title}
                      </h5>
                      <p className="text-white/90 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {galleryItems.length > initialLimit && (
          <div className="flex justify-center mt-8">
            {!allVisible ? (
              <button
                onClick={handleShowMore}
                className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg"
              >
                Show More
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg"
              >
                Show Less
              </button>
            )}
          </div>
        )}

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="
                relative 
                mx-auto 
                rounded-xl 
                shadow-lg 
                overflow-hidden 
                flex flex-col 
                bg-white
                max-w-[90vw] 
                max-h-[90vh]
              "
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close modal"
                className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2 hover:bg-black/80"
                onClick={() => setSelectedItem(null)}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="object-contain max-w-full max-h-[70vh] h-auto w-auto mx-auto bg-black"
              />

              <div className="p-6 text-center">
                <h4 className="font-semibold text-gray-800">
                  {selectedItem.title}
                </h4>
                <p className="mt-2 text-gray-600">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
