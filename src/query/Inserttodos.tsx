import { gql } from "@apollo/client";
export default gql`
mutation Inst($todosList:String!,$todosUid:String!){
    insert_todos_one(
      object: { todos_list: $todosList, todos_uid: $todosUid, todos_active: true }
    ) {
      todos_id
    }
  }
`