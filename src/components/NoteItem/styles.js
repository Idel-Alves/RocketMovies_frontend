import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_600};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    border-radius: 10px;

    > input {
        height: 56px;
        text-align: center;
        color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_400};
        }
    }

    > button {
        border: none;
        background: none;

        svg {
            font-size: 24px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }
`;