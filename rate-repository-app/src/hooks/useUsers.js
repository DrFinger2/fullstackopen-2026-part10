import { useQuery } from "@apollo/client/react";
import { GET_ALL_USERS } from "../graphql/queries";

const useUsers = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_USERS, {
    fetchPolicy: "cache-and-network",
  });

  return { data: data?.usernames, loading, refetch };
};

export default useUsers;
