import styled from 'styled-components';
import Switch from "react-switch";
export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonBackground = styled.div`
    border: 2px solid #311b92;
    padding: 10px;
    margin: 12px;
    border-radius: 35px;
    display: flex;
    justify-content: center;
`;

export const ButtonDiv = styled.div`
    padding: 5px;
`;

export const InputLabel = styled.label`
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
`;

export const InputCheckBox = styled.input`
    margin-left: 8px;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background-color: #e7e6e7;   
    position: relative;
    top: 7px;
    &:checked{
        background-color: green;
    }

    &:focus{
        outline: none !important;
    }
    @media (max-width: 768px) {
        padding: 0;
        margin: 0;
    }
`;

export const BottomContainer = styled.div`
    margin-left: 25%;
    width: 50%;
    border: 1px solid blue;
    border-radius: 15px;
    padding: 15px;
`;


export const SwitchButton = styled(Switch)`
    position: relative;;
    top: 5px;
`;


