import { gql } from "@apollo/client";
export default gql`
mutation UpdateTodos($todos_id: Int!,$active:Boolean!,$uId:String!) {
  update_todos(
    where: {
      todos_uid: { _eq: $uId}
      _and: { todos_id: { _eq: $todos_id } }
    }
    _set: { todos_active:$active }
  ) {
    returning {
      todos_active
    }
  }
}
`