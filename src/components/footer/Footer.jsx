import logo from "../../assets/image/mon_logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <>
      <div className="w-full py-12 bg-[#222020] px-14">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-14">
          <div className="flex flex-col gap-4">
            <img src={logo} alt="logo" className="w-16 h-16" />
            <p className="font-semibold text-lg text-slate-200 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              excepturi amet rerum labor
            </p>
            <div className="flex space-x-3">
              <FaFacebook className="font-bold text-4xl text-blue-800" />
              <FaInstagramSquare className="font-bold text-4xl text-red-400" />
              <FaLinkedin className="font-bold text-4xl text-blue-500" />
              <FaSquareXTwitter className="font-bold text-4xl text-black" />
            </div>
          </div>

          <div className="">
            <h2 className="font-bold text-xl text-white pb-4">Menu</h2>
            <div className="flex flex-col gap-3">
              <a href="#" className="font-semibold text-lg text-slate-300">
                Accueil
              </a>
              <a href="#" className="font-semibold text-lg text-slate-300">
                Shop
              </a>
              <a href="#" className="font-semibold text-lg text-slate-300">
                Top Books
              </a>
              <a href="#" className="font-semibold text-lg text-slate-300">
                A propos
              </a>
              <a href="#" className="font-semibold text-lg text-slate-300">
                Contact
              </a>
            </div>
          </div>

          <div className="">
            <h2 className="font-bold text-xl text-white pb-4">Liens Utiles</h2>
            <div className="flex flex-col gap-3">
              <a href="#" className="font-semibold text-lg text-slate-300">
                Politique de confidentialité
              </a>
              <a href="#" className="font-semibold text-lg text-slate-300">
                Mention légale
              </a>
              <a href="#" className="font-semibold text-lg text-slate-300">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
