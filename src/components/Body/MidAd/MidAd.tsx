import "./MidAd.scss";
import usePc from "../../../hooks/usePc/usePc";

type Iprops = {
  imgName: string;
};

function Item({ imgName }: Iprops) {
  let isPc = false;

  if (usePc()) {
    isPc = true
  } else {
    isPc = false
  }
  
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
