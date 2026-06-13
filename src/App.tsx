import Navbar from "./components/layout/Navbar";

import Hero from "./sections/home/Hero";
import TechStack from "./sections/home/TechStack";
import Services from "./sections/home/Services";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <TechStack />
        <Services />
      </main>
    </div>
  );
}

export default App;
