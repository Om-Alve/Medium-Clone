import { AppBar } from "../components/AppBar"
import { BlogCard, SkeletonBlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>
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
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => {
            return (<BlogCard key={blog.id} blogId={blog.id} authorName={blog.author.username} title={blog.title} content={blog.content} publishedDate={"29th Dec 2024"} />)
          })}
        </div>
      </div>
    </div>
  )
}
