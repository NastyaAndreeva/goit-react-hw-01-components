import styled from "styled-components";

export const ProfileAvatar = styled.img`
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.colors.black};
    width: 150px;
    height: 150px;
`;