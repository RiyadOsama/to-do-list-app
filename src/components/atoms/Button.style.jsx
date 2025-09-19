import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--secondaryColor);
  padding: 8px;
  border-radius: 4px;
  border: none;
  &:hover {
    background-color: var(--primaryColor);
  }
`;

export default StyledButton;
