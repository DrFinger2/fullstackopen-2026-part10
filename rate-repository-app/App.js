import Main from "./src/components/Main";
import { ApolloProvider } from "@apollo/client/react";
import createApolloClient from "./src/utils/apolloClient";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  console.log("env check:", process.env.EXPO_PUBLIC_ENV);

  return (
    <>
      <StatusBar />
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;
