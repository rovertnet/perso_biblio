import logo from "../../assets/image/logobiblio.png"
import { FaCartArrowDown } from "react-icons/fa";


const navigation = [
  { name: "Tableau de bord", to: "/"},
  { name: "Sondages", to: "/surveys" },
];
const userNavigation = [
  { name: "Profile", href: "#" },
  { name: "Parametre", href: "#" },
  { name: "Déconnexion", href: "#" },
];


export default function NavBar() {


  return (
    <>
      <div className="bg-white fixed top-0 right-0 left-0 shadow-md">
        <div className="flex justify-between items-center px-14 py-5">
          <img src={logo} alt={logo} className="w-14 h-14" />

          <div className="">
            <div className="flex justify-center items-center rounded-2xl space-x-5 px-3 py-2">
              
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="font-bold cursor-pointer text-lg md:text-lg py-2 md:py-2 px-3 md:px-3 text-slate-100 rounded-xl bg-[#0c296d] hover:bg-blue-00">
              Sign up
            </button>
            <button className="font-bold cursor-pointer text-lg md:text-lg py-3 md:py-3 px-3 md:px-3 text-slate-100 rounded-full bg-[#d2defb]">
              <FaCartArrowDown className="text-xl font-bold text-[#0c296d]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
