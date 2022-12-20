import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import { useQuery, gql } from "@apollo/client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../Body/Body.scss";

type IData = {
  id: number;
  nickname: string;
  imgName: string;
};

function StylepicksSilder() {
  const GetData = gql`
    query getData {
      stylepicks {
        id
        nickname
        imgName
      }
    }
  `;

  const { loading, error, data } = useQuery(GetData);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error :(</p>;

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{
        width: "100%",
        height: "30vw",
        maxHeight: "480px",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "30px",
      }}
      className="MidSlider"
    >
      {data?.stylepicks?.map(({ id, imgName, nickname }: IData) => {
        return (
          <SwiperSlide key={id}>
            <img
              src={`./img/stylepicks/${imgName}.jpg`}
              alt="이미지 설명"
              style={{
                width: "17vw",
                height: "22vw",
                borderRadius: "8px",
                maxWidth: "200px",
                maxHeight: "250px",
                marginBottom: "20px",
              }}
            />
            <div className="Cards">@{nickname}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default StylepicksSilder;
