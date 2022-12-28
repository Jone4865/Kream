import "./Side.scss";

import { AiOutlineClose } from "react-icons/ai";

type Props = {
  modal: boolean;
  modalSet: (modal:boolean) => void;
}

function Side({modal, modalSet}:Props) {

  return (
    <div className="side">
        <div className="side-body">
          <span><AiOutlineClose onClick={()=> modalSet(!modal)} /></span>
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
