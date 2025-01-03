import HeroSection from "./components/HeroSection";
import BlogSection from "./components/BlogSection";
import AnnouncementBar from "./components/AnnoucementBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div>
      <AnnouncementBar/>
      <Navbar />
      <HeroSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
