import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { StoryCard } from "./StoryCards";

const stories = [
  {
    id: "create",
    type: "create",
    userImageUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop",
    username: "Create Story",
  },
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=500&h=800&fit=crop",
    userImageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    username: "Sarah Wilson",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&h=800&fit=crop",
    userImageUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    username: "Mike Johnson",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&h=800&fit=crop",
    userImageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    username: "Emma Davis",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1682686580024-580519d4b2d2?w=500&h=800&fit=crop",
    userImageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    username: "John Smith",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1682686580950-960d1d513532?w=500&h=800&fit=crop",
    userImageUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
    username: "Lisa Anderson",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1682686580950-960d1d513532?w=500&h=800&fit=crop",
    userImageUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
    username: "Lisa Anderson",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1682686580950-960d1d513532?w=500&h=800&fit=crop",
    userImageUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
    username: "Lisa Anderson",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1682686580950-960d1d513532?w=500&h=800&fit=crop",
    userImageUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
    username: "Lisa Anderson",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1682686580950-960d1d513532?w=500&h=800&fit=crop",
    userImageUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
    username: "Lisa Anderson",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1682686580950-960d1d513532?w=500&h=800&fit=crop",
    userImageUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
    username: "Lisa Anderson",
  },
];

export function StoriesCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -200 : 200;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setScrollPosition(container.scrollLeft + scrollAmount);
  };

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  return (
    <div className="relative w-full max-w-full mx-auto px-8 md:px-14 py-6">
      <div className="relative">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {/* Create Story Card
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative flex-shrink-0 cursor-pointer w-[140px] h-[200px] md:w-[160px] md:h-[240px] rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <div className="absolute inset-0 bg-gray-100" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="mx-auto w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-900">Create Story</p>
            </div>
          </motion.div> */}

          {/* Story Cards */}
          {stories.slice(1).map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          style={{ opacity: scrollPosition <= 0 ? 0 : 1 }}
          disabled={scrollPosition <= 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          style={{
            opacity:
              scrollPosition >=
              (carouselRef.current?.scrollWidth || 0) -
                (carouselRef.current?.clientWidth || 0)
                ? 0
                : 1,
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
