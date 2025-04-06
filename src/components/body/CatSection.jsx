// import catimage from "../../assets/image/RP1.jpeg";

// export default function CatSection() {
//   return (
//     <>
//       <div className="block px-8 md:px-14 py-6 bg-[#f7f4f4]">
//         <h2 className="font-bold text-lg text-slate-900 py-5">
//           Toutes les catégories
//         </h2>
//         <hr className="text-slate-300 " />
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-10 ">
//           <div className="bg-white rounded-md px-3 py-3 shadow-md flex flex-col justify-center items-center cursor-pointer">
//             <img
//               src={catimage}
//               alt="catimage"
//               className="rounded-full h-20 w-20 object-cover"
//             />
//             <span className="text-sm font-normal py-2 text-center text-slate-800">
//               Science
//             </span>
//           </div>

//           <div className="bg-white rounded-md py-3 shadow-md flex flex-col justify-center items-center cursor-pointer">
//             <img
//               src={catimage}
//               alt="catimage"
//               className="rounded-full h-16 w-16 object-cover"
//             />
//             <span className="text-sm font-normal py-2 text-center text-slate-800">
//               Science
//             </span>
//           </div>

//           <div className="bg-white rounded-md px-5 py-3 shadow-md flex flex-col justify-center items-center cursor-pointer">
//             <img
//               src={catimage}
//               alt="catimage"
//               className="rounded-full h-16 w-16 object-cover"
//             />
//             <span className="text-sm font-normal py-2 text-center text-slate-800">
//               Science
//             </span>
//           </div>

//           <div className="bg-white rounded-md px-5 py-3 shadow-md flex flex-col justify-center items-center cursor-pointer">
//             <img
//               src={catimage}
//               alt="catimage"
//               className="rounded-full h-16 w-16 object-cover"
//             />
//             <span className="text-sm font-normal py-2 text-center text-slate-800">
//               Science
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    id: 1,
    username: "Votre story",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    hasStory: false,
    isUser: true,
  },
  {
    id: 2,
    username: "emma_smith",
    avatar:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=150",
    hasStory: true,
    viewed: false,
  },
  {
    id: 3,
    username: "alex.photo",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150",
    hasStory: true,
    viewed: false,
  },
  {
    id: 4,
    username: "sophie_art",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    hasStory: true,
    viewed: true,
  },
  {
    id: 5,
    username: "travel_tom",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    hasStory: true,
    viewed: false,
  },
  {
    id: 6,
    username: "maria.dev",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
    hasStory: true,
    viewed: true,
  },
];

const StoryCircle = ({ story, onClick }) => {
  const borderClass = story.hasStory
    ? story.viewed
      ? "bg-gradient-to-tr from-gray-300 to-gray-400"
      : "bg-gradient-to-tr from-yellow-400 via-fuchsia-500 to-orange-500"
    : "bg-gray-200";

  return (
    <motion.div
      className="flex flex-col items-center space-y-1 cursor-pointer"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      <div className={`p-[2px] ${borderClass} rounded-full`}>
        <div className="bg-white p-[2px] rounded-full">
          <div className="relative">
            <motion.img
              src={story.avatar}
              alt={story.username}
              className="w-16 h-16 rounded-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
            {story.isUser && (
              <motion.div
                className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 border-2 border-white cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus className="w-4 h-4 text-white" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <motion.span
        className="text-xs text-gray-900 truncate w-20 text-center"
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {story.username}
      </motion.span>
    </motion.div>
  );
};

const StoriesContainer = () => {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 300;
      const newScrollX =
        direction === "left"
          ? Math.max(0, scrollX - scrollAmount)
          : Math.min(
              container.scrollWidth - container.clientWidth,
              scrollX + scrollAmount
            );

      setScrollX(newScrollX);
      container.scrollTo({
        left: newScrollX,
        behavior: "smooth",
      });
    }
  };

  const handleStoryClick = (story) => {
    if (!story.isUser) {
      console.log(`Viewing story of ${story.username}`);
      // Ici, vous pourriez ajouter la logique pour afficher la story
    }
  };

  return (
    <div className="relative py-4 px-4">
      <AnimatePresence>
        {scrollX > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow-lg z-10 hover:bg-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-6"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onScroll={(e) => setScrollX(e.currentTarget.scrollLeft)}
      >
        {stories.map((story) => (
          <StoryCircle
            key={story.id}
            story={story}
            onClick={() => handleStoryClick(story)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {containerRef.current &&
          scrollX <
            containerRef.current.scrollWidth -
              containerRef.current.clientWidth && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow-lg z-10 hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          )}
      </AnimatePresence>
    </div>
  );
};

const App = () => (
  <div className="min-h-screen bg-gray-50">
    <motion.div
      className="max-w-2xl mx-auto bg-white shadow-sm"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="border-b">
        <StoriesContainer />
      </div>

      <motion.div
        className="p-4 text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Le contenu du feed apparaîtrait ici
      </motion.div>
    </motion.div>
  </div>
);

export default App;