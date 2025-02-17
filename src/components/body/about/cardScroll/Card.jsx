

export default function Card({ image, title, description }) {
  return (
    <>
      <div className="snap-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={image} alt={title} />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
