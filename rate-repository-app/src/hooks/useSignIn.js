import { useMutation } from "@apollo/client/react";
import { AUTHENTICATE } from "../graphql/mutations";
import AuthStorage from "../utils/authStorage";
const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const storage = new AuthStorage();

  const signIn = async ({ username, password }) => {
    const result = await mutate({
      variables: {
        credentials: { username, password },
      },
    });
    await storage.setAccessToken(result["accessToken"]);
    const token = await storage.getAccessToken();
    console.log("TOKEN: ", token);
    return result;
  };

  return [signIn, result];
};

export default useSignIn;
