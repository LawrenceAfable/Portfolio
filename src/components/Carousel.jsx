import { useState } from "react";
import styles from "./carousel.module.css";

export default function Carousel({ images }) {
  const imagesPerView = 5;
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalImages - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % totalImages
    );
  };

  return (
    <div className={styles.carouselWrapper}>
      <button onClick={prevSlide} className={styles.nav}>‹</button>

      <div className={styles.carousel}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${(100 / imagesPerView) * currentIndex}%)`
          }}
        >
          {[...images, ...images].map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              className={styles.image}
            />
          ))}
        </div>
      </div>

      <button onClick={nextSlide} className={styles.nav}>›</button>
    </div>
  );
}
