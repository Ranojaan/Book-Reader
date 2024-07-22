import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Library from "./pages/Library";
import Setting from "./pages/Setting";
import Logout from "./pages/Logout";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/library" element={<Library />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
