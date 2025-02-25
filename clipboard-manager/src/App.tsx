import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import Clipboard from "./components/Clipboard";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Clipboard />
    </ThemeProvider>
  );
};

export default App;
