import React, { useState } from "react";
import { gallery } from "../../constants";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#0a0718] to-[#120d2a]" id="gallery">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide">
        GALLERY
      </h2>
      
         

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {gallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item.image)} // when clicked, open modal
            className="group relative w-[90%] max-w-[340px] mx-auto rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/30 cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Text strip at bottom (no blur) */}
            <div className="absolute bottom-0 left-0 w-full bg-black/30 p-4">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-200 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // 👈 click anywhere to close
        >
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
