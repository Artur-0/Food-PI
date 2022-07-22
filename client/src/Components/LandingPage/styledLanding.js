import styled from "styled-components";

export const Landing = styled.div`
  background-image: url("https://img.freepik.com/free-photo/bakery_23-2148011596.jpg?t=st=1658417416~exp=1658418016~hmac=2abc672d3275e7b6b3c3b72a32b695b943c4fc0cb744ea46404d98bf9b22cb1b&w=1060");
  height: 100vh;
  background-size: 220vh;
  /* background-position: center; */
  background-repeat: no-repeat;
  background-color: #fbb034;
  & a {
    text-decoration: none;
  }
  & h1 {
    margin-top: -1vh;
    font-size: 100px;
  }
  & h4 {
    background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 10%);
    border-radius: 20px;
    font-size: 50px;
    width: 400px;
    margin-left: 30vw;
    color: #ffffff;

    &:hover {
      background-color: #ffffff;
      background-image: linear-gradient(315deg, #ffffff 95%, #d7e1ec 4%);
      color: black;
    }
  }
  & nav {
    height: 50px;
    margin-right: 98vw;
  }
  & img {
    height: 50px;
  }
`;
