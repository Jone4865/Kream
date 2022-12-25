import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import { useMediaQuery } from "react-responsive"; // pc여부 확인 모듈

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./MidSlider.scss";

type IProps = {
  data: any;
};

type IData = {
  id: number;
  nickname: string;
};

function StylepicksSilder(data: IProps) {
  const [page, setPage] = useState(0);

  const isMid = useMediaQuery({
    query: "(min-width: 970px) and (max-width: 1920px)",
  });

  const isPc = useMediaQuery({
    query: "(min-width: 770px) and (max-width: 1920px)",
  });

  const isMobile = useMediaQuery({
    query: "(min-width: 0px) and (max-width: 650px)",
  });
  
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={isMid ? 6 : isMobile ? 3.7 : 4.5}
        navigation
        onSwiper={(swiper) => ""}
        onSlideChange={() => setPage(page + 1)}
        className={isPc ? "midSliderPc" : "midSliderNonPc"}
        loop={true}
      >
        {data?.data?.map(({ id, nickname }: IData) => {
          return (
            <SwiperSlide key={id}>
              <div className="cardsBody">
                <img
                  className="icon"
                  src={`./img/peoples/iconImg/${nickname}.jpg`}
                  alt="profileImg"
                />
                <img
                  className={isPc ? "styleImgPc" : "styleImgNonPc"}
                  src={`./img/peoples/styleImg/${nickname}.jpg`}
                  alt="midSliderImg"
                />
                <div className="nickName">
                  <div>@{nickname}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default StylepicksSilder;
