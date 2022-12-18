import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { useMediaQuery } from "react-responsive";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const isPc = useMediaQuery({
    query: "(min-width: 770px) and (max-width: 3000px)",
  });

  return (
    <>
      {isPc ? (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ width: "100%", height: "45vw", maxHeight: "480px" }}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {/* <SwiperSlide><img src="./img/Banner/banner1.jpg" className='ADImg' /></SwiperSlide> */}
          <SwiperSlide>
            <img src="./img/Banner/banner2.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner3.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner4.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner5.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner6.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner7.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner8.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner9.jpg" className="ADImg" />
          </SwiperSlide>
          ...
        </Swiper>
      ) : (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ width: "100%", height: "45vw", maxHeight: "480px" }}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {/* <SwiperSlide><img src="./img/Banner/banner1.jpg" className='ADImg' /></SwiperSlide> */}
          <SwiperSlide>
            <img src="./img/Banner/banner2.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner3.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner4.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner5.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner6.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner7.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner8.jpg" className="ADImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Banner/banner9.jpg" className="ADImg" />
          </SwiperSlide>
          ...
        </Swiper>
      )}
    </>
  );
};
