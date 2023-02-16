import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "##/pages/Home";
import { PATH } from "##/utils/constant";
import { Exercise } from "##/pages/Exercise";

const router = createBrowserRouter([
  { path: PATH.HOME, element: <Home /> },
  { path: PATH.EXERCISE, element: <Exercise /> },
]);

function App() {
  return (
    <div className="bg-black min-w-screen min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
