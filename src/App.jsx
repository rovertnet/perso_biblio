import { createContext } from "react";
import HomePage from "./allPages/HomePage";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar"
import Shop from "./allPages/Shop";
import TopBooks from "./allPages/Topbooks";
import About from "./allPages/About";
import Contact from "./allPages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MyContext = createContext();


function App() {
  
  const values = {
   
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <MyContext.Provider value={values}>
          <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/shop" exact={true} element={<Shop />} />
            <Route path="/topbooks" exact={true} element={<TopBooks />} />
            <Route path="/about" exact={true} element={<About />} />
            <Route path="/contact" exact={true} element={<Contact />} />
          </Routes>
        </MyContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
