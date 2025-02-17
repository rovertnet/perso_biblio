import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import { IoMail } from "react-icons/io5";


export default function ContactForm() {
  return (
    <>
      <div className="block px-8 md:px-14 py-6 bg-black/85 md:-mt-32 -mt-32 md:mx-28 mx-8 md:mb-14 mb-6 rounded-md">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-12 gap-3 md:py-10 py-9">
          <div className="flex flex-col gap-3">
            <FaPhoneAlt className="font-bold text-blue-100 text-4xl" />
            <h3 className="font-semibold text-lg text-slate-400 ">
              +243 998724266
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <SiGooglemaps className="font-bold text-blue-100 text-4xl flex justify-center items-center" />
            <h3 className="font-semibold text-lg text-slate-400 ">
              boulvard du 30 juin
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <BiWorld className="font-bold text-blue-100 text-4xl" />
            <h3 className="font-semibold text-lg text-slate-400 ">RD Congo</h3>
          </div>
          <div className="flex flex-col gap-3">
            <IoMail className="font-bold text-blue-100 text-4xl" />
            <h3 className="font-semibold md:text-lg text-sm text-slate-400 ">
              rovertnet.roberto@gmail.com
            </h3>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="md:py-10 py-5 flex justify-center items-center md:mx-28 ">
          <form action="#" className="w-full md:w-full flex flex-col gap-6">
            <div className="">
              <input
                type="text"
                className="w-full px-5 py-3 text-white bg-black outline-0 focus:outline-1 hover:outline-1 hover:border-[1px] border-slate-300 rounded-b-md text-xl"
                name="nom"
                placeholder="Nom complet"
              />
            </div>

            <div className="">
              <input
                type="text"
                className="w-full px-5 py-3 text-white bg-black outline-0 focus:outline-1 hover:outline-1 hover:border-[1px] border-slate-300 rounded-b-md text-xl"
                name="nom"
                placeholder="E-mail"
              />
            </div>

            <div className="">
              <input
                type="text"
                className="w-full px-5 py-3 text-white bg-black outline-0 focus:outline-1 hover:outline-1 hover:border-[1px] border-slate-300 rounded-b-md text-xl"
                name="nom"
                placeholder="Sujet ou Objet"
              />
            </div>

            <div className="">
              <textarea
                name="message"
                className="w-full px-5 py-3 text-white bg-black outline-0 focus:outline-1 hover:outline-1 hover:border-[1px] border-slate-300 rounded-b-md text-xl"
                id=""
                cols="15"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="flex justify-end items-end">
              <button className="px-20 py-3 font-bold text-2xl hover:bg-blue-800 cursor-pointer text-slate-100 rounded-md bg-blue-900">
                Envoyez
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
