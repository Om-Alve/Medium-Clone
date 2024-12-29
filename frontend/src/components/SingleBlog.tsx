import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const SingleBlogSkeleton = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="h-12 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mt-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mt-4"></div>
            <div className="h-4 bg-gray-200 rounded w-11/12 mt-2"></div>
            <div className="h-4 bg-gray-200 rounded w-10/12 mt-2"></div>
          </div>
          <div className="col-span-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="flex w-full mt-4">
              <div className="pr-4">
                <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
              </div>
              <div>
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SingleBlog = ({ blog }: { blog: Blog }) => {
  const navigate = useNavigate();

  return <div>
    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full px-10">
        <button
          onClick={() => navigate('/blogs')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mt-6 group"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to blogs</span>
        </button>

        <div className="grid grid-cols-12 w-full pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">
              {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
              Post on 2nd December 2023
            </div>
            <div className="pt-4">
              {blog.content}
            </div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">
              Author
            </div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar size="big" username={blog.author.username} />
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.username}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
