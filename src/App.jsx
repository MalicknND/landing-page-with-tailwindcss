import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="lg:mx-40 sm:mx-20 md:mx-10">
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero />
        </div>
        <Features />
        <Workflow />
        <Pricing />
      </div>
    </>
  );
};

export default App;
