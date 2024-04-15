import Navbar from "./components/navbar";
import SimpleAnimations from "./components/simpleAnimations";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from './pages/AboutPage';
import Portfolio from "./pages/port";
import { AnimatePresence } from "framer-motion";
// import "./App.css";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
