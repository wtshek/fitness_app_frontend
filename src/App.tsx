import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "##/pages/Home";
import { PATH } from "##/utils/constant";
import { ExerciseGroups } from "##/pages/ExerciseGroups";
import { ExerciseList } from "##/pages/ExerciseList";

const router = createBrowserRouter([
  { path: PATH.HOME, element: <Home /> },
  { path: PATH.EXERCISE, element: <ExerciseGroups /> },
  { path: PATH.EXERCISE_LIST, element: <ExerciseList /> },
]);

function App() {
  return (
    <div className="bg-black min-w-screen min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
