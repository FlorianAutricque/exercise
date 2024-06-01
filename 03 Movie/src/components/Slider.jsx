import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import React from "react";

import { Navigation } from "swiper/modules";

function Slider({ fetch, children }) {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 2,
      slidesPerGroup: 1,
      centeredSlides: true,
      loop: true,
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: true,
      cssMode: true,
      breakpoints: {
        350: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: -60,
          centeredSlides: true,
        },
        600: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: -100,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 4,
          slidesPerGroup: 3,
          spaceBetween: -50,
          centeredSlides: false,
        },
        1200: {
          slidesPerView: 7,
          slidesPerGroup: 4,
          spaceBetween: 160,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 8,
          slidesPerGroup: 5,
          spaceBetween: 160,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 10,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        },
      },
    });
  }, [fetch]);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { key: index })
        )}
      </div>
    </div>
  );
}

export default Slider;
