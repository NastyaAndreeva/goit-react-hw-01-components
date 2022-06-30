import styled from "styled-components";

export const TableBody = styled.tbody`
tr:nth-child(even) {
    background-color: ${({theme}) => theme.colors.backgroundDarkGrey};
}
`;