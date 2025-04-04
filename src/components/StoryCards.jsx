import { motion } from "framer-motion";

export function StoryCard({ imageUrl, userImageUrl, username }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative flex-shrink-0 cursor-pointer w-[140px] h-[200px] md:w-[160px] md:h-[240px] rounded-xl overflow-hidden shadow-lg"
    >
      <img
        src={imageUrl}
        alt="Story"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      <div className="absolute top-4 left-4">
        <div className="rounded-full border-4 border-blue-500 p-[2px] bg-white">
          <img
            src={userImageUrl}
            alt={username}
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-white text-sm font-medium truncate">{username}</p>
      </div>
    </motion.div>
  );
}
