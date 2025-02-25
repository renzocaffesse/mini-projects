import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

import Clipboard from "./components/Clipboard";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Clipboard />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  );
};

export default App;
