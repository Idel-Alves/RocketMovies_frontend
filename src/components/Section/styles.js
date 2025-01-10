import styled from "styled-components";

export const Container = styled.section`
    margin: 56px 0 28px;
    
    > h2 {
        margin-bottom: 24px;
        color: ${({ theme }) => theme.COLORS.GRAY_250};
        font-size: 20px;
        font-weight: 400;
    }

    > div {
        display: flex;
        padding: 12px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

        div {
            display: flex;
            width: auto;
            flex-wrap: wrap;
            gap: 20px;
        }
    }
`;