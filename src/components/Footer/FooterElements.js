import {NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'


export const Foot = styled.nav`
  background: #fff6eb;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: bottom;
  bottom: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease
    height: 180px;
  }
`

export const FooterContainer = styled.div `
display: flex;
justify-content: space-between;
height: 90px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1600px;
`

export const FootLink = styled.a`
  color: #ff3564;
  display: inline-flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 2.2rem;
  cursor: pointer;
  @media screen and (max-width: 907px) {
    height:50%
  }
  &:hover {
    
    color: #08203d;
  }
  &.active {
    transition: all .5s ease .2s;
  transition: 0.5s;
    // border: 5px solid #ff8b5b;
    background: #ff3564;
    color: #f1ede7;

  }
`
export const NavLink = styled(Link)`
  color: black;
  display: inline-flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 2.2rem;
  cursor: pointer;
  @media screen and (max-width: 907px) {
    font-size: 1.5rem;
  }
`

export const FootIcon = styled.img `

display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
`