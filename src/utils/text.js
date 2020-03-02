import styled from "styled-components";

export const Background = styled.div`
  background: repeating-linear-gradient(
    90deg,
    #393e58,
    #393e58 3px,
    #3b435c 3px,
    #3b435c 6px
  );
  min-height: 100vh;
  min-width: 100vh;
`;

export const Title = styled.h1`
  border: 4px solid #d0eaf7;
  position: relative;
  text-align: center;
  padding: 1%;
  &:before {
    content: " ";
    position: absolute;
    padding: 1%;
    z-index: 2;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 5px solid #d0eaf7;
  }
`;

export const Main = styled.div`
  height: 25%;
  width: 100%;
  padding: 2% 0;
`;

export const Wrapper = styled.div`
  display: inline-block;
  padding: 0 20px;
`;

export const Task = styled.div`
  position: relative;
  display: block;
  cursor: pointer;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 1px;
    top: 50%;
    margin-top: -0.5px;
    background: #fff;
  }
  &:before {
    left: -2.5px;
  }
  &:after {
    right: 2.5px;
    background: #fff;
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  &:hover:before {
    background: #fff;
    width: 100%;
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  &:hover:after {
    background: transparent;
    width: 100%;
    transition: 0s;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  outline: none;
  padding-left: 5%;
  border: 4px solid #d0eaf7;
  margin: 2%;
  background: black;
`;

export const Button = styled.button`
  outline: none;
  border: 4px solid #d0eaf7;
  margin: 2%;
  padding: 10px;
  background: black;
  cursor: pointer;
`;
