import aboutimg from "../../../assets/image/hero1.jpg"


export default function AboutSection() {
  return (
    <>
      <div className="block px-14 py-6 bg-[#f7f4f4]">
        <h2 className="font-bold text-base text-slate-500 py-3 text-center">
          A propos
        </h2>
        <h2 className="font-extrabold text-3xl text-slate-900 pb-3.5 text-center">
          Une brève explication sur notre bibliothèque
        </h2>
        {/*  */}
        <div className="py-10 md:py-10 flex flex-col md:flex-row gap-20 ">
          <div className="flex flex-col gap-5">
            <img
              src={aboutimg}
              alt="about image"
              className="rounded-md object-cover w-full h-full md:w-full md:h-full"
            />
            <h2 className="font-extrabold text-2xl text-slate-900 text-start">
              Une brève explication sur notre bibliothèque
            </h2>
            <span className="font-semibold text-lg text-slate-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, ducimus sit distinctio a est quibusdam assumenda
              quisquam voluptas eveniet, repudiandae reiciendis ab sapiente
              earum itaque cumque aliquid odit. Consequuntur, quia.
            </span>
            <div className="flex justify-start items-start">
              <button className="font-bold bg-blue-950 text-slate-100 px-3 py-2 rounded-md text-start">
                Contact-nous
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-"></div>
          </div>
        </div>
      </div>
    </>
  );
}
