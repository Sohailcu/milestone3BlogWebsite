import AnnoucementBar from "./components/AnnoucementBar";
import HeroSection from "./components/HeroSection";
import BlogSection from "./components/BlogSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <AnnoucementBar />
      <Navbar />
      <HeroSection />
      <BlogSection />
      <Footer/>
    </div>
  );
}
