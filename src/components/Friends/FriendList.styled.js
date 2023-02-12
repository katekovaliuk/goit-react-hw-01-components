import styled from "styled-components";

export const FriendBox = styled.ul`
margin-top: 30px;
`;

export const FriendCard = styled.li`
width: 350px;

margin-left: auto;
margin-right: auto;
margin-bottom: 10px;

border-radius: 5px;

background-color: #ffffff;

box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
1px 4px 6px rgb(0 0 0 / 16%);

overflow: hidden;
`;

export const FriendItem = styled.div`
display: flex;
// background-color: #b2baba;
`;

export const FriendAvatar = styled.img`
display: block;
width: 60px;
border-radius: 10px;
margin-top: 20px;
margin-bottom: 20px;
margin-left: 20px;
// margin-right: auto;
`;

export const FriendName = styled.p`
text-align: center;
font-size: 32px;
// font-weight: bold;
margin-bottom: 10px;
margin-left: 20px;
`;


export const FriendStatus = styled.span`
margin-top: auto;
margin-right: 10px;
margin-bottom: auto;
margin-left: 30px;
width: 15px;
height: 15px;
border-radius: 50%;
background-color: ${ props => {
    if (props.isOnline === true) {
        return 'green'; 
    } return 'red';
    }};
`

