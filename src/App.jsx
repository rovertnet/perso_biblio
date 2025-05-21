import { createContext } from "react";
import HomePage from "./allPages/HomePage";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar"
import About from "./allPages/About";
import Contact from "./allPages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./allPages/Topbooks";
import ShopBooks from "./allPages/Shop";
import Login from "./allPages/Login";
import Register from "./allPages/Register";
import AdminDashboard from "./admin/AdminDashboard"
import ProtectedRoute from "./components/ProtectedRoute";
import SubscriberDashboard from "./allPages/SubscriberDashboard";
import Unauthorized from './allPages/Unauthorized'; 

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
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/register" exact={true} element={<Register />} />
            <Route
              path="/admin"
              exact={true}
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              exact={true}
              element={
                <ProtectedRoute requiredRole="subscriber">
                  <SubscriberDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/unauthorized"  exact={true} element={<Unauthorized />} />
          </Routes>
        </MyContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
