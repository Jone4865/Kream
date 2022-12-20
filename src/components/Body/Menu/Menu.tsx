import React, { useState } from "react";
import { useMediaQuery } from "react-responsive"; // pc여부 확인 모듈
import "./Menu.scss";
import { useQuery, gql } from "@apollo/client"; // 서버단

type IProps = {
  menu: string;
};

type IData = {
  id: number;
  imgName: string;
  divName: string;
};

function Menu(menu: IProps) {
  const isPc = useMediaQuery({
    query: "(min-width: 770px) and (max-width: 1920px)",
  });

  const menu1 = gql`
    query getData {
      menu1 {
        id
        imgName
        divName
      }
    }
  `;

  const menu2 = gql`
    query getData {
      menu2 {
        id
        imgName
        divName
      }
    }
  `;
  const [Number] = useState(menu?.menu);
  const { loading, error, data } = useQuery(
    menu?.menu === "menu1" ? menu1 : menu2
  );

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error :(</p>;

  return (
    <div className={isPc ? "PcMenu" : "NonPcMenu"}>
      {data?.[Number]?.map(({ id, imgName, divName }: IData) => {
        return (
          <div key={id} className={isPc ? "PcMenuBody" : "NonPcMenuBody"}>
            <img
              src={
                isPc
                  ? `./img/${Number}/${Number}Pc/${imgName}.png`
                  : `./img/${Number}/${Number}NonPc/${imgName}.jpg`
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
