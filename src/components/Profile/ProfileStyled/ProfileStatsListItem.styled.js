import styled from "styled-components";

export const ProfileStatsListItem = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({theme}) => theme.colors.black};
    width: 135px;
    padding: 15px;
    text-align: center;
    background-color: ${({theme}) => theme.colors.backgroundGrey};
`;