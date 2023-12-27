import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './components/useState/counter.jsx';
import Home from "./page/Home.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useState" element={<Counter />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
