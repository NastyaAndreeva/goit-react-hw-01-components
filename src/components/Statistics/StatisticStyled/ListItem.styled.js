import styled from "styled-components";
import { getRandomHexColor } from "utils/getRandomColor";

export const ListItem = styled.li`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({bgColor}) => bgColor = getRandomHexColor()};
`;