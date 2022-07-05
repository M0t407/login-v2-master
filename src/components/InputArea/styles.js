import styled from 'styled-components';


export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid  #0cda16;
    border-radius: 5px;
    background: -webkit-linear-gradient (to left, #0cda16, #f00b0b);
        
    background: -o-linear-gradient (to left, #0cda16, #f00b0b);
        
    background: -moz-linear-gradient (to left, #0cda16, #f00b0b);
        
    background: linear-gradient(to left, #0cda16, #f00b0b);
    color: black;
    cursor: pointer;

    &:hover {
        background-color: blue;
        color:  #adadad;
        background: -webkit-linear-gradient (to left, #0cda16, #f00b0b);
        background: -o-linear-gradient (to left, #0cda16, #f00b0b);
        background: -moz-linear-gradient (to left, #0cda16, #f00b0b);
        background: linear-gradient(to left, #0cda16, #f00b0b);
    }
`;
