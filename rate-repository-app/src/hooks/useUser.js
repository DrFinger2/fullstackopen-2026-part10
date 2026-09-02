import { useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";

const useUser = () => {
  const { data, loading, error, refetch } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  return { user: data?.me, loading, error, refetch };
};

export default useUser;
