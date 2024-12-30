import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Blog } from './pages/Blog';
import { Blogs } from './pages/Blogs';
import { Publish } from "./pages/Publish";

function App() {

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token && token !== "";
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuthenticated() ? <Navigate to="/blogs" /> : <Navigate to="/signin" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
