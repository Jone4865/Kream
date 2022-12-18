import React from "react";
import "../../styles.scss";
import { useMediaQuery } from "react-responsive";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";

function Footer() {
  const isPc = useMediaQuery({
    query: "(min-width: 770px) and (max-width: 3000px)",
  });
  return (
    <div>
      <div className="FT" style={{ display: isPc ? "flex" : "" }}>
        <div className="ServiceGuide" style={{ width: isPc ? "50%" : "100%" }}>
          <div
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              marginLeft:"30px",
              marginBottom: isPc ? "13px" : "30px",
            }}
          >
            SERVICE GUIDE
          </div>
          <div style={{marginLeft:"30px",}} >
            <div>KREAM은 처음이지?</div>
            <div>서비스 소개를 확인해보세요.</div>
          </div>
          <div
            className="FooterTopButton"
            style={{ marginTop: isPc ? "13px" : "15px", marginLeft:"30px" }}
          >
            서비스 안내
          </div>
        </div>
        <div className="Download" style={{ width: isPc ? "50%" : "100%" }}>
          <div
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              marginBottom: isPc ? "13px" : "30px",
              marginLeft:"30px"
            }}
          >
            DOWNLOAD THE APP
          </div>
          <div style={{marginLeft:"30px"}}>
            <div>KREAM 앱을 설치하여</div>
            <div>한정판 스니커즈를 FLEX 하세요!</div>
          </div>
          <div
            className="FooterTopButton"
            style={{ marginTop: isPc ? "13px" : "15px", marginLeft:"30px" }}
          >
            앱 설치하기
          </div>
        </div>
      </div>
      <div
        className="FM"
        style={{ flexDirection: isPc !== true ? "column-reverse" : "row" }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ margin: "30px 15px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
              이용안내
            </div>
            <div className="Detail">검수기준</div>
            <div className="Detail">이용정책</div>
            <div className="Detail">페널티 정책</div>
            <div className="Detail">커뮤니티 가이드라인</div>
          </div>
          <div style={{ margin: "30px 40px 20px 90px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
              고객지원
            </div>
            <div className="Detail">공지사항</div>
            <div className="Detail">서비스 소개</div>
            <div className="Detail">쇼룸 안내</div>
            <div className="Detail">판매자 방문접수</div>
          </div>
        </div>
        <div style={{ padding: "30px 10px" }}>
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
            고객센터 1588-7813
          </div>
          <div
            style={{
              color: "rgba(128, 128, 128, 0.96)",
              fontSize: "13px",
              marginBottom: "3px",
            }}
          >
            운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)
          </div>
          <div style={{ color: "rgba(128, 128, 128, 0.96)", fontSize: "13px" }}>
            점심시간 평일 13:00 - 14:00
          </div>
          <div style={{ fontSize: "13px", margin: "10px 0 20px 0" }}>
            1:1 문의하기는 앱에서만 가능합니다.
          </div>
          <button className="FooterMidButton">자주 묻는 질문</button>
        </div>
      </div>
      {isPc ? (
        <div className="FB">
          <div className="FBLine1">
            <div className="FBLine1Body Hover">
              <div>회사소개</div>
              <div>인재채용</div>
              <div>제휴제안</div>
              <div>이용약관</div>
              <div style={{ fontWeight: "bold" }}>개인정보처리방침</div>
            </div>
            <div className="FIcon">
              <AiOutlineInstagram />
              <BsFacebook />
              <RiKakaoTalkFill />
            </div>
          </div>
          <div className="FBLine2 Hover">
            크림 주식회사 · 대표 김창욱 {"   "}사업자등록번호 : 570-88-01618{" "}
            <span>사업자정보확인</span>
            {"     "}통신판매업 : 제 2021-성남분당C-0093호
            {"    "}사업장소재지 : 경기도 성남시 분당구 분당내곡로 131
            판교테크원 타워1, 8층 {"    "}호스팅 서비스 : 네이버 클라우드 ㈜
          </div>
          <div style={{ margin: "40px 0 20px 0" }}>
            <div style={{ fontWeight: "bold", fontSize: "12px" }}>
              신한은행 채무지급보증 안내
            </div>
            <div className="FBLine2">
              당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증
              계약을 체결하여 안전거래를 보장하고 있습니다.{" "}
              <span>서비스가입 사실 확인</span>
            </div>
          </div>
          <div className="FBLine3">
            크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
            판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다.
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "50px",
            }}
          >
            <div className="FBLine3">
              단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에
              있습니다.
            </div>
            <div className="FBLine3">© KREAM Corp.</div>
          </div>
        </div>
      ) : (
        <div className="FB">
          <div className="FBLine1Body Hover">
            <div>회사소개</div>
            <div>인재채용</div>
            <div>이용약관</div>
            <div style={{ fontWeight: "bold" }}>개인정보처리방침</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="FIcon" style={{marginLeft: isPc ? "0" : "-10px"}}>
              <AiOutlineInstagram />
              <BsFacebook />
              <RiKakaoTalkFill />
            </div>
            <div style={{ fontSize: "13px", margin: "30px 20px 0 0" }}>
              <div>
                사업자정보 <FiChevronDown />
              </div>
            </div>
          </div>
          <div className="FBLine3">
            크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
            판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단,
            거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.
          </div>
          <div
            style={{
              margin: "auto",
              padding: "40px",
              fontSize: "13px",
              color: "rgba(128, 128, 128, 0.668)",
            }}
          >
            © KREAM Corp.
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
