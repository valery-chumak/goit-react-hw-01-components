import styled from '@emotion/styled';
import { randomColor } from './randomColor';
export const Title = styled.h2`

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    color: black;
    margin:10px 0;

    `
export const Section = styled.section`

    display: flex;
    flex-direction:column;
    width: 400px;
    height: 200px;
    margin: 30px auto;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    background-color: rgb(251, 251, 251);
`
export const List = styled.ul`
    display: flex;
    margin-top:auto;
`
export const Item = styled.li`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color: ${randomColor};
    width:80px;
    height:100px; 
`
export const Label = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: white;
`
export const Percentage = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: white;
`