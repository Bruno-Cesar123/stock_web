import styled from "styled-components";

interface InputProps {
    invalid: boolean;
}

export const FormGroup = styled.div`
    margin-top: 24px;
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

export const Container = styled.input<InputProps>`
    margin-top: 16px;
    width: 400px;
    height: 50px;
    padding: 18px;
    border-radius: 16px;
    border: solid 1px ${p => p.invalid ? '#ff4040' : '#7652B2'};
    
    outline: none;

    &:focus {
        box-shadow: 0 0 5px ${p => p.invalid ? '#ff4040' : '#7652B2'};
    }
`;

export const ErrorMessage = styled.p`
    margin-top: 16px;
    color: #ff4040;
`;