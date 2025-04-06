import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="block h-screen w-full py-32 px-8 md:px-32 hero object-cover md:object-cover flex flex-col justify-center items-center">
      <motion.h1
        className="font-extrabold text-center text-base md:text-3xl text-blue-200 uppercase mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Bienvenue à la grande bibliothèque de la République Démocratique du
        Congo
      </motion.h1>
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <button className="font-bold cursor-pointer hover:bg-black hover:border-0 text-lg md:text-xl text-white border-[1px] border-white rounded-xl py-2 md:py-4 px-4 md:px-6">
          Contactez-nous
        </button>
      </motion.div>
    </div>
  );
}
