import styled from "styled-components";

export const Card = styled.div`
  /* margin-top: 100px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  & h4 {
    /* margin-top: -20px; */
    color: aliceblue;
  }
`;
export const Item = styled.div`
  padding: 2.5rem;
  background: linear-gradient(315deg, #756213 10%, #000000 99%);
  margin: 30px;
  overflow: hidden;
  & p {
    color: black;
  }
  & a {
    text-decoration: none;
  }
  & img {
    width: 200px;
    background-size: auto;
  }
`;
