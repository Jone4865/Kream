import "./FooterImg.scss";

type ImgProps = {
  title: string;
  subTitle1: string;
  subTitle2: string;
  btnText: string;
  imgName: string;
};

function FooterImg({
  title,
  subTitle1,
  subTitle2,
  btnText,
  imgName,
}: ImgProps) {
  return (
    <div
      className="footer-img"
      style={{
        backgroundImage: `url("./img/footer/${imgName}")`,
        backgroundColor:
          title === "SERVICE GUIDE"
            ? "rgba(60, 58, 58, 0.855)"
            : "rgba(60, 58, 58, 0.957)",
      }}
    >
      <div className="footer-title">{title}</div>
      <div>
        <div>{subTitle1}</div>
        <div>{subTitle2}</div>
      </div>
      <div className="footer-top-button">{btnText}</div>
    </div>
  );
}

export default FooterImg;
