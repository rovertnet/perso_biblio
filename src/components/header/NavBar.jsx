

export default function NavBar() {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center px-14 py-5">
          <h1 className="font-bold text-xl text-slate-900">LOGO</h1>

          <div className="fixed left-72 right-72 top-3">
            <div className="flex justify-center items-center border-[1px] border-slate-900 bg-blue-500 rounded-xl space-x-5 px-3 py-2">
              <a href="#" className="font-bold text-xl text-slate-200">
                Accueil
              </a>
              <a href="#" className="font-bold text-xl text-slate-200">
                Shop
              </a>
              <a href="#" className="font-bold text-xl text-slate-200">
                Top books
              </a>
              <a href="#" className="font-bold text-xl text-slate-200">
                A propos
              </a>
              <a href="#" className="font-bold text-xl text-slate-200">
                Contact
              </a>
            </div>
          </div>

          <div className="flex space-x-3">
            <h1 className="font-bold text-xl text-slate-900">LOGO</h1>
            <h1 className="font-bold text-xl text-slate-900">LOGO</h1>
          </div>
        </div>
      </div>
    </>
  );
}
