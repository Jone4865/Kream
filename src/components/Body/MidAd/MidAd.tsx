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
    <div className="img-size">
      <img
        className="ad-img"
        alt="중간광고이미지"
        src={`./img/midAd/${imgName}`}
      />
    </div>
  );
}

export default Item;
