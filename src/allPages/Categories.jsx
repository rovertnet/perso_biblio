
import { StoriesCarousel } from '../components/StoryCarousel';

export default function Categories() {
  return (
    <>
      <div className=" bg-gray-100">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-gray-900">Stories</h1>
          </div>
        </div>
        <StoriesCarousel />
      </div>
    </>
  );
}
