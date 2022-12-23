import React, { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive"; // pc여부 확인 모듈

import { useInView } from "react-intersection-observer"; // 무한 스크롤 모듈

import { useQuery, gql } from "@apollo/client"; // 서버단

import { GrLinkTop } from "react-icons/gr"; // 탑으로 가는 아이콘

import "./Body.scss";

import Menu from "./Menu/Menu"; // 컴포넌트들
import Item from "./Item/Item";
import MidAd from "./MidAd/MidAd";
import Carousel from "./Carousel/Carousel";
import MidSlider from "../MidSlider/MidSlider";

function Body() {
  const isPc = useMediaQuery({
    query: "(min-width: 770px) and (max-width: 1920px)",
  });

  const GetData = gql`
    query getData {
      # 메뉴들
      menu1 {
        id
        imgName
        divName
      }
      menu2 {
        id
        imgName
        divName
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
      <div style={{ height: isPc ? "95px" : "60px" }} />
      <Carousel data={data?.banner} />
      <div className="navigater" onClick={() => window.scrollTo(0, 0)}>
        <GrLinkTop style={{ fontSize: "17px", marginTop: "16px" }} />
      </div>
      <Menu menu={data?.menu1} name="menu1" />
      {!isPc ? <div className="line" /> : ""}
      <Item
        item={data?.justdrop}
        name="justdrop"
        divName="Just Dropped"
        divText="발매 상품"
      />
      {!isPc ? <div className="line" /> : ""}
      <div className="divTitle">
        <div className="divName">Brand Focus</div>
        <div className="divText">추천 브랜드</div>
      </div>
      <Menu menu={data?.menu2} name="menu2" />
      <MidAd imgName="midAd1" />
      <Item
        item={data?.mostpopular}
        name="mostpopular"
        divName="Most Popular"
        divText="인기 상품"
      />
      <div className="divTitle">
        <div className="divName">Style Picks!</div>
      </div>
      <MidSlider data={data?.stylepicks} />
      {!isPc ? <div className="line" /> : ""}
      <MidAd imgName="midAd2" />
      <Item
        item={data?.newin}
        name="newin"
        divName="New In"
        divText="신규 등록 상품"
      />
      <MidAd imgName="midAd3" />
      <Item
        item={data?.buildawinter}
        name="buildawinter"
        divName="Build a Winter Wardrobe"
        divText="겨울철 꼭 필요한 매칭"
      />
      <MidAd imgName="midAd4" />
      <Item
        item={data?.mostshared}
        name="mostshared"
        divName="Most Shared Outer"
        divText="가장 많이 공유된 아우터"
      />
      <MidAd imgName="midAd5" />
      <Item
        item={data?.museum}
        name="museum"
        divName="The Museum Visitor"
        divText="더뮤지엄비지터 시즌 오프!"
      />
      <MidAd imgName="midAd6" />
      <Item
        item={data?.suedeshoes}
        name="suedeshoes"
        divName="Suede Shoes Collection"
        divText="FW 시즌의 대표 소재!"
      />
      <div className="divTitle">
        <div className="divName">오늘의 인기유저</div>
      </div>
      <MidSlider data={data?.todaypeoples} />
      {!isPc ? <div className="line" /> : ""}
      <MidAd imgName="midAd7" />
      <Item
        item={data?.lowest}
        name="lowest"
        divName="New Lowest Asks"
        divText="새로운 즉시 구매가"
      />
      <div ref={ref}></div>
      {!isPc ? <div className="line" /> : ""}
      {page === 2 ? (
        <>
          <Item
            item={data?.highest}
            name="highest"
            divName="New Highest Bids"
            divText="새로운 즉시 판매가"
          />
          <MidAd imgName="midAd8" />
          <Item
            item={data?.upcoming}
            name="upcoming"
            divName="Upcoming Release"
            divText="발매 예정"
          />
          <MidAd imgName="midAd9" />
          <Item
            item={data?.scent}
            name="scent"
            divName="The Scent of Winter"
            divText="겨울을 함께 할 향수"
          />
          <MidAd imgName="midAd10" />
          <Item
            item={data?.giftideas}
            name="giftideas"
            divName="Affordable Gift Ideas"
            divText="부담 없으면서도 특별한"
          />
          <MidAd imgName="midAd11" />
          <Item
            item={data?.end}
            name="end"
            divName="Your End of Year Playlist"
            divText="음악과 함께 마무리하는 2022년"
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Body;
