import AuthProvider from "./modules/Auth/AuthProvider";
import { ApolloProvider} from "@apollo/client";
import RProvider from "./routes/router.routes";
import client from "./config/apolo.graphql";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {

  return (
    // Apollo Client
      <AuthProvider>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <RProvider/>

          </Provider>

        </ApolloProvider>
      </AuthProvider>
    

  )
}

export default App
