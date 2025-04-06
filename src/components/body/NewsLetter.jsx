export default function NewsLetter() {
  return (
    <div className="w-full bg-[#0c296d] py-14 px-4 md:px-14">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <p className="font-bold text-2xl md:text-4xl text-justify text-slate-200 md:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          excepturi amet rerum labor
        </p>
        <form action="#" className="w-full">
          <div className="py-5 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              className="w-full px-4 py-3 text-slate-900 outline-0 focus:outline-0 bg-white border-[1px] border-slate-700 rounded-lg"
              placeholder="exemple@gmail.com"
            />
            <button
              type="submit"
              className="py-3 px-5 hover:bg-blue-950 hover:text-white hover:border-0 font-bold text-white text-lg text-center border-[1px] border-white rounded-lg"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
