import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;

    width: 100%;

    padding: 0 10px;
`;

export const ContentWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    gap: 8px;
`;

export const AddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 3px;
    padding: 8px 16px;

    background: #83C5BE;
    color: #FFDDD2;

    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;
`;

export const ButtonText = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    
`
