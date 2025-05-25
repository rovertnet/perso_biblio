import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { StoryCard } from "./StoryCards";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";


// const stories = [
//   {
//     id: "create",
//     type: "create",
//     userImageUrl:
//       "https://img.freepik.com/photos-gratuite/arrangement-livres-anglais-nature-morte-high-angle_23-2149440476.jpg?t=st=1743944189~exp=1743947789~hmac=290c439660077d50f4e78a919d5b023fee00eb86f3f90d5cd963968e9672f215&w=740",
//     username: "Create Story",
//   },
//   {
//     id: "1",
//     imageUrl:
//       "https://img.freepik.com/photos-gratuite/arrangement-livres-anglais-nature-morte-high-angle_23-2149440476.jpg?t=st=1743944189~exp=1743947789~hmac=290c439660077d50f4e78a919d5b023fee00eb86f3f90d5cd963968e9672f215&w=740",
//     userImageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
//     username: "Sarah Wilson",
//   },
//   {
//     id: "2",
//     imageUrl:
//       "https://img.freepik.com/photos-gratuite/illustration-3d-livre-violet-isole-fond_107791-16378.jpg?t=st=1743944985~exp=1743948585~hmac=6c441479d7a38057f9be06457a173061f6327f1c2f37382b8f0ae570bee22d2c&w=1380",
//     userImageUrl:
//       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
//     username: "Mike Johnson",
//   },
//   {
//     id: "3",
//     imageUrl:
//       "https://img.freepik.com/photos-gratuite/livres-anglais-fond-bleu_23-2149440456.jpg?t=st=1743945131~exp=1743948731~hmac=e9779a51929850aef9ded95b209460cae7f81fb1c98da82a78ed555a8af52990&w=740",
//     userImageUrl:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
//     username: "Emma Davis",
//   },
//   {
//     id: "4",
//     imageUrl:
//       "https://img.freepik.com/photos-gratuite/couverture-du-livre-devant-position-verticale_1101-1118.jpg?t=st=1743945220~exp=1743948820~hmac=e2dffdfacfe1b99d4485c567901f4f0bf808731e4e63d7d2d3fc4d7b60558eb2&w=740",
//     userImageUrl:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
//     username: "John Smith",
//   },
//   {
//     id: "5",
//     imageUrl:
//       "https://img.freepik.com/photos-gratuite/livre-decoratif-fond-bleu_23-2147615011.jpg?t=st=1743945432~exp=1743949032~hmac=4551cc07390baf2ede4450acf7fb49f61490fcc53cf2d5c5aa1a0f21cfe28c5a&w=740",
//     userImageUrl:
//       "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
//     username: "Lisa Anderson",
//   },
//   {
//     id: "5",
//     imageUrl:
//       "https://img.freepik.com/photos-gratuite/disposition-du-dictionnaire-anglais-marqueurs_23-2149440467.jpg?t=st=1743945490~exp=1743949090~hmac=d7683de1723fdfaa7d36d44b3873a153ccdd843889c2466d97663023282e5ffc&w=740",
//     userImageUrl:
//       "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
//     username: "Lisa Anderson",
//   },
//   {
//     id: "5",
//     imageUrl:
//       "https://img.freepik.com/photos-gratuite/livre-3d-rendu-manuel-papier-ferme-versets_107791-16792.jpg?t=st=1743945563~exp=1743949163~hmac=0e6b1ea9cf0d4f398c26df94c95bc6f1af1ebe71456e4c7c4a677063ae723bd3&w=1380",
//     userImageUrl:
//       "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
//     username: "Lisa Anderson",
//   },
//   {
//     id: "5",
//     imageUrl:
//       "https://img.freepik.com/photos-gratuite/livres-anglais-reposant-table-espace-travail_23-2149429582.jpg?t=st=1743946088~exp=1743949688~hmac=3991de9a5b4418e2029b0d823db107640aa3876738384a86c026ffaaef50a324&w=1380",
//     userImageUrl:
//       "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
//     username: "Lisa Anderson",
//   },
//   {
//     id: "5",
//     imageUrl:
//       "https://img.freepik.com/photos-gratuite/illustration-3d-livres-fermes-ouverts-crayon_107791-15848.jpg?t=st=1743945773~exp=1743949373~hmac=89ffcaed66804a7d6b682630a8e8ad6708abf9a3dbb0a2190cfe2c6c1ff6eb7a&w=1380",
//     userImageUrl:
//       "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
//     username: "Lisa Anderson",
//   },
//   {
//     id: "5",
//     imageUrl:
//       "https://img.freepik.com/photos-gratuite/organise-dans-livres-verticaux_1101-119.jpg?t=st=1743946375~exp=1743949975~hmac=224cd5344dc36c42afbe46de77f203a3048983d76cfef09d9f05678603be17a8&w=900",
//     userImageUrl:
//       "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop",
//     username: "Lisa Anderson",
//   },
// ];

export function StoriesCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Erreur lors du chargement des catégories :", err));
  }, []);

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
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="relative flex-shrink-0 cursor-pointer w-[140px] h-[200px] md:w-[160px] md:h-[240px] rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center text-center hover:bg-blue-100 transition"
            >
              <span className="text-sm font-semibold text-slate-800 px-2">{category.name}</span>
            </Link>
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
