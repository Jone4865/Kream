import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { useQuery, gql } from "@apollo/client";

import "./NonPcBannerStyle.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type IData = {
  id: number;
  imgName: string;
  bottomColor: string;
};

function NonPcBanner() {

  const GetData = gql`
    query getData {
      banner {
        id
        imgName
        bottomColor
      }
    }
  `;

  const { loading, error, data } = useQuery(GetData);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error :(</p>;

  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ width: "100%", height: "45vw", maxHeight: "480px" }}
      className="BannerSlider"
      loop={true}
      loopAdditionalSlides={1}
      scrollbar={{ draggable: true }}
    >
      {data?.banner?.map(({ id, imgName }: IData) => {
        return (
          <SwiperSlide key={id}>
            <img
              src={`./img/banner/${imgName}.jpg`}
              alt="이미지 설명"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default NonPcBanner;
