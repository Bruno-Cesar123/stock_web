import styled from "styled-components";


export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    background: linear-gradient(105.26deg, #6E47AD 0.11%, rgba(110, 71, 173, 0) 56.02%);
`;

export const Main = styled.main`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    align-items: center;
`;

export const ContentTitle = styled.section`
    h1 {
        text-align: center;
        font-size: 72px;
        font-weight: 700;
    }
`;

export const ContentForm = styled.section`
    margin-top: calc(100vh, -220px);
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