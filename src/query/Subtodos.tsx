import { gql} from "@apollo/client";

export default gql`
subscription subToDo($uId: String!) {
  todos(where: {todos_uid:{_eq:$uId}},order_by: {todos_id: asc} ) {
     todos_id
      todos_list
      todos_active
  }
}
`