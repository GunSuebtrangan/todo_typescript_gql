import { useContext } from "react";
import { Authcontext } from "./Auth";
import { Redirect } from "react-router-dom";
import Todolist from "./Todolist";
const Dashboard = () => {
  // console.log("จากไฟร์Dashboard.js=", props.User_dt);
  const currentUser = useContext(Authcontext);
  if (!currentUser) {
    return <Redirect to="/" />;
  }
  return <Todolist />;
};
export default Dashboard;
