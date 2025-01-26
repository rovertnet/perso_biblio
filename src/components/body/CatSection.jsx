import catimage from "../../assets/image/RP1.jpeg"

export default function CatSection() {
  return (
    <>
      <div className="block px-14 py-20">
        <div className="grid grid-col-4 gap-10">
          <div className="bg-white rounded-md px-5 py-3">
            <img src={catimage} alt={catimage} className="" />
          </div>
        </div>
      </div>
    </>
  )
}
