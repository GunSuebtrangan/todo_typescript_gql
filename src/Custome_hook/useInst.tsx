import { useMutation } from "@apollo/client";

const useInst = (graphQl: any) => {
  const [instUser, { data, loading, error }] = useMutation(graphQl, {
    context: {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "eJpZcuDxA0XNikkJBzheEwd5DMjA44o233SY3sWA8g8W0AEfvdXpjWxNIBssz5Du",
      },
    },
  });
  const setInst = (data: any) => {
    if (data) {
      instUser({
        variables: data,
      });
    }
  };
  return [data, loading, error, setInst];
};
export default useInst;
