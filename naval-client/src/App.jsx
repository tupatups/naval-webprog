import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Layout from "./layouts/Layout";
import ArticlePage from "./pages/LandingPages/ArticlePage";
import HomePage from "./pages/LandingPages/HomePage";
import AboutPage from "./pages/LandingPages/AboutPage";
import ArticleListPage from "./pages/LandingPages/ArticleListPage";

import AuthLayout from "./layouts/AuthLayout";
import SignInPage from "./pages/AuthPages/SignInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";

import DashLayout from "./layouts/DashLayout";
import DashboardPage from "./pages/DashboardPages/DashboardPage";
import ReportsPage from './pages/DashboardPages/ReportsPage';
import UsersPage from './pages/DashboardPages/UsersPage';
import DashArticleListPage from "./pages/DashboardPages/DashArticleListPage";

import NotFoundPage from "./pages/NotFoundPage";

// 1. Add the AdminOnlyRoute component helper
function AdminOnlyRoute({ children }) {
  const type = localStorage.getItem('type'); // Evaluates exactly when the route is visited
  if (type !== 'admin') {
    return <Navigate to="/dashboard" />;
  }
  return children;
}

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "articles", element: <ArticleListPage /> },
      { path: "articles/:name", element: <ArticlePage /> },
    ],
  },
  {
    path: "auth/",
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "signin", element: <SignInPage /> },
      { path: "signup", element: <SignUpPage /> },
    ],
  },
  {
    path: "dashboard/",
    element: <DashLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "", element: <DashboardPage /> },
      { path: "reports", element: <ReportsPage /> },
      { 
        // 2. Wrap your UsersPage in the new protected route component
        path: "users", 
        element: (
          <AdminOnlyRoute>
            <UsersPage />
          </AdminOnlyRoute>
        ) 
      },
      { path: "articles", element: <DashArticleListPage /> }
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;