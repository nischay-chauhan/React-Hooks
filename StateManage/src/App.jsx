import {   createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
import Counter from './components/useState/counter.jsx';
import Home from "./page/Home.jsx";
import ApiCall from "./components/useState/apiCall.jsx";
import Reducer from "./components/useReducer/reducer.jsx";
import Memo from "./components/useMemo&callback/Memo.jsx";
import Effect from "./components/useEffect/Effect.jsx";
import Effect1 from "./components/useEffect/Effect1.jsx";
import UseRef from "./components/useRef/UseRef.jsx";


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
  {
    path : "memo",
    element : <Memo />
  },
  {
    path : "effect",
    element : <Effect />  
  },
  {
    path : "effect1",
    element:<Effect1 />
  },
  {
    path : "ref",
    element : <UseRef />
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