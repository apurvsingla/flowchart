import styled from 'styled-components';


export const MainInputComponent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 20%;
    @media (max-width: 411px) {
        @media (max-height: 823px) {
            transform: scale(0.8);
        }
    }
`;