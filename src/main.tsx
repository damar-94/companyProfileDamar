import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import RegisterPage from './pages/RegisterPage';
import { MenusPage } from './pages/MenusPage';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import Teams from './pages/Teams';
import BlogDetail from './pages/BlogDetail';
import BlogPage from './pages/BlogPage';
import CreateBlog from './pages/CreateBlog';
import { authLoader } from './loaders/auth';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/menus",
    element: <MenusPage/>
  },
  {
    path: "/teams",
    element: <Teams/>
  },
  {
    path: "/blogpage",
    element: <BlogPage/>
  },
  {
    path: "/blogs/:objectId",
    element: <BlogDetail/>
  },

  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/createblog",
    element: <CreateBlog/>,
    loader:authLoader
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
