import styled from "styled-components";

export const Card = styled.div`
width: 320px;

margin-left: auto;
margin-right: auto;

border-radius: 10px;

background-color: #ffffff;

box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
1px 4px 6px rgb(0 0 0 / 16%);

overflow: hidden;
`;

export const ImageBox = styled.div`
padding-top: 20px;
padding-bottom: 20px;
`;

export const Avatar = styled.img`
display: block;
width: 60%;
border-radius: 50%;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
`;

export const UserName = styled.p`
text-align: center;
font-size: 32px;
font-weight: bold;
margin-bottom: 10px;
`;

export const UserTag = styled.p`
margin-bottom: 0;
margin-top: 0;
  
text-align: center;
font-size: 24px;
color: #757575;
`;

export const UserLocation = styled.p`
margin-top: 5px;
margin-bottom: 0;
  
text-align: center;
font-size: 20px;
color: #757575;
`;

export const Stats = styled.ul`
display: flex;
margin: 0;
padding: 0;
// border: 1px solid #fff;
background-color: #b2baba;
`;

export const StatsItem = styled.li`
display: flex;
align-items: center;
flex-direction: column;
border: 1px solid #a1a0a4;
width: 33%;
padding-top: 15px;
padding-bottom: 15px;
list-style: none;
`;

export const Label = styled.span`
    font-size: 18px;
    color: #544f4f;
    margin-bottom: 10px;
`
export const Quantity = styled.span`
 font-weight: bold;
`