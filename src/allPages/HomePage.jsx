
import Client from "../components/body/accueil/Client";
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
      <Client />
      <NewsLetter />
    </>
  );
}
