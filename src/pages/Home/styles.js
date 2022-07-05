import styled from 'styled-components';
import global from '../../assets/global.css'

export const Container = styled.div`
    display: flex;
    cursor: pointer;
    background-color: #111;
`;

export const Header = styled.div`
    background-color: #000;
    border-radius: 5px;
    height: 980px;
    text-align: center;
    box-shadow: 10px 5px 5px black;
    font-family: Nunito, sans-serif;
`;

export const Logo = styled.img`
    padding: 15;
    padding-top: 10px;
    width: 160px;
    margin: 100px;
`;

export const Body = styled.div`
    display: block;
    width: auto;
    position: absolute;
    top: 16px;
    left: 420px;
    height: auto;
    padding-top: 150px;
    max-width: auto;
    margin-bottom: auto;
`;