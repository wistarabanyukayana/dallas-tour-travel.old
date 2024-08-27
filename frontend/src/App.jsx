import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import PageNotFound from "./pages/PageNotFound";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Topbar />
          <Navbar />
          <Sidebar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
