import React from "react";
import { Link } from "react-router-dom";
import { List, Nav } from "./styledNav";
import Logo from "../../assets/cooking.png";
import { useDispatch } from "react-redux";
import { clearForHome, getAllRecipes } from "../../Redux/Actions/action";

function NavBar() {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(clearForHome());
    dispatch(getAllRecipes());
  };
  return (
    <Nav>
      <Link to="/food">
        <img src={Logo} alt="logo" onClick={handleOnClick} />
      </Link>
      <List>
        <Link to="/food">
          <li
            onClick={() =>
              dispatch(clearForHome()) && dispatch(getAllRecipes())
            }
          >
            Home
          </li>
        </Link>
        <Link to="/food/post/newFood">
          <li>Create</li>
        </Link>
      </List>
    </Nav>
  );
}

export default NavBar;
