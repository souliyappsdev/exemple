import { Provider } from "react-redux";
import { store } from "./store/reduxToolkit/store";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
}

export default App;
