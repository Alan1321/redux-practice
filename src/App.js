import { Route } from "react-router-dom";
import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <Page1 />
      </Route>
      <Route path="/second" exact>
        <Page2 />
      </Route>
    </div>
  );
}

export default App;
