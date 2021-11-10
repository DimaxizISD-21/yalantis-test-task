import { render } from "react-dom";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Employees from "./pages/Employees";
import { store } from "./store";
import { GlobalStyle } from "./styles";

render(
  <Router>
    <Provider store={store}>
      <GlobalStyle />
      <Switch>
        <Route path={"/employees"} component={Employees} />
        <Redirect to="/employees" />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById("root")
);
