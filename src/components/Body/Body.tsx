import React, { useState } from "react";
import { useMediaQuery } from "react-responsive"; // pc여부 확인 모듈

import { useQuery, gql } from "@apollo/client"; // 서버단

import { GrLinkTop } from "react-icons/gr"; // 탑으로 가는 아이콘

import "./Body.scss";
import PcBanner from "../Banner/PcBanner/PcBanner";
import NonPcBanner from "../Banner/NonPcBanner/NonPcBanner";

import Menu from "./Menu/Menu"; // 컴포넌트들
import Item from "./Item/Item";

// TODO: 코드가독성이 안좋음 컴포넌트를 세분화 해야한다.
// TODO: ul li태그를 좀 더 쓰면 좋을 듯
// TODO: 디자인 디테일을 더 봐야한다.
// TODO: 그리드 공부**

function Body() {
  const isPc = useMediaQuery({
    query: "(min-width: 770px) and (max-width: 1920px)",
  });

  const GetDataTop = gql`
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
      mostsharde {
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
    }
  `;

  // const GetDataBottom = gql`
  //   query getData {

  //   }
  // `;

  const { loading, error, data } = useQuery(GetDataTop);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error :(</p>;

  return (
    <div className="Body">
      <div style={{ height: "100px" }} />
      <div className="Navigater" onClick={() => window.scrollTo(0, 0)}>
        <GrLinkTop style={{ fontSize: "17px", marginTop: "16px" }} />
      </div>
      {isPc ? <PcBanner /> : <NonPcBanner />}
      <Menu menu={data?.menu1} name="menu1" />
      <Item
        item={data?.justdrop}
        name="justdrop"
        divName="Just Dropped"
        divText="발매 상품"
      />
      <div className="divTitle">
        <div className="divName">Brand Focus</div>
        <div className="divText">추천 브랜드</div>
      </div>
      <Menu menu={data?.menu2} name="menu2" />
      {!isPc ? <div className="line" /> : ""}
      <img className="midAD" src="./img/MidAd/MidAD1.jpg" />
      <Item
        item={data?.mostpopular}
        name="mostpopular"
        divName="Most Popular"
        divText="인기 상품"
      />
      <img className="midAD" src="./img/MidAd/MidAD2.jpg" />
      <Item
        item={data?.newin}
        name="newin"
        divName="New In"
        divText="신규 등록 상품"
      />
      <img className="midAD" src="./img/MidAd/MidAD3.jpg" />
      <Item
        item={data?.buildawinter}
        name="buildawinter"
        divName="Build a Winter Wardrobe"
        divText="겨울철 꼭 필요한 매칭"
      />
      <img className="midAD" src="./img/MidAd/MidAD4.jpg" />
      <Item
        item={data?.mostsharde}
        name="mostsharde"
        divName="Most Shared Outer"
        divText="가장 많이 공유된 아우터"
      />
      <img className="midAD" src="./img/MidAd/MidAD5.jpg" />
      <Item
        item={data?.museum}
        name="museum"
        divName="The Museum Visitor"
        divText="더뮤지엄비지터 시즌 오프!"
      />
      <img className="midAD" src="./img/MidAd/MidAD6.jpg" />
      <Item
        item={data?.suedeshoes}
        name="suedeshoes"
        divName="Suede Shoes Collection"
        divText="FW 시즌의 대표 소재!"
      />
      <img className="midAD" src="./img/MidAd/MidAD7.jpg" />
      <Item
        item={data?.lowest}
        name="lowest"
        divName="New Lowest Asks"
        divText="새로운 즉시 구매가"
      />
      <Item
        item={data?.highest}
        name="highest"
        divName="New Highest Bids"
        divText="새로운 즉시 판매가"
      />
      <img className="midAD" src="./img/MidAd/MidAD8.jpg" />
      <Item
        item={data?.upcoming}
        name="upcoming"
        divName="Upcoming Release"
        divText="발매 예정"
      />
      <img className="midAD" src="./img/MidAd/MidAD9.jpg" />
      <Item
        item={data?.scent}
        name="scent"
        divName="The Scent of Winter"
        divText="겨울을 함께 할 향수"
      />
      <img className="midAD" src="./img/MidAd/MidAD10.jpg" />
      <Item
        item={data?.giftideas}
        name="giftideas"
        divName="Affordable Gift Ideas"
        divText="부담 없으면서도 특별한"
      />
      <img className="midAD" src="./img/MidAd/MidAD11.jpg" />
      <Item
        item={data?.end}
        name="end"
        divName="Your End of Year Playlist"
        divText="음악과 함께 마무리하는 2022년"
      />
    </div>
  );
}

export default Body;
