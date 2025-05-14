import { createBrowserRouter, Navigate } from "react-router-dom";
import { signupPageRoute } from "../pages/SignupPage.jsx";
import { homePageRoute } from "../pages/HomePage.jsx";
import { RootLayout } from "../layout/RootLayout.jsx";
import { noteFormRoute } from "../pages/NoteForm.jsx";
import { noteRoute } from "../pages/Note.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";
import { loginPageRoute } from "../pages/LoginPage.jsx";
import { NavLayout } from "../layout/NavLayout.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import { WithoutLoginHomePage } from "../pages/WithoutLoginHomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <Navigate to="/notes" replace /> },
      { index: true, element: <WithoutLoginHomePage /> },
      { path: "/login", ...loginPageRoute },
      { path: "/signup", ...signupPageRoute },
      {
        path: "/notes",
        element: (
          <PrivateRoute>
            <NavLayout />
          </PrivateRoute>
        ),
        children: [
          { index: true, ...homePageRoute },
          { path: "create", ...noteFormRoute },
          { path: ":id", ...noteRoute },
          { path: "update/:id", ...noteFormRoute },
        ],
      },
    ],
  },
]);

export default router;
