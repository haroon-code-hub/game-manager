import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreateGame from "./pages/CreateGame";
import UpdateGame from "./pages/UpdateGame";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/create" element={<CreateGame />}></Route>
          <Route path="/update/:id" element={<UpdateGame />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
