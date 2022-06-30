import styled from "styled-components";

export const TableHeading = styled.th`
    text-transform: uppercase;
    background-color: ${({theme}) => theme.colors.backgroundHeading};
    color: ${({theme}) => theme.colors.white};
    border: 3px solid ${({theme}) => theme.colors.grey};
    padding: 10px;
`;