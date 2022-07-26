import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
function Design() {
  return (
    <>
      <div className="flex items-center justify-between px-12 py-6">
        <div>
          <p>Logo</p>
        </div>
        <div className="flex">
          <p className="mr-6">Home</p>
          <p className="mr-6">About</p>
          <p>BLog</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 pt-8">
        <div className="px-12">
          <p className="mb-6">2021</p>
          <p>HOPE Alkazar</p>
          <p>Client: Nike</p>
          <p className="mb-6">
            Project Tags: Logo Design, Pattern Design, Custom Type
          </p>
        </div>
        <div className="col-span-2 w-full px-12">
          <Swiper
            navigation={true}
            loop={true}
            centeredSlides={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/about/1a.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/about/2a.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/about/3a.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/about/4a.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/about/5a.jpeg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default Design;
