
export default function NewsLetter() {
  return (
    <>
      <div className="w-full bg-[#0c296d] py-14 px-14">
        <div className="flex flex-col md:flex-row gap-16">
          <p className="font-bold text-4xl text-justufy text-slate-200 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            excepturi amet rerum labor
          </p>
          <form action="#" className="w-full">
            <div className="py-5 flex space-x-3">
              <input
                type="mail"
                className="w-full px-5 py-3 text-slate-900 outline-0 focus:outline-0 bg-white border-[1px] border-slate-700 rounded-lg"
                placeholder="exemple@gmail.com"
              />
              <div className="">
                <button
                  type="button"
                  className="py-3 px-5 hover:bg- font-bold text-white text-lg text-center border-[1px] border-white rounded-lg"
                >
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
