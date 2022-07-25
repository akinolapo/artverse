import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Carousel = () => {
  return (
    <div>
         <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h4>Amplifying Artist Voices</h4>
          <p>At Artverse, we believe an artist’s sales should be based on the quality of their work, not how well they can market themselves. Artverse is a platform that helps artists gain exposure for their work without having to beat the algorithm.</p>
        </SwiperSlide>
        <SwiperSlide>
        <h4>Amplifying Artist Voices</h4>
          <p>At Artverse, we believe an artist’s sales should be based on the quality of their work, not how well they can market themselves. Artverse is a platform that helps artists gain exposure for their work without having to beat the algorithm.</p>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel