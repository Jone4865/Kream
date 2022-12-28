import "./Header.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";

type Props = {
  isPc:boolean,
}

function Header({isPc}:Props) {

  return (
    <div className="header">
      {isPc ? (
        <div className="header-top">
          <div>고객센터</div>
          <div>관심상품</div>
          <div>마이페이지</div>
          <div className="login-text">로그인</div>
        </div>
      ) : (
        ""
      )}
      <div className="header-bottom">
        <img className="logo" src={"./img/Logo.png"} alt="로고이미지" />
        {isPc ? (
          <div>
            <div>STYLE</div>
            <div>SHOP</div>
            <div>ABOUT</div>
            <HiOutlineSearch className="icon" />
          </div>
        ) : (
          <div>
            <HiOutlineSearch className="icon" />
            <BiMenu
              className="icon"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
