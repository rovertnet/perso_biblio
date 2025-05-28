import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { getAllCategories } from "../../services/categoryService";

// const stories = [
//   {
//     id: 1,
//     username: "Simple",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/arrangement-livres-anglais-nature-morte-high-angle_23-2149440476.jpg?t=st=1743944189~exp=1743947789~hmac=290c439660077d50f4e78a919d5b023fee00eb86f3f90d5cd963968e9672f215&w=740",
//     hasStory: false,
//     isUser: true,
//   },
//   {
//     id: 2,
//     username: "Sciences",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/illustration-3d-livre-violet-isole-fond_107791-16378.jpg?t=st=1743944985~exp=1743948585~hmac=6c441479d7a38057f9be06457a173061f6327f1c2f37382b8f0ae570bee22d2c&w=1380",
//     hasStory: true,
//     viewed: false,
//   },
//   {
//     id: 3,
//     username: "Mathématiques",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/illustration-3d-livre-violet-isole-fond_107791-16378.jpg?t=st=1743944985~exp=1743948585~hmac=6c441479d7a38057f9be06457a173061f6327f1c2f37382b8f0ae570bee22d2c&w=1380",
//     hasStory: true,
//     viewed: false,
//   },
//   {
//     id: 4,
//     username: "Psycho",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/livres-anglais-fond-bleu_23-2149440456.jpg?t=st=1743945131~exp=1743948731~hmac=e9779a51929850aef9ded95b209460cae7f81fb1c98da82a78ed555a8af52990&w=740",
//     hasStory: true,
//     viewed: true,
//   },
//   {
//     id: 5,
//     username: "Histoire",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/couverture-du-livre-devant-position-verticale_1101-1118.jpg?t=st=1743945220~exp=1743948820~hmac=e2dffdfacfe1b99d4485c567901f4f0bf808731e4e63d7d2d3fc4d7b60558eb2&w=740",
//     hasStory: true,
//     viewed: false,
//   },
//   {
//     id: 6,
//     username: "Géographie",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/livre-decoratif-fond-bleu_23-2147615011.jpg?t=st=1743945432~exp=1743949032~hmac=4551cc07390baf2ede4450acf7fb49f61490fcc53cf2d5c5aa1a0f21cfe28c5a&w=740",
//     hasStory: true,
//     viewed: true,
//   },
//   {
//     id: 7,
//     username: "philosophie",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/livre-3d-rendu-manuel-papier-ferme-versets_107791-16792.jpg?t=st=1743945563~exp=1743949163~hmac=0e6b1ea9cf0d4f398c26df94c95bc6f1af1ebe71456e4c7c4a677063ae723bd3&w=1380",
//     hasStory: true,
//     viewed: false,
//   },
//   {
//     id: 8,
//     username: "littérature",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/livres-anglais-reposant-table-espace-travail_23-2149429582.jpg?t=st=1743946088~exp=1743949688~hmac=3991de9a5b4418e2029b0d823db107640aa3876738384a86c026ffaaef50a324&w=1380",
//     hasStory: true,
//     viewed: true,
//   },
//   {
//     id: 9,
//     username: "physique",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/illustration-3d-livres-fermes-ouverts-crayon_107791-15848.jpg?t=st=1743945773~exp=1743949373~hmac=89ffcaed66804a7d6b682630a8e8ad6708abf9a3dbb0a2190cfe2c6c1ff6eb7a&w=1380",
//     hasStory: true,
//     viewed: false,
//   },
//   {
//     id: 10,
//     username: "chimie",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/organise-dans-livres-verticaux_1101-119.jpg?t=st=1743946375~exp=1743949975~hmac=224cd5344dc36c42afbe46de77f203a3048983d76cfef09d9f05678603be17a8&w=900",
//     hasStory: true,
//     viewed: true,
//   },
//   {
//     id: 11,
//     username: "biologie",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/livre-3d-rendu-manuel-papier-ferme-versets_107791-16792.jpg?t=st=1743945563~exp=1743949163~hmac=0e6b1ea9cf0d4f398c26df94c95bc6f1af1ebe71456e4c7c4a677063ae723bd3&w=1380",
//     hasStory: true,
//     viewed: false,
//   },
//   {
//     id: 12,
//     username: "informatique",
//     avatar:
//       "https://img.freepik.com/photos-gratuite/couverture-du-livre-devant-position-verticale_1101-1118.jpg?t=st=1743945220~exp=1743948820~hmac=e2dffdfacfe1b99d4485c567901f4f0bf808731e4e63d7d2d3fc4d7b60558eb2&w=740",
//     hasStory: true,
//     viewed: true,
//   },
// ];

const StoryCircle = ({ story, onClick }) => {

  const [stories, setStories] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);


  const borderClass = story.hasStory
    ? story.viewed
      ? ""
      : ""
    : "bg-gray-200";

  return (
    <motion.div
      className="flex flex-col items-center space-y-3 cursor-pointer"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      <div className={` ${borderClass} `}>
        <div className="bg-white p-[2px] rounded-full">
          <div className="relative">
            <motion.img
              src={story.avatar}
              alt={story.username}
              className="w-24 h-24 rounded-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
            {story.isUser && (
              <motion.div
                className="absolute bottom-0 right-0  rounded-full p-1 border-2 border-white border-solid cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              ></motion.div>
            )}
          </div>
        </div>
      </div>
      <motion.span
        className="text-lg text-gray-900 truncate w-20 text-center"
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {story.username}
      </motion.span>
    </motion.div>
  );
};

const StoriesContainer = () => {;

  const [stories, setStories] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
  const fetchStories = async () => {
    try {
      const response = await getAllCategories();
      console.log("Réponse API :", response);

      const categories = Array.isArray(response)
        ? response
        : response.data || [];

      const formatted = categories.map(cat => ({
        id: cat.id,
        username: cat.name,
        avatar: cat.image,
        hasStory: true,
        viewed: false,
      }));

      setStories(formatted);
    } catch (error) {
      console.error("Erreur lors du chargement des catégories :", error);
    }
  };

  fetchStories();
}, []);


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
  <div className=" bg-gray-50">
    {/* <h1 className="font-extrabold text-center md:text-5xl text-3xl  py-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-blue-400 via-30% to-orange-500 to-90% ... uppercase">
      Catégoeies
    </h1> */}
    <motion.div
      className=" bg-white shadow-sm"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="block py-6 bg-white">
        <h2 className="font-bold text-lg text-slate-900 py-5  px-8 md:px-14">
          Toutes les catégories
        </h2>
        <hr className="text-slate-300 " />
        <StoriesContainer />
      </div>
    </motion.div>
  </div>
);

export default App;