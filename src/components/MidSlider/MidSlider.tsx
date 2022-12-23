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

  const isPc = useMediaQuery({
    query: "(min-width: 970px) and (max-width: 1920px)",
  });

  console.log(isPc);
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={isPc ? 6 : 5}
        navigation
        onSwiper={(swiper) => ""}
        onSlideChange={() => setPage(page + 1)}
        className="midSlider"
        loop={true}
      >
        {data?.data?.map(({ id, nickname }: IData) => {
          return (
            <SwiperSlide key={id}>
              <div className="cardsBody">
                <img
                  className="icon"
                  src={`./img/peoples/iconImg/${nickname}.jpg`}
                />
                <img
                  className="styleImg"
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
