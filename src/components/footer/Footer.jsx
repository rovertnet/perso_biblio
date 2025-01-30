import logo from "../../assets/image/mon_logo.png"

export default function Footer() {
  return (
    <>
      <div className="w-full py-20 bg-[#222020] px-14">
        <div className="grid grid-2 md:grid-3 gap-14">
          <div className="flex flex-col gap-3">
            <img src={logo} alt="logo" className="w-14 h-14" />
            <p className="font-semibold text-lg text-slate-200"></p>
          </div>
        </div>
      </div>
    </>
  );
}
