import "./Menu.scss";

type IProps = {
  menu: any;
  name: string;
  isPc: boolean;
};

type IData = {
  id: number;
  imgName: string;
  divName: string;
};

function Menu({ menu, name, isPc }: IProps) {

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
