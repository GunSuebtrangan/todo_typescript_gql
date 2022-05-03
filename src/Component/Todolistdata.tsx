import { useSubscription, useMutation } from "@apollo/client";
import React, { useContext } from "react";
import Updatetodos from "../query/Updatetodos";
import { Authcontext } from "./Auth";
import Subtodos from "../query/Subtodos";
import useInst from "../Custome_hook/useInst";
interface typeSubscription {
  todos: Array<{ todos_id: number; todos_list: string; todos_active: boolean }>;
}
interface typeUpdate {
  todos: Array<{ todos_id: number; todos_list: string; todos_active: boolean }>;
}
const Todolistdata: React.FC = () => {
  const currentUser = useContext(Authcontext);
  const [dataUpdate, loadingUpdate, errorUpdate, setInst] =
    useInst(Updatetodos);
  // const [loadUpdate, dataupdate] = useMutation<typeUpdate>(Updatetodos, {
  //   context: {
  //     headers: {
  //       "content-type": "application/json",
  //       "x-hasura-admin-secret":
  //         "eJpZcuDxA0XNikkJBzheEwd5DMjA44o233SY3sWA8g8W0AEfvdXpjWxNIBssz5Du",
  //     },
  //   },
  // });
  const onClickActiveButton = (todos_id: number, todos_active: boolean) => {
    if (currentUser) {
      setInst({ todos_id, active: !todos_active, uId: currentUser.uid });
    } else {
      throw new Error("Update is error");
    }
  };
  const { data, loading, error } = useSubscription<typeSubscription>(Subtodos, {
    variables: { uId: currentUser ? currentUser.uid : "" },
  });
  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (data) {
    console.log(data.todos.length);
  }

  const html = (
    <>
      {data ? (
        data.todos.length > 0 ? (
          data.todos.map(({ todos_id, todos_list, todos_active }) => {
            return (
              <div
                key={todos_id}
                className="col-md-12"
                style={{ textAlign: "center" }}
              >
                <p
                  style={{
                    cursor: "pointer",
                    textDecoration: todos_active ? "" : "line-through",
                    fontSize: "20px",
                  }}
                  onClick={() => {
                    console.log(Updatetodos);
                    onClickActiveButton(todos_id, todos_active);
                  }}
                >
                  {todos_list}
                </p>
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>ไม่มีข้อมูล</p>
        )
      ) : (
        <p style={{ textAlign: "center" }}>*---Error---*</p>
      )}
      {/* {data ? (
        data.todos.map(({ todos_id, todos_list, todos_active }) => {
          return (
            <div
              key={todos_id}
              className="col-md-12"
              style={{ textAlign: "center" }}
            >
              <p
                style={{
                  cursor: "pointer",
                  textDecoration: todos_active ? "" : "line-through",
                  fontSize: "20px",
                }}
                onClick={() => {
                  console.log(Updatetodos);
                  onClickActiveButton(todos_id, todos_active);
                }}
              >
                {todos_list}
              </p>
            </div>
          );
        })
      ) : (
        <>l;sakdl;skald;</>
      )} */}
    </>
  );
  return html;
};
export default Todolistdata;
