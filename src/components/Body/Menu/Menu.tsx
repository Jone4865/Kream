import "./Menu.scss";

type Props = {
  menu: Data[];
  name: string;
  isPc: boolean;
};

type Data = {
  id: number;
  imgName: string;
  title: string;
};

function Menu({ menu, name, isPc }: Props) {
  return (
    <div className="menu">
      <div className="menu-body">
        {menu?.map(({ id, imgName, title }: Data) => {
          return (
            <div key={id} className="menu-element">
              <img
                src={
                  isPc
                    ? `./img/${name}/${name}Pc/${imgName}.png`
                    : `./img/${name}/${name}NonPc/${imgName}.jpg`
                }
                alt="메뉴이미지"
              />
              <div>{title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
