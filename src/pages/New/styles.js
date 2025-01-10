import styled from "styled-components";

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
    }
`;

export const Content = styled.div`
    max-width: 1123px;
    margin: 38px auto;
`;

export const Form = styled.form`
    max-width: 100%;

    > header {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-bottom: 40px;

        a {
            display: flex;
            align-items: center;
            color: ${({theme}) => theme.COLORS.PINK};
        }

        h1 {
            font-size: 36px;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.BEIGE};
        }
    }

    > div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-bottom: 40px;
    }

    > div:nth-child(5) {
        display: flex;
        align-items: center;
        gap: 40px;
        
    }
`;

export const Delete = styled.button`
    flex: 1;
    height: 56px;
    border-radius: 10px;
    font-weight: 500;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.PINK};
    border: none;
`;

export const Save = styled.button`
    flex: 1;
    height: 56px;
    border-radius: 10px;
    font-weight: 500;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.GRAY_400};
    border: none;
`;
