import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid blue;
    border-radius: 15px;
    padding: 15px;
    width: 70%;
    margin-left: 15%;
    @media (max-width: 320px){
        width: 90%;
        margin-left: 3%;
    }   
`;