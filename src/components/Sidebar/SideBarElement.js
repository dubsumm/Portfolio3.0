import {NavLink as Link} from 'react-router-dom'
import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'


export const SideBarContainer = styled.aside `
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #fff6eb;
display: grid;
align-items: center;
bottom: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
// top: 0;
`

export const CloseIcon = styled(FaTimes)`

margin: 10px;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 3rem;
cursor: pointer;
outline: none;
`
export const SideBarWrapper = styled.div`
color: #212529;
background: #fff6eb;
`
export const SideBarMenu = styled.ul`
display: grid;
background: #fff6eb;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}
`

export const SideBarLink = styled(Link)`
display: flex;
background: #fff6eb;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #87956d;
cursor: pointer;

&:hover {
    color: #87956d;
    transition: 0.2 ease-in-out;
}
`
