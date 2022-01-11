import "./App.css";
import { Provider } from "react-redux";
import Register from "./components/Auth/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import configureStore from "./redux/reducers/configureStore";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/Register" element={<Register/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
