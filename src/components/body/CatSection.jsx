import catimage from "../../assets/image/RP1.jpeg"

export default function CatSection() {
  return (
    <>
      <div className="block px-14 py-6">
        <h2 className="font-bold text-lg text-slate-900 py-5">
          Toutes les catégories
        </h2>
        <hr className="text-slate-300 " />
        <div className="flex justify-normal items-center gap-10 py-10">
          <div className="bg-white rounded-md px-3 py-3 shadow-md">
            <img
              src={catimage}
              alt={catimage}
              className="rounded-full h-16 w-16"
            />
            <span className="text-sm font-normal py-2 text-center text-slate-800">
              Science
            </span>
          </div>

          <div className="bg-white rounded-md py-3 shadow-md flex flex-col justify-center items-center">
            <img
              src={catimage}
              alt={catimage}
              className="rounded-full h-16 w-16"
            />
            <span className="text-sm font-normal py-2 text-center text-slate-800">
              Science
            </span>
          </div>

          <div className="bg-white rounded-md px-5 py-3 shadow-md">
            <img
              src={catimage}
              alt={catimage}
              className="rounded-full h-16 w-16"
            />
            <span className="text-sm font-normal py-2 text-center text-slate-800">
              Science
            </span>
          </div>

          <div className="bg-white rounded-md px-5 py-3 shadow-md">
            <img
              src={catimage}
              alt={catimage}
              className="rounded-full h-16 w-16"
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
