import "./Menu.scss";

import usePc from "../../../hooks/usePc/usePc";

type IProps = {
  menu: any;
  name: string;
};

type IData = {
  id: number;
  imgName: string;
  divName: string;
};

function Menu({ menu, name }: IProps) {

  let isPc = false;

  if (usePc()) {
    isPc = true
  } else {
    isPc = false
  }

  return (
    <div className={isPc ? "pcMenu" : "nonPcMenu"}>
      {menu?.map(({ id, imgName, divName }: IData) => {
        return (
          <div key={id} className={isPc ? "pcMenuBody" : "nonPcMenuBody"}>
            <img
              src={
                isPc
                  ? `./img/${name}/${name}Pc/${imgName}.png`
                  : `./img/${name}/${name}NonPc/${imgName}.jpg`
              }
              alt="menuImage"
            />
            <div>{divName}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
