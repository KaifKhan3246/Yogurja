import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Gallery = () => {
  const images = [
    { src: "Gorakshasana-1-scaled-1-700x467.jpg", category: "Yoga" },
    { src: "Gorakshasana-scaled-1-700x467.jpg", category: "Yoga" },
    { src: "Garudasana-1-scaled-1-700x467.jpg", category: "Yoga" },
    { src: "Matsendrasana-scaled-1-700x467.jpg", category: "Yoga" },
    { src: "Konasana-scaled-1-700x467.jpg", category: "Yoga" },
    { src: "Pachhimottasana-scaled-1-1536x1024.jpg", category: "Yoga" },
    { src: "trainer2-1426x1536.jpg", category: "Trainer" },
    { src: "WhatsApp-Image-2023-04-29-at-12.20.22-PM.jpeg", category: "Trainer" },
    { src: "IMG_7174-scaled-1-700x467.jpg", category: "Events" },
    { src: "IMG_7207-scaled-1-700x467.jpg", category: "Events" },
  ];

  const categories = ["All", "Yoga", "Trainer", "Events"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Simplified keyboard navigation
  useEffect(() => {
    const handleKey = ({ key }) => {
      if (currentIndex === null) return;

      if (key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
      if (key === "ArrowLeft")
        setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
      if (key === "Escape") setCurrentIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, filteredImages.length]);

  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-60 bg-zinc-950 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-semibold font-serif mb-2">GALLERY</h1>
          <p className="text-sm font-serif text-gray-300">
            <Link to="/" className="text-orange-500">Home</Link> / Gallery
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat) || setCurrentIndex(null)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition hover:scale-105"
            >
              <img
                src={`/${img.src}`}
                alt={img.category}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Popup */}
        {currentIndex !== null && (
          <div
            onClick={() => setCurrentIndex(null)}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
          >
            <img
              src={`/${filteredImages[currentIndex].src}`}
              className="max-w-[90%] max-h-[80%] rounded-lg"
            />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
