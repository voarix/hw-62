import "./App.css";
import ToolBar from "./components/ToolBar.tsx";
import Home from "./Containers/Home/Home.tsx";
import Footer from "./components/Footer.tsx";
import { Route, Routes } from "react-router-dom";

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
      <footer className="bg-light">
        <Footer />
      </footer>
    </>
  );
};

export default App;
