import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import { IoMail } from "react-icons/io5";


export default function ContactForm() {
  return (
    <>
      <div className="block px-8 md:px-14 py-6 bg-black/85 md:-mt-24 -mt-6 md:mx-28 mx-8 md:mb-14 mb-6 rounded-md">
        <div className="flex justify-center items-center md:gap-32 md:py-10 py-9">
          <div className="flex flex-col gap-2">
            <FaPhoneAlt className="font-bold text-blue-100 text-4xl" />
            <h3 className="font-semibold text-xl text-slate-400 text-center">
              +243 998724266 / 823444705
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <SiGooglemaps className="font-bold text-blue-100 text-4xl" />
            <h3 className="font-semibold text-xl text-slate-400 text-center">
              0023, mudjiba, Gombe/boulvard du 30 juin
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <BiWorld className="font-bold text-blue-100 text-4xl" />
            <h3 className="font-semibold text-xl text-slate-400 text-center"> 
              République Démocratique du Congo (RDC)
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <IoMail className="font-bold text-blue-100 text-4xl" />
            <h3 className="font-semibold text-xl text-slate-400 text-center">
              matundukabamba@gmail.com / rovertnet.roberto@gmail.com
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
