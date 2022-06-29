import styled from "styled-components";

export const StatusCheckbox = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 20px;
    background-color: ${p => p.isOnline ? 'green' : 'red'};
`;