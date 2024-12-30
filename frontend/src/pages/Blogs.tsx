import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { BlogCard, SkeletonBlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const navigate = useNavigate();
  const { loading, blogs } = useBlogs();

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
        <div className="flex justify-center">
          <div>
            <SkeletonBlogCard />
            <SkeletonBlogCard />
            <SkeletonBlogCard />
            <SkeletonBlogCard />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blogId={blog.id}
              authorName={blog.author.username}
              title={blog.title}
              content={blog.content}
              publishDate={blog.publishDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

