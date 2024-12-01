import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-lg overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
