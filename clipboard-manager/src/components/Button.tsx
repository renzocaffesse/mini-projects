import styled from "styled-components";

type ButtonProps = {
  disabled?: boolean;
};

const Button = styled.button<ButtonProps>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabled : theme.colors.primary};
  color: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme, disabled }) =>
      disabled ? theme.colors.disabled : theme.colors.secondary};
  }
`;

export default Button;
