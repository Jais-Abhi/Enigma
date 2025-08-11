import "./App.css";
import Body from "./Body";
import store from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext"; // ✅ new import

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Body />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
