import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Create from "./Components/Create";
import Food from "./Components/Food";
import Home from "./Components/Home/index.jsx";
import LandingPage from "./Components/LandingPage";

const GlobalStyle = createGlobalStyle`
body{
background-image: linear-gradient(315deg, #756213 90%, #000000 99% ) ;
/* background-repeat: no-repeat; */
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/food" component={Home} />
      <Route exact path="/food/:id" component={Food} />
      <Route exact path="/food/post/newFood" component={Create} />
    </div>
  );
}

export default App;
