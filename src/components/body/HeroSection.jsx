

export default function HeroSection() {
  return (
    <>
      <div className="block h-full w-full py-32 px-32 hero object-cover md:object-cover">
        <h1 className="font-extrabold flex md:justify-center md:items-center md:text-center md:text-3xl md:max-w-80 max-w-96 text-center text-base py-10  md:py-14 text-blue-200 uppercase">
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
