import React, { useEffect, useRef, useState } from "react";
import "./ReviewsSection.css";

const data = [
  {
    city: "New York",
    text: "This sunscreen blends perfectly into my skin and doesn't clog pores. Finally found the right one!",
    name: "Jacob Jones",
  },
  {
    city: "New York",
    text: "This sunscreen blends perfectly into my skin and doesn't clog pores. Finally found the right one!",
    name: "Jacob Jones",
  },
  {
    city: "New York",
    text: "This sunscreen blends perfectly into my skin and doesn't clog pores. Finally found the right one!",
    name: "Jacob Jones",
  },
  {
    city: "New York",
    text: "This sunscreen blends perfectly into my skin and doesn't clog pores. Finally found the right one!",
    name: "Jacob Jones",
  },
  {
    city: "New York",
    text: "This sunscreen blends perfectly into my skin and doesn't clog pores. Finally found the right one!",
    name: "Jacob Jones",
  },
  {
    city: "New York",
    text: "This sunscreen blends perfectly into my skin and doesn't clog pores. Finally found the right one!",
    name: "Jacob Jones",
  },
];

const ReviewsSection = () => {
  const sliderRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const slider = sliderRef.current;
    const center = slider.scrollLeft + slider.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActive(closestIndex);
  };

  const slide = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div>
      <section className="t-section">
        <button className="inline-flex items-center gap-2 py-2 px-4 md:py-4 md:px-7 border border-green-400 rounded-2xl text-lg font-medium bg-white hover:bg-green-400 hover:text-white ">
          <span className="w-4 h-4 bg-black rounded-full" />
          Testimonial
        </button>
        <h2>
          What Client Say About <br /> My Services
        </h2>

        <div className="t-slider" ref={sliderRef} onScroll={handleScroll}>
          {data.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`t-card ${active === i ? "active" : ""}`}
            >
              <small>📍 {item.city}</small>
              <p>{item.text}</p>
              <div className="t-user">
                <img
                  src="public/assets/5968230c8f9671fbd2f489abba125af746e76516.png"
                  alt=""
                />
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="t-controls">
          <button onClick={() => slide("left")}>‹</button>
          <button onClick={() => slide("right")}>›</button>
        </div>
      </section>
    </div>
  );
};

export default ReviewsSection;
