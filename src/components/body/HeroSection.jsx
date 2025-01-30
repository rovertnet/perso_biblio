

export default function HeroSection() {
  return (
    <>
      <div className="block h-full w-full py-32 px-32 hero">
        <h1 className="font-extrabold text-center text-5xl py-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-blue-400 via-30% to-orange-500 to-90% ... uppercase text-slate-900">
          Bienvenu (e) <br /> à la grande biblothèque <br /> de la république
          démocratique du congo
        </h1>

        <div className="flex justify-center items-center">
          <button className="font-bold cursor-pointer hover:bg-black text-xl text-white border-[1px] border-white rounded-xl py-4 px-5">
            Contactez-nous
          </button>
        </div>
      </div>
    </>
  );
}
