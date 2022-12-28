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

type Props = {
  data: Data[];
};

type Data = {
  id: number;
  nickname: string;
};

function StylepicksSilder(data: Props) {
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
        slidesPerView={isMid ? 6 : isMobile ? 3.7 : 5}
        navigation
        onSlideChange={() => setPage(page + 1)}
        className="mid-slider"
        loop={true}
  
      >
        {data?.data?.map(({ id, nickname }: Data) => {
          return (
            <SwiperSlide key={id}>
              <div className="cards-body">
                <img
                  className="midslider-icon"
                  src={`./img/peoples/iconImg/${nickname}.jpg`}
                  alt="프로필이미지"
                />
                <img
                  className="style-img"
                  src={`./img/peoples/styleImg/${nickname}.jpg`}
                  alt="스타일이미지"
                />
                <div className="nick-name">
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
