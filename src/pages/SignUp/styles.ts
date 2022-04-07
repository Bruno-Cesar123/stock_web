import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    background: linear-gradient(248.71deg, #6E47AD 2.72%, rgba(110, 71, 173, 0) 51.59%);
`;

export const ContentForm = styled.section`
    margin: 50px auto;
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