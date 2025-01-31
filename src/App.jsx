import HomePage from "./allPages/HomePage";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MyContext = createContext();


function App() {
  


  return (
    <>
      <NavBar />
      <HomePage />

      <BrowserRouter>
        <MyContext.Provider value={values}>
          
        </MyContext.Provider>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App
