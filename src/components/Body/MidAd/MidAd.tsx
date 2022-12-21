import "./MidAd.scss";
import { useMediaQuery } from "react-responsive"; // pc여부 확인 모듈s

type Iprops = {
  imgName: string;
};

function Item({ imgName }: Iprops) {
  const isPc = useMediaQuery({
    query: "(min-width: 770px) and (max-width: 1920px)",
  });

  return (
    <div className="imgSize">
        <img
          className={isPc ? "pcImg" : "nonPcImg"}
          alt="MidAdImg"
          src={`./img/midAd/${imgName}.jpg`}
        />
    </div>
  );
}

export default Item;
