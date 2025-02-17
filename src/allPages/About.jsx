import AboutBanner from "../components/body/about/AboutBanner";
import AboutSection from "../components/body/about/AboutSection";
import ScrollSnap from "../components/body/about/cardScroll/ScrollSnap";
import PartenairesView from "../components/body/PartenairesView";

export default function About() {
  return (
    <>
      <AboutBanner />
      <AboutSection />
      <ScrollSnap />
      <PartenairesView />
    </>
  );
}
