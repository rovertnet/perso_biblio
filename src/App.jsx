import { createContext } from "react";
import HomePage from "./allPages/HomePage";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar"
import Shop from "./allPages/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MyContext = createContext();


function App() {
  
  const values = {
   
  };

  return (
    <>
      <NavBar />

      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/shop" exact={true} element={<Shop />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App
