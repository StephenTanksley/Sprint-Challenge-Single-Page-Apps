import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
`

export const Card = styled.div`

    font-size: 62.5%;
    font-size: 1.3rem;
    line-height: 2rem;
    color: black;
    display: flex;
    flex-direction: column;
    width: auto;
    justify-content: space-between;
    align-items: center;
    
    border: .2rem solid white
    margin: 1rem;
    border: .3rem solid gray;
    border-radius: 1rem;
    padding: 1.5rem;
    background-color: white;

    :hover{
        box-shadow: .9rem .9rem .9rem #888888;
    }

`;


export const NavContainer = styled.div`

    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

`

export const NavItem = styled(NavLink)`
    display: flex;
    font-size: 1.4rem;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 2rem;
    width: 10rem;
    height: 4rem;
    border: .3rem solid gray;
    border-radius: .5rem;
    background-color: #52a934
    color: white;
    :hover {
        transform: scale(1.1);
        box-shadow: .9rem .9rem .9rem #888888;
    }
`
