import { createContext } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./allPages/HomePage";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar";
import About from "./allPages/About";
import Contact from "./allPages/Contact";
import Books from "./allPages/Topbooks";
import ShopBooks from "./allPages/Shop";
import Login from "./allPages/Login";
import Register from "./allPages/Register";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import UserSpace from "./allPages/UserSpace";
import { useAuth } from "./context/AuthContext";
import AbonneSpace from "./allPages/abonne/AbonneSpace";

const MyContext = createContext();

function AppContent() {
  const location = useLocation(); // ✅ inclure loading

  
  // Liste des routes où on masque NavBar et Footer
  const noLayoutRoutes = ["/login", "/register", "/admin", "/dashboard"];

  const shouldHideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <NavBar />}

      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopBooks />} />
        <Route path="/topbooks" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/user" element={<UserSpace />} />

        {/* Routes protégées */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="Admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute requiredRole="Abonne">
              <AbonneSpace />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
}

function App() {
  const { user, loading } = useAuth(); // ✅ inclure loading
  const values = {};
  if (loading) return <div>Chargement...</div>; // Afficher un loader pendant le chargement
  
  // Contexte global (à remplir si besoin)

  return (
    <MyContext.Provider value={values}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
