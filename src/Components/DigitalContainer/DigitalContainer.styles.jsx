import styled from 'styled-components';

export const BorderDiv = styled.div`
    border: 1px solid #311b92;
    padding: 20px;
    border-radius: 20px;
    margin: 5%;
    background-color: white;
    color: #311b92;
    font-weight: 600;
    width: 100%;

    @media (max-width: 746px){
        padding: 15px;
    }
    @media (max-width: 666px){
        padding: 10px;
    }
    @media (max-width: 464px){
        padding: 4%;
    }
`;