import styled from 'styled-components';

export const ContactListWrapper = styled.ul`
display: flex;
flex-direction: column;
padding: 0;
list-style: none;
width: 400px;
gap: 10px;

`

export const ContactItem = styled.li`
display: flex;
gap: 25px;
/* flex-direction: column; */
justify-content: flex-start;
align-items: center;
justify-content: space-between;
color: white;
font-size: 20px;
font-weight: 500;
`

export const ButtonDelete = styled.button`
display: flex;
justify-content: center;
width: 60px;
padding: 4px;
color: orangered;
background-color: white;
border: none;
border-radius: 5px;
cursor: pointer;

&:hover,
&:focus {
    background-color: lightsalmon;
    /* & svg{
        color: white;
    } */
}
`

