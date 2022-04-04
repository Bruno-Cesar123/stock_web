import styled from "styled-components";

export const Container = styled.div`
    margin-left: 235px;
    height: 100%;
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
`;

export const ButtonNewCard = styled.div`
    width: 300px;
    height: 280px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: #58C248;
        font-size: 64px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
