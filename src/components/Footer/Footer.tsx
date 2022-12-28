import React, { useState } from "react";
import "./Footer.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import FooterBackImg from "./FooterBackImg/FooterBackImg";

type Props = {
  isPc: boolean;
};

function Footer({ isPc }: Props) {
  const [more, setMore] = useState(false);
  return (
    <div>
      <div className="footer-top">
      <FooterBackImg
        title="SERVICE GUIDE"
        subTitle1="KREAM은 처음이지?"
        subTitle2="서비스 소개를 확인해보세요."
        btnText="서비스 안내"
        imgName="footerLeft.png"
      />
      <FooterBackImg
        title="DOWNLOAD THE APP"
        subTitle1="KREAM앱을 설치하여"
        subTitle2="한정판 스니커즈를 FLEX 하세요!"
        btnText="앱 설치하기"
        imgName="footerRight.png"
      />
      </div>
      <div className="footer-mid">
        <div className="footer-mid-body1">
          <div className="footer-mid-body1-items">
            <div className="footer-mid-body1-item">이용안내</div>
            <div className="detail">검수기준</div>
            <div className="detail">이용정책</div>
            <div className="detail">페널티 정책</div>
            <div className="detail">커뮤니티 가이드라인</div>
          </div>
          <div className="footer-mid-body1-items2">
            <div className="footer-mid-body1-item">고객지원</div>
            <div className="detail">공지사항</div>
            <div className="detail">서비스 소개</div>
            <div className="detail">쇼룸 안내</div>
            <div className="detail">판매자 방문접수</div>
          </div>
        </div>
        <div className="footer-mid-body2">
          <div className="footer-mid-body2-item1">고객센터 1588-7813</div>
          <div className="footer-mid-body2-item2">
            운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)
          </div>
          <div className="footer-mid-body2-item3">
            점심시간 평일 13:00 - 14:00
          </div>
          <div className="footer-mid-body2-item4">
            1:1 문의하기는 앱에서만 가능합니다.
          </div>
          <button className="footer-mid-button">자주 묻는 질문</button>
        </div>
      </div>
      {isPc ? (
        <div className="footer-bottom">
          <div className="footer-bottom-line1">
            <div className="footer-bottom-line1-body hover">
              <div>회사소개</div>
              <div>인재채용</div>
              <div>제휴제안</div>
              <div>이용약관</div>
              <div className="bold">개인정보처리방침</div>
            </div>
            <div className="footer-icon">
              <AiOutlineInstagram />
              <BsFacebook />
              <RiKakaoTalkFill />
            </div>
          </div>
          <div className="footer-bottom-line2 hover">
            크림 주식회사 · 대표 김창욱 {"   "}사업자등록번호 : 570-88-01618{" "}
            <span>사업자정보확인</span>
            {"     "}통신판매업 : 제 2021-성남분당C-0093호
            {"    "}사업장소재지 : 경기도 성남시 분당구 분당내곡로 131
            판교테크원 타워1, 8층 {"    "}호스팅 서비스 : 네이버 클라우드 ㈜
          </div>
          <div className="footer-bottom-line2-body">
            <div className="shinhan">신한은행 채무지급보증 안내</div>
            <div className="footer-bottom-line2 hover">
              당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증
              계약을 체결하여 안전거래를 보장하고 있습니다.{" "}
              <span>서비스가입 사실 확인</span>
            </div>
          </div>
          <div className="footer-bottom-line3">
            크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
            판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다.
          </div>
          <div className="footer-bottom-line3-body">
            <div className="footer-bottom-line3">
              단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에
              있습니다.
            </div>
            <div className="footer-bottom-line3">© KREAM Corp.</div>
          </div>
        </div>
      ) : (
        <div className="footer-bottom">
          <div className="footer-bottom-line1-body hover">
            <div>회사소개</div>
            <div>인재채용</div>
            <div>이용약관</div>
            <div className="bold">개인정보처리방침</div>
          </div>
          <div className="footer-bottom-line1-body2">
            <div className="footer-icon">
              <AiOutlineInstagram className="sns-icon" />
              <BsFacebook className="sns-icon" />
              <RiKakaoTalkFill className="sns-icon" />
            </div>
            <div className="footer-bottom-line1-body2-item">
              <div>
                <span>사업자정보 </span>
                {!more ? (
                  <FiChevronDown onClick={() => setMore(true)} />
                ) : (
                  <FiChevronUp onClick={() => setMore(false)} />
                )}
              </div>
            </div>
          </div>
          {more ? (
            <div className="more">
              <div>크림 주식회사 · 대표 김창욱</div>
              <div>
                사업자등록번호 : 570-88-01618 <span>사업자정보확인</span>
              </div>
              <div>통신판매업 : 제 2021-성남분당C-0093호</div>
              <div>
                사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원
                타워1, 8층
              </div>
              <div>호스팅 서비스 : 네이버 클라우드 ㈜</div>
            </div>
          ) : (
            ""
          )}
          <div className="footer-bottom-line3">
            크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
            판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단,
            거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.
          </div>
          <div className="company">© KREAM Corp.</div>
        </div>
      )}
    </div>
  );
}

export default Footer;
