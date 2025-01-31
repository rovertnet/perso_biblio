import HomePage from "./allPages/HomePage";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar"

const MyContext = createContext();


function App() {
  


  return (
    <>
      <NavBar />
      <HomePage />

      

      <Footer />
    </>
  );
}

export default App
