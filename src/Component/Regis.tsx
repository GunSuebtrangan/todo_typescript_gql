import { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import firebaseConfig from "../config";
import { useMutation } from "@apollo/client";
import InsertUser from "../query/InsertUser";
import useInst from "../Custome_hook/useInst";
import {
  shouldRegisButtonDisable,
  regisFirebase,
} from "../helpers/regisHelpers";
const Regis: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  // const [returnEmail, setReturnEmail] = useState<string|null>("");
  const [data, loading, error, setInst] = useInst(InsertUser);
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  // const [uId, setUid] = useState<string>("");
  //   const addtodo = gql`
  //   mutation {
  //     insert_users_one(object: { users_uid:"${uId}" , users_username:"${returnEmail}"  }) {
  //       users_uid
  //     }
  //   }
  // `;
  // const [instUser, { data, loading, error }] = useMutation(InsertUser, {
  //   context: {
  //     headers: {
  //       "content-type": "application/json",
  //       "x-hasura-admin-secret":
  //         "eJpZcuDxA0XNikkJBzheEwd5DMjA44o233SY3sWA8g8W0AEfvdXpjWxNIBssz5Du",
  //     },
  //   },
  // });
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  const handlesubmit = async () => {
    // try {
    // const result = await firebaseConfig
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password);

    const result = await regisFirebase(
      email,
      password,
      firebaseConfig,
      setInst
    );
    console.log(result);
    setErrorMessage(result);
    // test2(result.user.uid, result.user.email);
    // const test = useInsUser(result.user.uid, result.email.user.email);
    // if (result) {
    //   instUser({
    //     variables: { uId: result.user.uid, email: result.user.email },
    //   });
    // } else {
    //   throw new Error("Insert user Error");
    // }
    // const test = useInsUser(result.user.uid,result.user.email);
    // result.user !== null
    //   ? instUser({
    //       variables: { uId: result.user.uid, email: result.user.email },
    //     })
    //   : instUser({ variables: { uId: "error", email: "error" } });
    // if(result.user!==null){
    //   instUser({variables:{uId:result.user.uid,email:result.user.email}});
    // }
    setEmail("");
    setPassword("");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const html = (
    <>
      <form>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="card" style={{ width: "18rem", margin: "30px" }}>
              <div className="card-body" style={{ textAlign: "center" }}>
                <h5 className="card-title">สมัครสมาชิก</h5>
                <input
                  type="email"
                  placeholder="admin"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <br />
                {errorMessage !== "" ? (
                  <label style={{ color: "red" }}>{errorMessage}</label>
                ) : (
                  ""
                )}
                <br />
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "30%" }}
                  onClick={() => {
                    handlesubmit();
                    setCurrentUser(true);
                  }}
                  disabled={shouldRegisButtonDisable(email, password)}
                >
                  ยืนยัน
                </button>
                &nbsp;
                <Link to="/" className="btn btn-info">
                  Back
                </Link>
                <br />
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
export default Regis;
