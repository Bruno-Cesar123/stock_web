import styled from "styled-components";

export const Container = styled.div`
    margin-left: 235px;
    height: 100%;
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
`;

export const Card = styled.section`
    width: 300px;
    height: 280px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
`;

export const CardHeader = styled.div`
    text-align: center;
    padding: 16px;
    height: 72px;
    background: #F2F2F2;

    h1 {
        font-size: 40px;
    }
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    
    p {

        margin-top: 32px;
        
        & + p {
            margin-top: 16px;
        }
    }
`;