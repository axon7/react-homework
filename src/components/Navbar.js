import React from "react";
import { NavLink } from "react-router-dom";
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
  height: 52px;
  background-color: #79d6bb;
  border-top: 1px solid white;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
`;

const Avatar = styled.img`
  width: 110px;
  height: 110px;
  z-index: 2;
  position: absolute;
  top: -40px;
  left: 40px;
  border-radius: 100px;
  border: 5px solid rgba(255, 255, 255, 0.5);
`;

const StyledNavLink = styled(NavLink)`
  &:first-of-type {
    margin-right: 15px;
  }
  &.active {
    border: 1px solid white;
    border-radius: 50%;
  }
`;

const StyledIcon = styled.i`
  color: white;
  padding: 9px;
  height: 90%;
`;

export default function Navbar() {
  return (
    <StyledHeader>
      <NavBackground />
      <NavBar>
        <Avatar src={marilyn_avatar} alt='Marilyn Portrait' />
        <StyledNavLink to='/profile'>
          <StyledIcon className='fas fa-user' />
        </StyledNavLink>
        <StyledNavLink to='/gallery'>
          <StyledIcon className='far fa-image fa-lg' />
        </StyledNavLink>
      </NavBar>
    </StyledHeader>
  );
}
