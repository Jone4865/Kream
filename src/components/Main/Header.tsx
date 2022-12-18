import React from "react";
import "../../styles.scss";
import { useMediaQuery } from "react-responsive";
import { HiOutlineSearch } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";

import Logo from "../../img/Logo.jpg"

function Header() {
  const isPc = useMediaQuery({
    query: "(min-width: 770px) and (max-width: 3000px)",
  });

  return (
    <div className="Header">
      {isPc ? (
        <>
          <div className="HT">
            <div>고객센터</div>
            <div>관심상품</div>
            <div>마이페이지</div>
            <div style={{marginRight:"35px"}}>로그인</div>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="HB">
        <img className="Logo" src={"./img/Logo.png"} />
        {isPc ? (
          <div>
            <div>STYLE</div>
            <div>SHOP</div>
            <div>ABOUT</div>
            <div style={{ margin: "5px 15px" }}>
              <HiOutlineSearch className="MobileIcon" />
            </div>
          </div>
        ) : (
          <div>
            <HiOutlineSearch className="MobileIcon"/>
            <BiMenu className="MobileIcon" style={{ color:"gray", marginLeft:"20px" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
