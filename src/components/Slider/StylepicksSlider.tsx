import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import { useQuery, gql } from "@apollo/client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface IId {
  id: number;
}

export default () => {
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
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: "100%", height: "45vw", maxHeight: "480px", display:"flex", justifyContent: "space-between" }}
      >
        {data?.stylepicks?.map(({ id }: IId) => {
          return (
            <SwiperSlide key={id}>
              <img
                src={
                  "./img/stylepicks/" +
                  data?.stylepicks[id - 1]?.imgName +
                  ".jpg"
                }
                style={{width:"17vw", height:"22vw", borderRadius:"8px", maxWidth:"200px", maxHeight:"250px"}}
              />
              <div style={{position:"absolute", bottom:"33%", left:"5%", color:"white", fontSize:"13px"}}>@{data?.stylepicks[id - 1]?.nickname}</div>
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </>
  );
};
