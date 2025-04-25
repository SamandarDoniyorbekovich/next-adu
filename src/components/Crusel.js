"use client";

import { useEffect } from "react";
import "./carousel.css"; // CSS faylini alohida yozamiz

const Carousel = () => {
  useEffect(() => {
    const slider = document.querySelector(".slider");

    function activate(e) {
      const items = document.querySelectorAll(".item");
      if (e.target.matches(".next")) {
        slider.append(items[0]);
      } else if (e.target.matches(".prev")) {
        slider.prepend(items[items.length - 1]);
      }
    }

    document.addEventListener("click", activate, false);

    return () => {
      document.removeEventListener("click", activate);
    };
  }, []);

  const slides = [
    {
      title: "Lossless Youths",
      url: "https://adu.uz/rasmlar/news/2021/main_photo-2025-03-15_14-41-28-photo_2025-03-15_14-37-07.jpg",
    },
    {
      title: "Estrange Bond",
      url: "https://adu.uz/rasmlar/news/2021/main_photo-2025-03-28_16-03-07-photo_2025-03-13_12-17-08_(3).jpg",
    },
    {
      title: "The Gate Keeper",
      url: "https://adu.uz/rasmlar/news/2021/main_photo-2025-03-14_20-02-15-photo_2025-03-13_20-48-40.jpg",
    },
    {
      title: "Last Trace Of Us",
      url: "https://adu.uz/rasmlar/news/2021/main_photo-2025-02-18_19-05-09-photo_2025-02-18_19-02-55.jpg",
    },
    {
      title: "Urban Decay",
      url: "https://adu.uz/rasmlar/news/2021/main_photo-2025-02-14_09-07-48-bobur22_mainph.jpg",
    },
    // {
    //   title: "The Migration",
    //   url: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
    // },
  ];

  return (
    <main>
      <ul className="slider">
        {slides.map((slide, index) => (
          <li
            key={index}
            className="item"
            style={{ backgroundImage: `url('${slide.url}')` }}
          >
            <div className="content">
              <h2 className="title">"{slide.title}"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
                {/* <img src={slide.url}/> */}
              </p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="nav">
        <span className="btn prev">←</span>
        <span className="btn next">→</span>
      </nav>
    </main>
  );
};

export default Carousel;
