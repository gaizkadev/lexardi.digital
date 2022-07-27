import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper";

function SliderAutoFade() {
  return (
    <>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
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
    </>
  );
}
export default SliderAutoFade;
