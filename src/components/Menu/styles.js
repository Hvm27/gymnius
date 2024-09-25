import styled from "styled-components";

export const StyledMenu = styled.header`
    position: sticky;
    display: flex;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 10%);
    /* box-shadow: 0 0 10px ${({ theme }) => theme.logoBackgroundColor}; */
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    background-color: black;
    color: white;
    align-items: center;
    grid-row: 1;
    grid-column: 1 / 3;  
`;

export const StyledLogo = styled.div`
    /* background-color: ${({ theme }) => theme.logoBackgroundColor}; */
    display: flex;
    background-color: black; 
    background-image: url('');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #D9D9D9; //fazer o UseContext

    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 150px;
    height: 40px;

    border: 1px solid white;
    border-radius: 20px;
    
    span {
        font-size: 20px;
        color: #000000;
    }
`;