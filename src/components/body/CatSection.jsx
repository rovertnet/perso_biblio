import catimage from "../../assets/image/RP1.jpeg"

export default function CatSection() {
  return (
    <>
      <div className="block px-14 py-6">
        <h2 className="font-bold text-lg text-slate-900 py-10">
          Toutes les catégories
        </h2>
        <div className="grid grid-cols-4 gap-10">
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
