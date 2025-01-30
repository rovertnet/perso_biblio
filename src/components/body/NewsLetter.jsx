
export default function NewsLetter() {
  return (
    <>
      <div className="w-full bg-[#0c296d] py-28 px-14">
        <div className="flex flex-col md:flex-row gap-16">
          <p className="font-bold text-2xl text-justufy text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quibusdam excepturi amet rerum labore illum a itaque tempora ipsum eos eveniet cupiditate, 
            veritatis animi corporis ducimus distinctio doloribus dicta est praesentium.
          </p>
          <form action="#" className="">
            <div className="flex space-x-3">
              <input
                type="mail"
                className="w-full px-5 py-3 text-slate-900 outline-0 focus:outline-0 bg-white border-[1px] border-slate-700 rounded-lg"
                placeholder="exemple@gmail.com"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
