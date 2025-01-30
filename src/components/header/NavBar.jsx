import logo from "../../assets/image/mon_logo.png"
import { FaCartArrowDown } from "react-icons/fa";


export default function NavBar() {
  return (
    <>
      <div className="bg-white fixed top-0 right-0 left-0 shadow-md">
        <div className="flex justify-between items-center px-14 py-5">
          <img src={logo} alt={logo} className="w-14 h-14" />

          <div className="">
            <div className="flex justify-center items-center rounded-2xl space-x-5 px-3 py-2">
              <a href="#" className="font-bold text-xl text-slate-900">
                Accueil
              </a>
              <a href="#" className="font-bold text-xl text-slate-900">
                Shop
              </a>
              <a href="#" className="font-bold text-xl text-slate-900">
                Top books
              </a>
              <a href="#" className="font-bold text-xl text-slate-900">
                A propos
              </a>
              <a href="#" className="font-bold text-xl text-slate-900">
                Contact
              </a>
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="font-bold text-lg md:text-lg py-3 md:py-3 px-3 md:px-3 text-slate-100 rounded-full bg-[#d2defb]">
              <FaCartArrowDown className="text-xl font-bold text-[#0c296d]" />
            </button>
            <button className="font-bold text-lg md:text-lg py-2 md:py-2 px-3 md:px-3 text-slate-100 rounded-xl bg-[#0c296d] hover:bg-blue-00">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
