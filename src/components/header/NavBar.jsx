import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logobiblio.png";
import { FaCartArrowDown } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

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
              <button
                aria-label="Sign up"
                className="font-bold cursor-pointer text-lg md:text-lg py-2 md:py-2 px-3 md:px-3 text-[#d2defb] rounded-xl bg-[#0c296d] hover:bg-blue-00"
              >
                Sign up
              </button>
              <button
                aria-label="Cart"
                className="font-bold border-[1px] border-[#0c296d] cursor-pointer text-lg md:text-lg py-3 md:py-3 px-3 md:px-3 text-slate-100 rounded-full bg-[#d2defb]"
              >
                <FaCartArrowDown className="text-xl font-bold text-[#0c296d]" />
              </button>
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
                <button className="font-bold cursor-pointer text-2xl md:text-lg py-2 md:py-2 px-14 md:px-3 text-slate-100 rounded-xl bg-[#0c296d] hover:bg-blue-00">
                  Sign up
                </button>
                <button className="font-bold cursor-pointer text-lg md:text-lg py-3 md:py-3 px-3 md:px-3 text-slate-100 rounded-full bg-[#d2defb]">
                  <FaCartArrowDown className="text-3xl font-bold text-[#0c296d]" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
