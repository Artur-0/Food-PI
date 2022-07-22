import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #d2a813;
  background-image: linear-gradient(315deg, #d2a813 0%, #000000 34%);
  height: 10vh;
  & img {
    margin-left: -92vw;
    height: 50px;
  }
`;

export const List = styled.ul`
  display: flex;
  margin-top: -10vh;
  margin-left: 75vw;
  & a {
    color: aliceblue;
    text-decoration: none;
  }
  & li {
    font-size: 20px;
    padding: 5px;
    list-style: none;
    margin-right: 40px;
  }
`;
