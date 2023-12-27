import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './components/useState/counter.jsx';
import Home from "./page/Home.jsx";
import ApiCall from "./components/useState/apiCall.jsx";


function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/useState" element={<Counter />}>   </Route>
    <Route path="/apicall" element={<ApiCall />} />

</Routes>

  </BrowserRouter>
  );
}

export default App;
