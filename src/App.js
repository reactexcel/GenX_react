import React from "react";
import logo from "./logo.svg";
import "./styles/main.scss";
import { HashRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/generic/PrivateRoute";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute path="/app" component={Layout} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
      <ToastContainer/>
    </Provider>
  );
}

export default App;
