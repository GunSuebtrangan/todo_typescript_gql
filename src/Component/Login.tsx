import React, { useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import { Authcontext } from "./Auth";
import firebaseConfig from "../config";
import { shouldButtonDisable, loginAuth } from "../helpers/loginHelpers";
const Login: any = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [typeDisable, setTypeDisable] = useState<boolean>(true);
  const currentUser = useContext(Authcontext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const checkLogin = await loginAuth(email, password, firebaseConfig);
    console.log("check", checkLogin);
    setTypeDisable(checkLogin);
  };
  const html = (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card" style={{ width: "18rem", margin: "30px" }}>
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h5 className="card-title">Welcome!!!</h5>
                  <input
                    type="text"
                    placeholder="username"
                    className="form-control"
                    onChange={(event) => {
                      setEmail(event.target.value);
                      // console.log(event.target.value);
                    }}
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    onChange={(event) => {
                      setPassword(event.target.value);
                      // console.log(event.target.value);
                    }}
                  />
                  <br />
                  <label style={{ color: "red" }} hidden={typeDisable}>
                    *---รหัสไม่ถูกต้อง
                  </label>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "30%" }}
                    disabled={shouldButtonDisable(email, password)}
                  >
                    login
                  </button>
                  &nbsp;
                  {/* <button type="button" className="btn btn-danger" onClick={()=>{ firebaseConfig.auth().signOut();}}>Log out</button> */}
                  <Link to="/regis" className="btn btn-info">
                    สมัคร
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </form>
    </>
  );
  return html;
};
export default Login;
