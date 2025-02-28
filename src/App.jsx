import { createContext } from "react";
import HomePage from "./allPages/HomePage";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar"
import About from "./allPages/About";
import Contact from "./allPages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./allPages/Topbooks";
import ShopBooks from "./allPages/Shop";

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
            <Route path="/shop" exact={true} element={<ShopBooks />} />
            <Route path="/topbooks" exact={true} element={<Books />} />
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
