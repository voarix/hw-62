import "./App.css";
import ToolBar from "./components/ToolBar.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home.tsx";

const App = () => {
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
