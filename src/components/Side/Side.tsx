import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Side.scss";

type Props = {
  modal: boolean;
  modalSet: (modal: boolean) => void;
};

function Side({ modal, modalSet }: Props) {
  const [none, setNone] = useState(true);

  if (!modal) {
    setTimeout(() => {
      setNone(true);
    }, 500);
  } else {
    setTimeout(() => {
      setNone(false);
    }, 0);
  }

  return (
    <div className={`${none ? "none" : ""} side`}>
      <div
        className={`${modal ? "slidein" : "slideout"} side-body ${
          none ? "none" : ""
        }`}
      >
        <span>
          <AiOutlineClose onClick={() => modalSet(!modal)} />
        </span>
        <div>STYLE</div>
        <div>SHOP</div>
        <div>자주 묻는 질문</div>
        <div>공지사항</div>
        <div>로그인</div>
        <h1>KREAM 앱 설치 후 사용해 보세요!</h1>
        <button>앱 다운로드</button>
      </div>
    </div>
  );
}

export default Side;
