  import { motion } from "framer-motion"

export default function Partenaires() {

  const colaboOne = [
    "../../assets/image/logo1.jpg",
    "../../assets/image/logo2.jpg",
    "../../assets/image/logo3.jpg",
    "../../assets/image/logo4.jpg",
    "../../assets/image/logo5.jfif",
    "../../assets/image/logo6.png",
    "../../assets/image/logo8.png",
    "../../assets/image/logo12.jpg",
    "../../assets/image/logo6.png",
    "../../assets/image/logo1.jpg",
  ];

  const colaboTow = [
    "../../assets/image/logo1.jpg",
    "../../assets/image/logo2.jpg",
    "../../assets/image/logo3.jpg",
    "../../assets/image/logo4.jpg",
    "../../assets/image/logo5.jfif",
    "../../assets/image/logo6.png",
    "../../assets/image/logo8.png",
    "../../assets/image/logo12.jpg",
    "../../assets/image/logo6.png",
    "../../assets/image/logo1.jpg",
  ];

  return (
    <>
      <div className=" block px-8 md:px-14 py-6">
        <div className="">
          <div className="flex">
            {colaboOne.map((image, index) => {
              return <img src={image} key={index} alt="" className="" />
            })}
          </div>
        </div>
      </div>
    </>
  );
}
