

export default function TopBooks() {
  return (
    <>
      <div className="block px-14 py-6 bg-[rgb(247, 244, 244)]">
        <h2 className="font-bold text-lg text-slate-900 py-5">Top Livres</h2>
        <hr className="text-slate-300 " />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="bg-white px-5 py-5 shadow-md rounded-md">
            <div className="bg-[#eeecec] px-5 py-14 rounded-md"></div>
            <div className="py-6 px-5 flex"></div>
          </div>
        </div>
      </div>
    </>
  );
}
