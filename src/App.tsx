import WhatsAppChat from "./components/common/WhatsAppChat";
import VaultMindAI from "./components/common/VaultMindAI";

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

      <VaultMindAI />

      <Footer />

      <WhatsAppChat />

      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
}

export default App;
