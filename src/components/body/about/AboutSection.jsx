import aboutimg from "../../../assets/image/hero1.jpg"


export default function AboutSection() {
  return (
    <>
      <div className="block px-8 md:px-14 pt-10 md:pt-14 bg-[#f7f4f4]">
        <h2 className="font-bold text-base text-slate-500 py-3 text-center">
          A propos
        </h2>
        <h2 className="font-extrabold text-3xl text-slate-900 pb-3.5 text-center">
          Une brève explication sur notre bibliothèque
        </h2>
        {/*  */}
        <div className="py-10 md:py-10 flex flex-col md:flex-row gap-20 ">
          <div className="flex flex-col gap-5 max-w-lg">
            <img
              src={aboutimg}
              alt="about image"
              className="rounded-md object-cover w-full h-full md:w-full md:h-full"
            />
            <h2 className="font-extrabold text-2xl text-slate-900 text-start">
              Une brève explication sur notre bibliothèque
            </h2>
            <span className="font-semibold text-lg text-justify text-slate-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, ducimus sit distinctio a est quibusdam assumenda
              quisquam voluptas eveniet, repudiandae reiciendis ab sapiente
              earum itaque cumque aliquid odit. Consequuntur, quia.
            </span>
            <div className="flex md:justify-start md:items-start">
              <button className="font-bold text-xl hover:bg-blue-900 bg-blue-950 text-slate-100 px-28 md:px-16 py-3 rounded-md text-start">
                Contact-nous
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-white px-5 py-7 border-[1px] border-slate-300 rounded-md">
              <h1 className="font-extrabold text-3xl text-slate-950 pb-3 text-start">
                +30.3K
              </h1>
              <span className="font-semibold text-lg text-justify text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias, ducimus sit distinctio a est quibusdam assumenda
                quisquam voluptas eveniet.
              </span>
            </div>

            <div className="bg-white px-5 py-7 border-[1px] border-slate-300 rounded-md">
              <h1 className="font-extrabold text-3xl text-slate-950 pb-3 text-start">
                +80.7K
              </h1>
              <span className="font-semibold text-lg text-justify text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias, ducimus sit distinctio a est quibusdam assumenda
                quisquam voluptas eveniet.
              </span>
            </div>

            <div className="bg-white px-5 py-7 border-[1px] border-slate-300 rounded-md">
              <h1 className="font-extrabold text-3xl text-slate-950 pb-3 text-start">
                +60.8K
              </h1>
              <span className="font-semibold text-lg text-justify text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias, ducimus sit distinctio a est quibusdam assumenda
                quisquam voluptas eveniet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
