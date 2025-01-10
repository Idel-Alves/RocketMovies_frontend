import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;
    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 123px;

    > div.search {
        width: 600px;
    }

`;

export const Brande = styled.div`
    display: flex;
    width: 
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.PINK};
    /* margin-right: 64px; */
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        text-align: right;
        
        margin-right: 16px;
        line-height: 24px;

        strong {
         
           font-size: 18px;
           color: ${({ theme}) => theme.COLORS.BEIGE} 
        }

        button {
            width: max-content;
            font-size: 18px;
            color: ${({ theme}) => theme.COLORS.GRAY_300};
            border: none;  
            background-color: transparent;
            align-self: flex-end;          
        }
    }
`;

// export const Logout = styled.button`
   
// `;

export const ProfilePhoto = styled(Link)`
> img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
`; 