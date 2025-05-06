
import styled, { keyframes } from "styled-components";

// Animação de fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  animation: ${fadeIn} 1.5s ease;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #fff;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    border-color: #fe7e5d;
    box-shadow: 0 0 5px rgba(254, 126, 93, 0.7);
  }
`;

export const InputLabel = styled.label`
  color: #fff;
  font-size: 12px;
  font-weight: 500;

  span {
    color: #ef4f45;
    font-weight: bold;
  }
`;







