import Main from "./src/components/Main";
import { ApolloProvider } from "@apollo/client/react";
import createApolloClient from "./src/utils/apolloClient";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";

const apolloClient = createApolloClient();

const App = () => {
  console.log("env check:", process.env.EXPO_PUBLIC_ENV);

  return (
    <>
      <StatusBar />
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;
