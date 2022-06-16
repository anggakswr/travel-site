import Header from "./components/Header";
import ExploreIndonesia from "./components/ExploreIndonesia";
import TheWalkways from "./components/TheWalkways";
import PerfectBeaches from "./components/PerfectBeaches";

const App = () => {
  return (
    <>
      <Header />

      {/* banner */}
      <ExploreIndonesia />

      {/* dark blue section */}
      <TheWalkways />
      <PerfectBeaches />
    </>
  );
};

export default App;
