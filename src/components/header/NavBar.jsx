import logo from "../../assets/image/mon_logo.png"

export default function NavBar() {
  return (
    <>
      <div className="bg-white fixed top-0 right-0 left-0 shadow-md">
        <div className="flex justify-between items-center px-14 py-5">
          <img src={logo} alt={logo} className="w-14 h-14" />

          <div className="">
            <div className="flex justify-center items-center border-[1px] border-slate-900 bg-slate-900 rounded-2xl space-x-5 px-3 py-2">
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
            <button className="font-bold text-lg md:text-lg py-2 md:py-2 px-3 md:px-3 text-slate-200 rounded-xl bg-slate-900">Connexion</button>
          </div>
        </div>
      </div>
    </>
  );
}
