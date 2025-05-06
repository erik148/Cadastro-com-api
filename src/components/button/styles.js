import styled from "styled-components";

export const Button = styled.button`
  border: ${(props)=> props.theme === 'primary'? 'none': '1px solid #fff'};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
 

  &:hover {
    background:${(props)=> props.theme === 'primary'? '' : ' linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)'} ;
    opacity: 0.8;
    transform: translateY(-2px);
  }

  &:active {
    opacity: 0.5;
    transform: translateY(0);
  }
`;
