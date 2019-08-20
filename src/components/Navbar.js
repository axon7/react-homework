import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sand_rock from "../assets/sand_rock.jpg";
import marilyn_avatar from "../assets/marilyn_avatar.png";
const StyledHeader = styled.header`
  width: 100%;
  height: 27vh;
`;

const NavBackground = styled.div`
  background-image: url(${sand_rock});
  background-position: 75% 70%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80%;
  width: 100%;
`;

const NavBar = styled.nav`
  width: 100%;
  height: 20%;
  background-color: #79d6bb;
  border-top: 1px solid white;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  z-index: 2;
  position: absolute;
  top: -40px;
  left: 40px;
  border-radius: 100px;
  border: 4px solid white;
`;

export default function Navbar() {
  return (
    <StyledHeader>
      <NavBackground />
      <NavBar>
        <Avatar src={marilyn_avatar} />

        <Link to='/profile'>
          <i
            class='fas fa-user'
            style={{
              color: "white",
              border: "1px solid white",
              borderRadius: "50%",
              padding: "10px",
              marginRight: "10px",
              height: "90%"
            }}
          />
        </Link>
        <Link to='/gallery'>
          <i
            class='far fa-image'
            style={{
              color: "white",
              border: "1px solid white",
              borderRadius: "50%",
              padding: "10px",
              height: "90%"
            }}
          />
        </Link>
      </NavBar>
    </StyledHeader>
  );
}
