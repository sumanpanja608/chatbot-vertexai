import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import ConatctUs from "./pages/ConatctUs";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center bg-white overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="signup" element={<Signup />} />
        <Route path="contact-us" element={<ConatctUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
