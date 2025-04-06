
import { StoriesCarousel } from '../components/StoryCarousel';

export default function Categories() {
  return (
    <>
      <div className=" bg-gray-100">
        <div className="px-8 md:px-14">
          <h2 className="font-bold text-lg text-slate-900 py-5 text-start">
            Toutes les catégories
          </h2>
          <hr className="text-slate-300" />
        </div>
        <StoriesCarousel />
      </div>
    </>
  );
}
