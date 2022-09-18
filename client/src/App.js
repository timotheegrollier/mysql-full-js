import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Language from "./pages/Language";
import List from "./pages/List";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/:id" element={<Language />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
