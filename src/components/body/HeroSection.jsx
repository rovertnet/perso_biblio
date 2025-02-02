

export default function HeroSection() {
  return (
    <>
      <div className="block h-full w-full py-32 px-32 hero object-cover md:object-cover">
        <h1 className="font-extrabold md:text-center md:text-3xl md:max-w-5xl max-w-96 text-center text-base py-10  md:py-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-blue-400 via-30% to-orange-500 to-90% ... uppercase">
          Bienvenu (e)  à la grande biblothèque de la république
          démocratique du congo
        </h1>

        <div className="flex justify-center items-center">
          <>
            <button className="font-bold cursor-pointer hover:bg-black hover:border-0 text-lg md:text-xl text-white border-[1px] border-white rounded-xl py-2 md:py-4 px-2 md:px-3">
              Contactez-nous
            </button>
          </>
        </div>
      </div>
    </>
  );
}
