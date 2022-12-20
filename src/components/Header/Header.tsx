import React from "react";
import "./Header.scss";
import { useMediaQuery } from "react-responsive";
import { HiOutlineSearch } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";

function Header() {
  const isPc = useMediaQuery({
    query: "(min-width: 770px) and (max-width: 1920px)",
  });

  return (
    <div className="header">
      {isPc ? (
        <div className="headerTop">
          <div>고객센터</div>
          <div>관심상품</div>
          <div>마이페이지</div>
          <div style={{ marginRight: "35px" }}>로그인</div>
        </div>
      ) : (
        ""
      )}
      <div className="headerBottom">
        <img className="logo" src={"./img/Logo.png"} alt={"logoImg"} />
        {isPc ? (
          <div>
            <div>STYLE</div>
            <div>SHOP</div>
            <div>ABOUT</div>
            <HiOutlineSearch className="pcIcon" />
          </div>
        ) : (
          <div>
            <HiOutlineSearch className="nonPcIcon" />
            <BiMenu
              className="nonPcIcon"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
