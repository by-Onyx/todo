import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 85vw;
    max-width: 640px;
    min-height: 50px;

    padding: 5px 10px;

    border: 1px solid lightgray;
    border-radius: 7px;
    background: #006D77;

    &:hover {
        border: 1px solid black;
    }
`;

export const Text = styled.p`
    color: #FFDDD2;

    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;

    height: 100%;

    gap: 8px;
    margin: 8px;
`;

export const CheckBox = styled.input`
    height: 20px;
    width: 20px;
    
    cursor: pointer;
`;

export const Edit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #006D77;

    border: none;

    cursor: pointer;
`;

export const Delete = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #006D77;

    border: none;

    cursor: pointer;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    gap: 8px;
`;

export const DeleteModalText = styled.p`
    color: #FFF;

    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const ConfirmButton  = styled.button`
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
