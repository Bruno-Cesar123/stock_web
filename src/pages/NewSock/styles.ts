import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const Form = styled.form`
    margin: 32px auto;

    h2 {
        text-align: center;
        font-size: 42px;
        font-weight: bold;
        color: #7652B2;
    }
`;

export const FormGroup = styled.div`
    margin-top: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    label {
        width: 400px;
        text-align: left;
    } 
`;

export const Select = styled.select`
    margin-top: 10px;
    width: 400px;
    height: 50px;
    padding: 0 12px;
    border-radius: 16px;
    cursor: pointer;
    border: solid 1px #7652B2;
    
    outline: none;

    &:focus {
        box-shadow: 0 0 5px #7652B2;
    }
`;