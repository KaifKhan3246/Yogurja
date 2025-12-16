  import { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
import Footer from './Footer'



  /* ================= GALLERY ================= */
  const Gallery = () => {
    const images = [
      { src: "Gorakshasana-1-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "Gorakshasana-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "Garudasana-1-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "Matsendrasana-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "Konasana-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "Pachhimottasana-scaled-1-1536x1024.jpg", category: "Yoga" },

      { src: "IMG_6998-scaled-2-700x467.jpg", category: "Yoga" },
      { src: "IMG_7571-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "IMG_6995-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "IMG_6995-scaled-2-700x467.jpg", category: "Yoga" },
      { src: "IMG_6998-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "IMG_7038-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "IMG_7062-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "IMG_7129-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "IMG_7161-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "IMG_7014-scaled-1-700x467.jpg", category: "Yoga" },
      { src: "IMG_7029-scaled-1-700x467.jpg", category: "Yoga" },

      { src: "trainer2-1426x1536.jpg", category: "Trainer" },
      { src: "WhatsApp-Image-2023-04-29-at-12.20.22-PM.jpeg", category: "Trainer" },

      { src: "IMG_7174-scaled-1-700x467.jpg", category: "Events" },
      { src: "IMG_7207-scaled-1-700x467.jpg", category: "Events" },
      { src: "IMG_7213-scaled-1-700x467.jpg", category: "Events" },
      { src: "IMG_7542-scaled-1-700x467.jpg", category: "Events" },
      { src: "IMG_7563-scaled-1-700x467.jpg", category: "Events" },
      { src: "IMG_7263-scaled-1-700x467.jpg", category: "Events" },
      { src: "IMG_7183-2048x1365-1-700x467.jpg", category: "Events" },
      { src: "IMG_7175-1536x1024-1-700x467.jpg", category: "Events" },
      { src: "IMG_7220-1536x1024-1-700x467.jpg", category: "Events" },
    ];

    const categories = ["All", "Yoga", "Trainer", "Events"];
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(null);
    const [columns, setColumns] = useState(3);

    const filteredImages =
      activeCategory === "All"
        ? images
        : images.filter((img) => img.category === activeCategory);

    /* RESPONSIVE COLUMNS */
    useEffect(() => {
      const updateColumns = () => {
        if (window.innerWidth < 600) setColumns(1);
        else if (window.innerWidth < 992) setColumns(2);
        else setColumns(3);
      };
      updateColumns();
      window.addEventListener("resize", updateColumns);
      return () => window.removeEventListener("resize", updateColumns);
    }, []);

    /* KEYBOARD NAVIGATION */
    useEffect(() => {
      const handleKey = (e) => {
        if (currentIndex === null) return;
        if (e.key === "ArrowRight")
          setCurrentIndex((p) =>
            p === filteredImages.length - 1 ? 0 : p + 1
          );
        if (e.key === "ArrowLeft")
          setCurrentIndex((p) =>
            p === 0 ? filteredImages.length - 1 : p - 1
          );
        if (e.key === "Escape") setCurrentIndex(null);
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, [currentIndex, filteredImages.length]);

    return (
      <>
        {/* ================= GALLERY ================= */}
        <div
  style={{
    padding: "20px 40px 40px",


    maxWidth: "1200px",
    margin: "0 auto",
  }}
>

          <>
  {/* ===== FULL-WIDTH BLACK HERO ===== */}
  <div
    style={{
      width: "100vw",
      height: "240px",
      backgroundColor: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "calc(-50vw + 50%)",
    }}
  >
    <div style={{ textAlign: "center", color: "#fff" }}>
      <h1
        style={{
          fontSize: "56px",
          letterSpacing: "3px",
          marginBottom: "12px",
          fontFamily: "serif",
        }}
      >
        GALLERY
      </h1>

      <p style={{ fontSize: "14px", color: "#ccc" }}>
        <Link
          to="/"
          style={{ color: "#ff8c42", textDecoration: "none" }}
        >
          Home
        </Link>{" "}
        / <span style={{ color: "#fff" }}>Gallery</span>
      </p>
    </div>
  </div>

  {/* ===== GALLERY CONTENT ===== */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "60px 40px",
    }}
  >
  </div>
</>




          {/* FILTERS */}
          <div style={{ textAlign: "center", margin: "10px 0 30px" }}>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentIndex(null);
                }}
                style={{
                  margin: "5px",
                  padding: "10px 18px",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                  background: activeCategory === cat ? "#ff8c42" : "#eee",
                  color: activeCategory === cat ? "#fff" : "#333",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div
            style={{
              display: activeCategory === "Trainer" ? "flex" : "grid",
              justifyContent: activeCategory === "Trainer" ? "center" : "initial",
              gridTemplateColumns:
                activeCategory === "Trainer"
                  ? "none"
                  : `repeat(${columns}, 1fr)`,
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {filteredImages.map((img, index) => (
              <div
    key={index}
    onClick={() => setCurrentIndex(index)}
    style={{
      width: img.category === "Trainer" ? "260px" : "100%",
      height: img.category === "Trainer" ? "360px" : "auto",
      overflow: "hidden",
      borderRadius: "14px",
      cursor: "pointer",
      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow =
        "0 14px 30px rgba(0,0,0,0.25)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 6px 18px rgba(0,0,0,0.15)";
    }}
  >

                <img
    src={`/${img.src}`}
    alt="gallery"
    loading="lazy"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.35s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.transform = "scale(1.06)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.transform = "scale(1)")
    }
  />

              </div>
            ))}
          </div>

          {/* POPUP */}
          {currentIndex !== null && (
            <div
              onClick={() => setCurrentIndex(null)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
              }}
            >
              <img
                src={`/${filteredImages[currentIndex].src}`}
                style={{ maxWidth: "90%", maxHeight: "85%", borderRadius: "12px" }}
              />
            </div>
          )}
        </div>

        <Footer />

      </>
    );
  };

  export default Gallery;
