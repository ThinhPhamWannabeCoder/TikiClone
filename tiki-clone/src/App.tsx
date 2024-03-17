import AuthProvider from "./modules/Auth/AuthProvider";
import { ApolloProvider} from "@apollo/client";
import Provider from "./routes/router.routes";
import client from "./config/apolo.graphql";

function App() {

  return (
    // Apollo Client
      <AuthProvider>
        <ApolloProvider client={client}>
          <Provider/>

        </ApolloProvider>
      </AuthProvider>
    

  )
}

export default App
