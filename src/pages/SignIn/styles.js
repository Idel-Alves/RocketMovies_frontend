import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_200};
    }

    > h2 {
        font-size: 24px;
        margin: 34px 0 34px; 
        color: ${({theme}) => theme.COLORS.BEIGE};
    }

    > a {
        margin: 34px auto 0;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;