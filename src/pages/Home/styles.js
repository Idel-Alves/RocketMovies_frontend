import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px 128px auto;
    grid-template-areas:
    "header"
    "head"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        margin: 0 auto;
        width: 1165px;
        
    }
`;

export const Content = styled.div`
    max-width: 1165px;
    margin: 0 auto;
`;

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1165px;
    margin: 0 auto;

    > h2 {
        font-size: 32px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;

export const NewFilm = styled(Link)`
    padding: 10px 16px;
    outline: none;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    > p {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
`;


