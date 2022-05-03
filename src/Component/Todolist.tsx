import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import firebaseConfig from "../config";
import { Authcontext } from "./Auth";
import Todolistdata from "./Todolistdata";
import Inserttodos from "../query/Inserttodos";
import { shouldAddButtonDisable } from "../helpers/todoListHelpers";
import useInst from "../Custome_hook/useInst";

const Todolist: React.FC = () => {
  const [todo, setTodos] = useState<string>("");
  const currentUser = useContext(Authcontext);
  const [data, loading, error, setInst] = useInst(Inserttodos);
  // const [loadInst, { data, loading, error }] = useMutation(Inserttodos, {
  //   context: {
  //     headers: {
  //       "content-type": "application/json",
  //       "x-hasura-admin-secret":
  //         "eJpZcuDxA0XNikkJBzheEwd5DMjA44o233SY3sWA8g8W0AEfvdXpjWxNIBssz5Du",
  //     },
  //   },
  // });
  const setAdd = () => {
    if (currentUser) {
      // loadInst({
      //   variables: {
      //     todosList: todo,
      //     todosUid: currentUser.uid,
      //   },
      // });
      // const data = { todosList: todo, todosUid: currentUser.uid };
      setInst({ todosList: todo, todosUid: currentUser.uid });
    } else {
      throw new Error("Insert Todo Error");
    }
  };
  if (loading)
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 mt-5">
              <div
                className="card"
                style={{ width: "30rem", textAlign: "center" }}
              >
                <h5 className="card-header">
                  TODOLIST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn btn-danger "
                    style={{ width: "20%" }}
                    onClick={() => {}}
                    disabled
                  >
                    Log out
                  </button>
                </h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        value={todo!}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn btn-success col-md-6"
                        disabled
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <p>Loading...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </>
    );
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5">
            <div className="card" style={{ width: "30rem" }}>
              <h5 className="card-header">
                TODOLIST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-danger "
                  style={{ width: "20%" }}
                  onClick={() => {
                    firebaseConfig.auth().signOut();
                  }}
                >
                  Log out
                </button>
              </h5>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      value={todo}
                      onChange={(event) => {
                        setTodos(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="btn btn-success col-md-6"
                      onClick={() => {
                        setAdd();
                        setTodos("");
                      }}
                      disabled={shouldAddButtonDisable(todo)}
                    >
                      Add
                    </button>
                  </div>
                </div>
                <br />
                <br />
                <Todolistdata />
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
  // const html=(<></>)
  // return html
};
export default Todolist;
