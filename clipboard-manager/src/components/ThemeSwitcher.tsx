import styled from "styled-components";
import { useThemeStore } from "../store/themeStore";

const SwitcherButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;


const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <SwitcherButton onClick={toggleTheme}>
      {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </SwitcherButton>
  );
};

export default ThemeSwitcher;
