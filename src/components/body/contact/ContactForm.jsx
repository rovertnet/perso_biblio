import { FaPhoneAlt } from "react-icons/fa";

export default function ContactForm() {
  return (
    <>
      <div className="block px-8 md:px-14 py-6 bg-slate-950 md:-mt-14 -mt-6 md:mx-14 mx-8">
        <div className="flex justify-center items-center md:py-10 py-9">
          <FaPhoneAlt className="font-bold text-blue-100 text-3xl" />
          <FaPhoneAlt className="font-bold text-blue-100 text-3xl" />
          <FaPhoneAlt className="font-bold text-blue-100 text-3xl" />
          <FaPhoneAlt className="font-bold text-blue-100 text-3xl" />
          <FaPhoneAlt className="font-bold text-blue-100 text-3xl" />
        </div>
      </div>
    </>
  );
}
