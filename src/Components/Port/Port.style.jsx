import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonBackground = styled.div`
    background-image: url(${process.env.PUBLIC_URL + '/images/login/panel_bg.png'});
    background-size: contain;
    background-repeat: no-repeat;
    padding: 15px;
    margin: 15px;
`;

export const ButtonDiv = styled.div`
    padding: 5px;
`;

export const InputLabel = styled.label`
    padding-bottom: 5px;
    padding-left: 5px;
`;

export const InputCheckBox = styled.input`
    margin-right: 14px;
    margin-left: 7px;
    appearance: none;
    display: inline-block;
    width: 30px;
    height: 30px;
    padding: 6px;

    background-clip: content-box;
    border-radius: 25px;
    background-color: #e7e6e7;   

    &:checked{
        background-color: lightgreen;
    }

    &:focus{
        outline: none !important;
    }
`;

export const BottomContainer = styled.div`
    margin-left: 25%;
    width: 50%;
    border: 1px solid blue;
    border-radius: 15px;
    padding: 15px;
    position: absolute;
    top: 84%;
`;


// export const CartDropdownButton = styled(CustomButton)`
//   margin-top: auto;
// `;


