import { useEffect } from "react";
import "./App.css";
import Body from "./Body";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  useEffect(() =>{
    const fetchdata = async () =>{
   const res = await fetch('http://localhost:3000')
   const data = res.json()
   console.log(res.json())
    }
  })
  return (
    <>
      <Provider store={store}>
        {/* <Body /> */}
      </Provider>
    </>
  );
}

export default App;
