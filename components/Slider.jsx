import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
function Slider() {
  return (
    <>
      <div className="container mx-auto">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2800,
            disableOnInteraction: true,
          }}
          speed={700}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="object-cover">
              <img src="/about/about-1.jpeg" className="" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-600 flex justify-center">2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-green-600 flex justify-center">3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-orange-600 flex justify-center">4</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Slider;
