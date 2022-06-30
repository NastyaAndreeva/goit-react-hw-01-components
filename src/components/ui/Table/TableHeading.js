import styled from "styled-components";

export const TableHeading = styled.th`
    text-transform: uppercase;
    background-color: ${p => p.theme.colors.backgroundHeading};
    color: ${p => p.theme.colors.white};
    border: 3px solid ${p => p.theme.colors.grey};
    padding: 10px;
`;