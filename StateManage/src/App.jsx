import {   createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
import Counter from './components/useState/counter.jsx';
import Home from "./page/Home.jsx";
import ApiCall from "./components/useState/apiCall.jsx";
import Reducer from "./components/useReducer/reducer.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'usestate',
    element: <Counter />,
  },
  {
    path: 'apicall',
    element: <ApiCall />,
  },
  {
    path: 'reducer',
    element: <Reducer />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/usestate" element={<Counter />}>   </Route>
  <Route path="/apicall" element={<ApiCall />} />
  <Route path="/reducer" element={<Reducer />} />

</Routes>

  </BrowserRouter> */}