import { gql } from "@apollo/client";
export default gql`
  mutation instUser($uId: String!, $email: String!) {
    insert_users_one(object: { users_uid: $uId, users_username: $email }) {
      users_uid
    }
  }
`;
