import catimage from "../../assets/image/RP1.jpeg"

export default function CatSection() {
  return (
    <>
      <div className="block px-8 md:px-14 py-6 bg-[#f7f4f4]">
        <h2 className="font-bold text-lg text-slate-900 py-5">
          Toutes les catégories
        </h2>
        <hr className="text-slate-300 " />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-10 md:snap-x md:snap-proximity">
          <div className="bg-white rounded-md px-3 py-3 shadow-md flex flex-col justify-center items-center cursor-pointer">
            <img
              src={catimage}
              alt={catimage}
              className="rounded-full h-20 w-20 object-cover"
            />
            <span className="text-sm font-normal py-2 text-center text-slate-800">
              Science
            </span>
          </div>

          <div className="bg-white rounded-md py-3 shadow-md flex flex-col justify-center items-center cursor-pointer">
            <img
              src={catimage}
              alt={catimage}
              className="rounded-full h-16 w-16 object-cover"
            />
            <span className="text-sm font-normal py-2 text-center text-slate-800">
              Science
            </span>
          </div>

          <div className="bg-white rounded-md px-5 py-3 shadow-md flex flex-col justify-center items-center cursor-pointer">
            <img
              src={catimage}
              alt={catimage}
              className="rounded-full h-16 w-16 object-cover"
            />
            <span className="text-sm font-normal py-2 text-center text-slate-800">
              Science
            </span>
          </div>

          <div className="bg-white rounded-md px-5 py-3 shadow-md flex flex-col justify-center items-center cursor-pointer">
            <img
              src={catimage}
              alt={catimage}
              className="rounded-full h-16 w-16 object-cover"
            />
            <span className="text-sm font-normal py-2 text-center text-slate-800">
              Science
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
