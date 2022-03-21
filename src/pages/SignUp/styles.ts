import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    background: linear-gradient(248.71deg, #6E47AD 2.72%, rgba(110, 71, 173, 0) 51.59%);
`;

export const ContentForm = styled.section`
    margin: 100px auto;
    text-align: center;
`;

export const Form = styled.form`
    width: 100%;

    h2 {
        font-size: 42px;
        font-weight: bold;
        color: #7652B2;
    }
`;

export const ContentAction = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input[type="submit"] {
        margin-top: 16px;
        width: 400px;
        height: 50px;
        border-radius: 32px;
        cursor: pointer;
        background: #7652B2;
        border: none;
        
        font-size: 24px;
        color: #FFFFFF;
        transition: all 0.2ms;

        &:hover {
            filter: brightness(0.9);
        }
    }

    a {
        width: 400px;
        text-align: end;
        margin-top: 16px;
        color: #7652B2;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;