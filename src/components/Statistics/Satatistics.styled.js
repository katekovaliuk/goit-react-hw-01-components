import styled from "styled-components";

export const StatContainer = styled.section`
width: 500px;
margin-top: 30px;
margin-left: auto;
margin-right: auto;

border-radius: 5px;

background-color: #ffffff;

box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
1px 4px 6px rgb(0 0 0 / 16%);

overflow: hidden;
`;

export const StatsTitle = styled.h2`
text-align: center;
font-size: 32px;
font-weight: bold;
`;

export const StatsList = styled.ul`
display: flex;
margin: 0;
padding: 0;
background-color: #b2baba;
`;

export const StatsListItem = styled.li`
display: flex;
align-items: center;
flex-direction: column;
border: 1px solid #a1a0a4;
width: 33%;
padding-top: 15px;
padding-bottom: 15px;
list-style: none;
`;

export const StatsLabel = styled.span`
    font-size: 18px;
    color: #fff;
    margin-bottom: 10px;
`
export const Percentage = styled.span`
 font-weight: bold;
 font-size: 20px;
 color: #fff;
`
