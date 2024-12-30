import { useNavigate, useParams } from "react-router-dom";
import { SingleBlog, SingleBlogSkeleton } from "../components/SingleBlog"
import { useBlog } from "../hooks"
import { AppBar } from "../components/AppBar";
import { useEffect } from "react";

export const Blog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);


  if (loading) {
    return (
      <div>
        <AppBar />
        <div>
          <SingleBlogSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div>
      <AppBar />
      <div>
        <SingleBlog blog={blog} />
      </div>
    </div>
  )
}
