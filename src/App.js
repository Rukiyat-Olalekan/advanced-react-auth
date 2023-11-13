// import { useContext } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Root";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
// import ErrorPage from "./pages/errorPage";
// import AuthContext from "./store/AuthContext";

// const ctx = useContext(AuthContext)

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Root/>}>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/auth" element={<AuthPage/>}></Route>
  <Route path="/profile" element={<UserProfile/>}></Route>
</Route>));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "/auth",
//         element: <AuthPage />,
//       },
//       {
//         path: "/profile",
//         element: <UserProfile />,
//       },
//     ],
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
