import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/logobiblio.png";
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

const navigation = [
  { name: "Accueil", to: "/" },
  { name: "Shop", to: "/shop" },
  { name: "Top Books", to: "/topbooks" },
  { name: "A propos", to: "/about" },
  { name: "Contact", to: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenus = () => {
    setIsOpen((prev) => !prev);
  };

  // Fermer le menu si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const { user, logout } = useAuth();

  return (
    <>
      <div className="bg-white fixed top-0 right-0 left-0 shadow-md z-30">
        <div className="flex justify-between items-center px-8 md:px-14 py-3">
          <img src={logo} alt="Logo" className="w-16 md:w-16 h-16 md:h-16" />

          <div className="hidden sm:hidden md:block lg:block xl:block">
            <div className="flex justify-center items-center rounded-2xl space-x-14 px-3 py-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "text-blue-500 px-2 py-1.5"
                        : "text-gray-900 hover:text-blue-500",
                      "text-xl font-bold"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden sm:hidden md:block lg:block">
            <div className="flex space-x-3">
              {!user ? (
                <Link to="/login">
                  <button className="font-bold cursor-pointer text-lg py-2 px-3 text-[#d2defb] rounded-xl bg-[#0c296d] hover:bg-blue-00">
                    Sign up
                  </button>
                </Link>
              ) : (
                <div className="relative" ref={menuRef}>
                <button
                    onClick={toggleMenus}
                    aria-label="user"
                    className="font-bold cursor-pointer text-lg py-3 px-3 text-slate-100 rounded-full bg-[#d2defb]"
                  >
                    <FaUserCircle className="text-3xl text-[#0c296d]" />
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 bg-white rounded shadow-md p-3 z-10 w-48">
                      <p className="text-xs text-gray-500 mb-2 capitalize">{user.role}</p>
                      <Link
                        to={user.role === "admin" ? "/admin" : "/dashboard"}
                        className="text-blue-500 text-sm block hover:underline cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        Mon espace
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="text-red-500 text-sm mt-2 hover:underline cursor-pointer"
                      >
                        Déconnexion
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="font-bold cursor-pointer text-lg md:text-lg py-3 px-3 text-slate-100 rounded-full bg-[#d2defb] duration-1000 transition-all"
              aria-label={openMenu ? "Close menu" : "Open menu"}
            >
              <AnimatePresence>
                {openMenu ? (
                  <motion.div
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 360, opacity: 1 }}
                    exit={{ rotate: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    key="close-icon"
                  >
                    <IoMdClose
                      className="text-3xl font-bold text-[#0c296d]"
                      aria-hidden="true"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 360, opacity: 1 }}
                    exit={{ rotate: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    key="menu-icon"
                  >
                    <HiMenuAlt4
                      className="text-3xl font-extrabold text-[#0c296d]"
                      aria-hidden="true"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.5 }}
              className="md:hidden"
            >
              <div className="flex flex-col justify-items-center items-center gap-3.5 space-y-1 px-11 pb-3 sm:px-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={navVariants}
                  >
                    <NavLink
                      to={item.to}
                      offset={-100}
                      spy={true}
                      smooth={true}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "text-blue-500 py-1.5"
                            : "text-gray-900 hover:text-blue-500",
                          "text-4xl font-bold"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigation.length * 0.1 }}
                className="flex space-x-5 py-5 justify-center px-11 items-center"
              >
                {!user ? (
                  <Link to="/login">
                    <button className="font-bold cursor-pointer text-2xl py-2 px-6 text-slate-100 rounded-xl bg-[#0c296d]">
                      Sign up
                    </button>
                  </Link>
                ) : (
                  <div className="relative group">
                    <button className="font-bold cursor-pointer text-lg py-2 px-3 text-slate-100 rounded-full bg-[#d2defb]">
                      <FaUserCircle className="text-3xl text-[#0c296d]" />
                    </button>
                    <div className="absolute right-0 mt-2 bg-white rounded shadow-md p-3 z-20 w-48 group-hover:block">
                      <p className="text-xs text-gray-500 mb-2 capitalize">{user.role}</p>
                      <Link
                        to={user.role === "admin" ? "/admin" : "/dashboard"}
                        className="text-blue-500 text-sm block"
                      >
                        Mon espace
                      </Link>
                      <Link
                        to="/"
                      >
                        <button onClick={logout} className="text-red-500 text-sm mt-2">
                          Déconnexion
                        </button>
                      </Link>
                    </div>
                  </div>
                )}

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
