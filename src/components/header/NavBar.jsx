

export default function NavBar() {
  return (
    <>
      <div className="fixed left-o right-0 top-0">
        <div className="flex justify-between items-center px-14 py-5">
          <h1 className="font-bold text-xl text-slate-900">LOGO</h1>
          <div className="flex justify-center items-center border-[1px] border-slate-900 space-x-5 px-3 py-2">
            <a href="#" className="font-bold text-xl text-slate-900">
              Accueil
            </a>
            <a href="#" className="font-bold text-xl text-slate-900">
              Shop
            </a>
            <a href="#" className="font-bold text-xl text-slate-900">
              Top books
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
