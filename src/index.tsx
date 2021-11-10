import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { GlobalStyle } from "./styles";
import Employees from "./pages/Employees";

render(
  <Provider store={store}>
    <GlobalStyle />
    <Employees />
  </Provider>,
  document.getElementById("root")
);
