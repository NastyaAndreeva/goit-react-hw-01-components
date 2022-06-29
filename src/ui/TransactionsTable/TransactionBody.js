import styled from "styled-components";

export const TransactionBody = styled.tbody`
tr:nth-child(even) {
    background-color: ${p => p.theme.colors.backgroundDarkGrey};
}
`;