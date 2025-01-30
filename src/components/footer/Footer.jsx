import logo from "../../assets/image/mon_logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <>
      <div className="w-full py-20 bg-[#222020] px-14">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-14">
          <div className="flex flex-col gap-3">
            <img src={logo} alt="logo" className="w-14 h-14" />
            <p className="font-semibold text-lg text-slate-200 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              excepturi amet rerum labor
            </p>
            <div className="flex space-x-3">
              <FaFacebook />
              <FaInstagramSquare />
              <FaLinkedin />
              <FaSquareXTwitter />
            </div>
          </div>

          <div className="">
            <h2 className="font-bold text-xl text-white pb-3">Menu</h2>
            <div className="flex flex-col gap-3"></div>
          </div>

          <div className="">
            <h2 className="font-bold text-xl text-white pb-3">Liens Utiles</h2>
            <div className="flex flex-col gap-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
