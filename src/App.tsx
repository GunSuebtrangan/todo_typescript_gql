import { AuthProvider } from "./Component/Auth";
// import "./App.css";
import Login from "./Component/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Regis from "./Component/Regis";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/regis">
              <Regis />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
