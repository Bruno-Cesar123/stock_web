import styled from "styled-components";

export const Container = styled.header`
    background: #6E47AD;
    width: 100%;
    height: 72px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 40px;

    h3 {
        color: #FFFFFF;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            margin-left: 8px;
        }
    }
`;