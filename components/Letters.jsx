import SliderAutoFade from "../components/SliderAutoFade";
function Letters() {
  return (
    <>
      <div className="pl-12 bg-black w-full h-screen">
        <p
          className="text-11xl font-black text-white"
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-delay="200"
          duration="3000"
        >
          lexardi .
        </p>
        <p
          className="text-10xl font-medium text-white"
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-delay="1000"
          duration="3000"
        >
          digital
        </p>
      </div>
      <div className="grid grid-cols-6 py-20 justify-center bg-black h-screen w-full">
        <div className="bg-blue-200">1</div>
        <div className="bg-blue-300">2</div>
        <div className="col-span-4 pr-6">
          <SliderAutoFade />
        </div>
      </div>
    </>
  );
}
export default Letters;
