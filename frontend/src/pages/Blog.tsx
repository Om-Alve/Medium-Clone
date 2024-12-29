import { useParams } from "react-router-dom";
import { SingleBlog, SingleBlogSkeleton } from "../components/SingleBlog"
import { useBlog } from "../hooks"
import { AppBar } from "../components/AppBar";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

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
