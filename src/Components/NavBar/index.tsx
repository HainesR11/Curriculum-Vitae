import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useNavStore } from '../../store';

type TNavItem = {
    screen: string,
    id: string
}

const NavBarContainer = styled.div`
    width: 100vw;
    heihgt 15vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: fixed;
`;
const NavBarItem = styled(Link)<TNavItem>`
    margin: 20px 25px; 
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: ${(state) => state.screen === state.id && '3px solid white' };
    border-radius: 10px;
    text-decoration: none;
`;

const NavBar = () => {

    const { screen, setScreen } = useNavStore()
    console.log(screen)

    return( 
        <NavBarContainer>
            <NavBarItem to={'/'} id='home' onClick={() => setScreen("home")} screen={screen}>Home</NavBarItem>
            <NavBarItem to={'/MyWork'} id='myWork' onClick={() => setScreen("myWork")} screen={screen}>My Work</NavBarItem>
            <NavBarItem to={'/Contact'} id='contact' onClick={() => setScreen("contact")} screen={screen}>Contact</NavBarItem>
        </NavBarContainer>
    )
}

export default NavBar