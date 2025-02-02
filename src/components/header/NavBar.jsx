import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logobiblio.png"
import { FaCartArrowDown } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


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

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="bg-white fixed top-0 right-0 left-0 shadow-md">
        <div className="flex justify-between items-center px-9 md:px-14 md:py-5 py-3">
          <img src={logo} alt={logo} className="w-16 md:w-16 h-16 md:h-16" />

          <div className=" hidden md:block">
            <div className="flex justify-center items-center rounded-2xl space-x-5 px-3 py-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? " text-blue-500 px-2 py-1.5"
                        : "text-gray-900 hover:text-blue-500",
                      " text-xl font-bold"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className=" hidden md:block">
            <div className="flex space-x-3">
              <button className="font-bold cursor-pointer text-lg md:text-lg py-2 md:py-2 px-3 md:px-3 text-slate-100 rounded-xl bg-[#0c296d] hover:bg-blue-00">
                Sign up
              </button>
              <button className="font-bold cursor-pointer text-lg md:text-lg py-3 md:py-3 px-3 md:px-3 text-slate-100 rounded-full bg-[#d2defb]">
                <FaCartArrowDown className="text-xl font-bold text-[#0c296d]" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className=" md:hidden">
            <button
              onClick={toggleMenu}
              className="font-bold cursor-pointer text-lg md:text-lg py-3 px-3 text-slate-100 rounded-full bg-[#d2defb] duration-1000 transition-all"
            >
              {openMenu ? (
                <IoMdClose
                  className="text-3xl font-bold text-[#0c296d]"
                  aria-hidden="true"
                />
              ) : (
                <HiMenuAlt4
                  className="text-3xl font-extrabold text-[#0c296d]"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>

        {/* menu mobile */}

        <div className={`md:hidden ${
              openMenu
                ? ""
                : "hidden"
            }`}>
          <div
            className="flex flex-col justify-items-center items-center gap-3.5 space-y-1 px-11 pb-3 sm:px-3"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                offset={-100}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? " text-blue-500 py-1.5"
                      : "text-gray-900 hover:text-blue-500",
                    " text-4xl font-bold"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="flex space-x-5 py-5 justify-center px-11 items-center">
            <button className="font-bold cursor-pointer text-2xl md:text-lg py-2 md:py-2 px-14 md:px-3 text-slate-100 rounded-xl bg-[#0c296d] hover:bg-blue-00">
              Sign up
            </button>
            <button className="font-bold cursor-pointer text-lg md:text-lg py-3 md:py-3 px-3 md:px-3 text-slate-100 rounded-full bg-[#d2defb]">
              <FaCartArrowDown className="text-3xl font-bold text-[#0c296d]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
