import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 35px 0;

    }
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

`;

export const LinkBack = styled(Link)`
     color: ${({theme}) => theme.COLORS.PINK};
`;

export const Name = styled.div`
    display: flex;
    align-items: center;
    margin: 24px 0;
    > h2 {
        font-size: 36px;
        color: ${({ theme }) => theme.COLORS.BEIGE};
        margin-right: 15px;
    }
    
    > div {
        display: flex;
        width: 140px;
        justify-content: space-around;
        svg {
            color: ${({ theme }) => theme.COLORS.PINK}; 
            font-size: 20px;
        }
    }
`;

export const PublicationDetails = styled.div`
    display: flex;

    > div:nth-child(1) {
        display: flex;
        align-items: center;
        margin-right: 15px;

        img {
            width: 16px;
            height:16px;
            border-radius: 50%;
            margin-right: 10px;
        }

        span {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.BEIGE};
        }
    }

    > div:nth-child(2) {
        display: flex;
        align-items: center;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK}; 
            font-size: 16px;
            margin-right: 5px;
        }

        span {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.BEIGE};
        }
    }
`;

export const Tags = styled.div`
    margin: 40px 0;
`;

export const Text = styled.div`
     text-align: justify;
    > p {
        margin-bottom: 20px;
    }
`;