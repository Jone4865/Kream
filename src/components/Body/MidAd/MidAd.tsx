import "./MidAd.scss";
import usePc from "../../../hooks/usePc/usePc";

type Iprops = {
  imgName: string;
  isPc: boolean;
};

function Item({ imgName, isPc }: Iprops) {
  
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
