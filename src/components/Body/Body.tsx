import React, { useState } from "react";

import { useInView } from "react-intersection-observer"; // 무한 스크롤 모듈

import { useQuery, gql } from "@apollo/client"; // 서버단

import { GrLinkTop } from "react-icons/gr"; // 탑으로 가는 아이콘

import "./Body.scss";

import Menu from "./Menu/Menu"; // 컴포넌트들
import Item from "./Item/Item";
import MidAd from "./MidAd/MidAd";
import MidSlider from "./MidSlider/MidSlider";
import Carousel from "./Carousel/Carousel";
import Title from "./Title/Title";

type Props = {
  isPc: boolean;
};

function Body({ isPc }: Props) {
  const GetData = gql`
    query getData {
      # 메뉴들
      menu1 {
        id
        imgName
        title
      }
      menu2 {
        id
        imgName
        title
      }
      # 아이템들
      justdrop {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      mostpopular {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      newin {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      buildawinter {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      mostshared {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      museum {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      suedeshoes {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      lowest {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      highest {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      upcoming {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      scent {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      giftideas {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      end {
        id
        price
        maker
        content
        delivery
        now
        imgName
      }
      banner {
        id
        bottomColor
        imgName
        backColor
      }
      stylepicks {
        id
        nickname
      }
      todaypeoples {
        id
        nickname
      }
    }
  `;

  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  if (page === 1 && inView) {
    setPage(page + 1);
  }

  const { loading, error, data } = useQuery(GetData);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error :(</p>;

  return (
    <div className="body">
      <div className="void" />
      <Carousel data={data?.banner} isPc={isPc} />
      <div className="navigater" onClick={() => window.scrollTo(0, 0)}>
        <GrLinkTop className="icon-to-top" />
      </div>
      <Menu menu={data?.menu1} name="menu1" isPc={isPc} />
      {!isPc ? <div className="line" /> : ""}
      <Title title={"Just Dropped"} subTitle={"발매 상품"} />
      <Item items={data?.justdrop} isPc={isPc} name="justdrop" />
      {!isPc ? <div className="line" /> : ""}
      <Title title={"Brand Focus"} subTitle={"발매 상품"} />
      <Menu menu={data?.menu2} name="menu2" isPc={isPc} />
      <MidAd imgName="midAd1.jpg" />
      <Title title={"Most Popular"} subTitle={"인기 상품"} />
      <Item items={data?.mostpopular} isPc={isPc} name="mostpopular" />
      {!isPc ? <div className="line" /> : ""}
      <div className="title">
        <div className="people-title">Style Picks!</div>
      </div>
      <MidSlider data={data?.stylepicks} />
      <MidAd imgName="midAd2.jpg" />
      <Title title={"New In"} subTitle={"신규 등록 상품"} />
      <Item items={data?.newin} isPc={isPc} name="newin" />
      <MidAd imgName="midAd3.jpg" />
      <Title title={"Build A Winter"} subTitle={"겨울철 꼭 필요한 매칭"} />
      <Item items={data?.buildawinter} isPc={isPc} name="buildawinter" />
      <MidAd imgName="midAd4.jpg" />
      <Title title={"Most Shared"} subTitle={"가장 많이 공유된 아우터"} />
      <Item items={data?.mostshared} isPc={isPc} name="mostshared" />
      <MidAd imgName="midAd5.jpg" />
      <Title
        title={"The Museum Visitor"}
        subTitle={"더뮤지옴비지터 시즌 오프!"}
      />
      <Item items={data?.museum} isPc={isPc} name="museum" />
      <MidAd imgName="midAd6.jpg" />
      <Title
        title={"Suede Shoes Collection"}
        subTitle={"FW 시즌의 대표 소재!"}
      />
      <Item items={data?.suedeshoes} isPc={isPc} name="suedeshoes" />
      {!isPc ? <div className="line" /> : ""}
      <div className="title">
        <div className="people-title">오늘의 인기유저</div>
      </div>
      <MidSlider data={data?.todaypeoples} />
      <MidAd imgName="midAd7.jpg" />
      <Title title={"New Lowest Asks"} subTitle={"새로운 즉시 구매가"} />
      <Item items={data?.lowest} isPc={isPc} name="lowest" />
      <div ref={ref}></div>
      {!isPc ? <div className="line" /> : ""}
      {page === 2 ? (
        <>
          <Title title={"New Highest Bids"} subTitle={"새로운 즉시 판매가"} />
          <Item items={data?.highest} isPc={isPc} name="highest" />
          <MidAd imgName="midAd8.jpg" />
          <Title title={"Upcoming Release"} subTitle={"발매 예정"} />
          <Item items={data?.upcoming} isPc={isPc} name="upcoming" />
          <MidAd imgName="midAd9.jpg" />
          <Title
            title={"The Scent of Winter"}
            subTitle={"겨울을 함께 할 향수"}
          />
          <Item items={data?.scent} isPc={isPc} name="scent" />
          <MidAd imgName="midAd10.jpg" />
          <Title
            title={"Affordable Gift Ideas"}
            subTitle={"부담 없으면서도 특별한"}
          />
          <Item items={data?.giftideas} isPc={isPc} name="giftideas" />
          <MidAd imgName="midAd11.jpg" />
          <Title
            title={"Your End of Year Playlist"}
            subTitle={"음악과 함께 마무리하는 2022년"}
          />
          <Item items={data?.end} isPc={isPc} name="end" />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Body;
