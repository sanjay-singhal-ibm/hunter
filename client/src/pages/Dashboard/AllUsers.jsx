import styled from 'styled-components'
const AllUsers = () => {

  return (
    // using color,bcg as props in the styled-components
    <Wrapper color="#e9b949" bcg="#fcefc7">
      <h5 className="title">All Users we will show here...</h5>
    </Wrapper>
  );
};

export const Wrapper = styled.article`
  padding: 2rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  border-bottom: 5px solid ${(props) => props.color};
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color};
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    margin-top: 0.5rem;
  }
`

export default AllUsers;
