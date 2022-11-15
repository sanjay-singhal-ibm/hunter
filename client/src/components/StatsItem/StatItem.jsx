import Wrapper from "./StatItem.styles";

const StatsItem = ({ count, title, icon, color, bcg }) => {
  return (
    // using color,bcg as props in the styled-components
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};

export default StatsItem;
