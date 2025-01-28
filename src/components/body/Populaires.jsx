import imgproduit from "../../assets/image/P2.jpg"

export default function Populaires() {
  return (
    <>
      <div className="block px-14 py-6 ">
        <h2 className="font-bold text-lg text-slate-900 py-5">Top Livres</h2>
        <hr className="text-slate-300 " />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
          <div className="bg-slate-100 px-5 py-5 shadow-md rounded-md">
            <img src={imgproduit} alt={imgproduit} className="rounded-md" />
            <div className="pt-6 flex flex-col">
              <h3 className="font-semibold text-lg text-slate-800">Titre</h3>
              <span className="font-normal text-sm text-slate-400">
                Auteur du livre
              </span>
              <span className="font-normal text-sm text-slate-400">
                Edition : année
              </span>
            </div>
          </div>

          <div className="bg-slate-100 px-5 py-5 shadow-md rounded-md">
            <img src={imgproduit} alt={imgproduit} className="rounded-md" />
            <div className="pt-6 flex flex-col">
              <h3 className="font-semibold text-lg text-slate-800">Titre</h3>
              <span className="font-normal text-sm text-slate-400">
                Auteur du livre
              </span>
              <span className="font-normal text-sm text-slate-400">
                Edition : année
              </span>
            </div>
          </div>

          <div className="bg-slate-100 px-5 py-5 shadow-md rounded-md">
            <img src={imgproduit} alt={imgproduit} className="rounded-md" />
            <div className="pt-6 flex flex-col">
              <h3 className="font-semibold text-lg text-slate-800">Titre</h3>
              <span className="font-normal text-sm text-slate-400">
                Auteur du livre
              </span>
              <span className="font-normal text-sm text-slate-400">
                Edition : année
              </span>
            </div>
          </div>

          <div className="bg-slate-100 px-5 py-5 shadow-md rounded-md">
            <img src={imgproduit} alt={imgproduit} className="rounded-md" />
            <div className="pt-6 flex flex-col">
              <h3 className="font-semibold text-lg text-slate-800">Titre</h3>
              <span className="font-normal text-sm text-slate-400">
                Auteur du livre
              </span>
              <span className="font-normal text-sm text-slate-400">
                Edition : année
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
