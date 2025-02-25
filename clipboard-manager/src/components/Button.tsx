import styled from "styled-components";

type ButtonProps = {
  disabled?: boolean;
};

const Button = styled.button<ButtonProps>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabled : theme.colors.primary};
  color: ${({ disabled }) => (disabled ? "#888" : "white")};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ theme, disabled }) =>
      disabled ? theme.colors.disabled : theme.colors.secondary};
  }
`;

export default Button;
