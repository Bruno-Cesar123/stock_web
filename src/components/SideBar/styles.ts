import styled from "styled-components";

export const Menu = styled.aside`
    width: 235px;
    height: 100vh;
    background: #6E47AD;

    h2 {
        font-size: 32px;
        color: #FFFFFF;
        text-align: center;
        padding: 16px;
    }

`;

export const Ul = styled.ul`
    text-align: center;
    margin-top: 32px;
`;

export const Li = styled.li`
    height: 48px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.7s;

    &:hover {
        background: #f2f2f2;

        a {
            color: #6E47AD;
        }        
    }

    a {
        width: 234px;
        color: #FFFFFF;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            margin-left: 6px;
        }
    }
`;