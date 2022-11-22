import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <main className="App">
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
