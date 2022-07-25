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
        <SwiperSlide className="text-center">
          <img src={process.env.PUBLIC_URL+`assets/294.jpg`} alt=''></img>
          <h4>Amplifying Artist Voices</h4>
          <p>At Artverse, we believe an artist’s sales should be based on the quality of their work, not how well they can market themselves. Artverse is a platform that helps artists gain exposure for their work without having to beat the algorithm.</p>
        </SwiperSlide>
        <SwiperSlide className="text-center">
        <h4>Simplifying the Artist-Collector Experience</h4>
          <p>​We are streamlining the collecting experience by removing the noise so artists can concentrate on creating and collectors never miss a drop from their favorite artist!</p>
        </SwiperSlide>
        <SwiperSlide className="text-center">
        <h4>Exclusive Early Access to Artist Drops</h4>
          <p>Artverse artists can provide exclusive access and prices to Artverse collectors before their work is available to the general public.</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel