import "./Header.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";
import usePc from "../../hooks/usePc/usePc";

function Header() {
  let isPc = false;

  if (usePc()) {
    isPc = true
  } else {
    isPc = false
  }

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
        <img className="logo" src={"./img/Logo.png"} alt="logoImg" />
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
