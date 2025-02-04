import "./App.css";
import ToolBar from "./components/ToolBar.tsx";
import Home from "./Containers/Home/Home.tsx";
import Footer from "./components/Footer.tsx";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Containers/AboutUs/AboutUs.tsx";
import Contacts from "./Containers/Contacts/Contacts.tsx";
import Portfolio from "./Containers/Portfolio/Portfolio.tsx";
import Countries from "./Containers/Countries/Countries.tsx";
import Chat from "./Containers/Chat/Chat.tsx";

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
          <Route path="/portfolio" element={<Portfolio />}>
            <Route path="countries" element={<Countries />} />
            <Route path="chat" element={<Chat />} />
          </Route>
          <Route path="*" element={<h1>Not page found</h1>} />
        </Routes>
      </main>
      <footer className="bg-light">
        <Footer />
      </footer>
    </>
  );
};

export default App;
