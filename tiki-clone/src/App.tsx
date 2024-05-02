import { ApolloProvider} from "@apollo/client";
import client from "./config/apolo.graphql";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AuthProvider from "./routes/router.routes";
function App() {

  return (
    // Apollo Client
        <ApolloProvider client={client}>
          <Provider store={store}>
            <AuthProvider/>
          </Provider>
        </ApolloProvider>
    

  )
}

export default App
