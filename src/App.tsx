import Navbar from "./components/layout/Navbar";
import Hero from "./sections/home/Hero";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
