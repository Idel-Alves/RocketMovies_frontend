import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;
    padding: 22px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    > h1 {
        flex: 1;
        text-align: left;
        font-size: 24px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.BEIGE};
    }
    > p { 
        text-align: left;
        font-weight: 400;
        
        color: ${({ theme }) => theme.COLORS.GRAY_250};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 14px;
    }
`;


