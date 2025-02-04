import "./App.css";
import ToolBar from "./components/ToolBar.tsx";
import Home from "./Containers/Home/Home.tsx";
import Footer from "./components/Footer.tsx";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Containers/AboutUs/AboutUs.tsx";
import Contacts from "./Containers/Contacts/Contacts.tsx";

const App = () => {
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <footer className="bg-light mt-5">
        <Footer />
      </footer>
    </>
  );
};

export default App;
