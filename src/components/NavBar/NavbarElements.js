import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import styled from 'styled-components'


export const Nav = styled.nav`
  background: #fff6eb;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease
  }
`

export const NavbarContainer = styled.div `
display: flex;
justify-content: space-between;
height: 90px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1600px;
`

export const NavLink = styled(Link)`
  color: #87956d;
  
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 2.2rem;
  cursor: pointer;
  @media screen and (max-width: 907px) {
    font-size: 1.5rem;
  }
  &:hover {
    
    color: #08203d;
  }
  &.active {
    transition: all .5s ease .2s;
  transition: 0.5s;
  border-radius: 10px;
  box-shadow: 2px 1px 1px rgb(44, 44, 44);
    background: #87956d;
    color: #f1ede7;

  }
`
export const MobileIcon = styled(FaBars)`
  display: none;
  color: #87956d;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`

