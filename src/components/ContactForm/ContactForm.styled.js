import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 400px;
`

export const LabelName = styled.label`
display: flex;
justify-content: left;
/* gap: 20px; */
margin-bottom: 4px;
margin-bottom: 5px;
color: white;
`

export const Input = styled.input`
width: 100%;
outline: none;
height: 30px;
border-radius: 4px;
border: none;
padding: 0;
margin-bottom: 20px;
`

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 7px 25px;
border-radius: 5px;
border: none;
font-size: 20px;
font-weight: 600;
background-color: darkcyan;
color: white;
margin-bottom: 50px;


&:hover{
    background-color: lightsalmon;
    color: white;
    cursor: pointer;
}
`

