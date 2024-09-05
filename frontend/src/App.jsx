import { useOutlet } from "react-router-dom";

// components
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// homepage
import HomePage from "./pages/HomePage";

function App() {
  const outlet = useOutlet();

  return (
    <div className="wrapper">
      <Topbar />
      <Navbar />
      <Sidebar />
      {!outlet ? <HomePage /> : outlet}
      <Footer />
    </div>
  );
}

export default App;
