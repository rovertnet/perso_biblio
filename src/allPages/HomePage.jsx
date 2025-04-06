
import CatSection from "../components/body/CatSection";
import HeroSection from "../components/body/HeroSection";
import NewsLetter from "../components/body/NewsLetter";
import Populaires from "../components/body/Populaires";
import TopBooks from "../components/body/TopBooks";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CatSection />
      <TopBooks />
      <Populaires />
      <NewsLetter />
    </>
  );
}
