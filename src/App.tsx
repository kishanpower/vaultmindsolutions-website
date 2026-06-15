import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { Toaster } from "react-hot-toast";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div
      className="
        min-h-screen
        bg-white
        text-slate-900

        dark:bg-slate-950
        dark:text-white

        transition-colors
        duration-300
      "
    >
      <Navbar />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
  <Toaster position="top-right" />
}

export default App;
