import Header from "./components/Header";
import ExploreIndonesia from "./components/ExploreIndonesia";
import TheWalkways from "./components/TheWalkways";
import PerfectBeaches from "./components/PerfectBeaches";
import ExploreOurSecrets from "./components/ExploreOurSecrets";
import OurHills from "./components/OurHills";
import LiveALife from "./components/LiveALife";
import PhotoGallery from "./components/PhotoGallery";
import GettingThere from "./components/GettingThere";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />

      {/* banner */}
      <ExploreIndonesia />

      {/* dark blue section */}
      <TheWalkways />
      <PerfectBeaches />

      {/* slider & dark blue section */}
      <ExploreOurSecrets />

      {/* white section */}
      <OurHills />

      {/* dark blue section (becak img) */}
      <LiveALife />

      {/* white section */}
      <PhotoGallery />

      {/* light blue section */}
      <GettingThere />

      {/* sticky btn in bottom-left */}
      <BackToTop />

      <Footer />
    </>
  );
};

export default App;
