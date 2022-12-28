import "./Title.scss";

type Props = {
  title: string;
  subTitle: string;
};

function Title({ title, subTitle }: Props) {
  return (
    <div className="title">
      <div className="title-body">
        <div className="title-content">{title}</div>
        <div className="subtitle">{subTitle}</div>
      </div>
    </div>
  );
}

export default Title;
