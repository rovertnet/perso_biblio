import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import { IoMail } from "react-icons/io5";


export default function ContactForm() {
  return (
    <>
      <div className="block px-8 md:px-14 py-6 bg-black/85 md:-mt-24 -mt-6 md:mx-28 mx-8 md:mb-14 mb-6 rounded-md">
        <div className="flex justify-center items-center md:gap-36 md:py-10 py-9">
          <FaPhoneAlt className="font-bold text-blue-100 text-5xl" />
          <SiGooglemaps className="font-bold text-blue-100 text-5xl" />
          <BiWorld className="font-bold text-blue-100 text-5xl" />
          <IoMail className="font-bold text-blue-100 text-5xl" />
        </div>
      </div>
    </>
  );
}
