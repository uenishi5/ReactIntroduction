import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <Container>
        <Title>- StyledComponents -</Title>
        <Button className="button">FIGHT!!</Button>
      </Container>
    </>
  );
};

//styled.HTMLタグ名　``内に適用するHTML名を記載する
//SaaSと同じ記法が適用できる
const Container = styled.div`
  border: 2px solid #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0px;
  color: #3d84a8;
`;

const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: red;
    color: #fff;
    cursor: pointer;
  }
`;
