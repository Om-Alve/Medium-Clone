import { Link } from "react-router-dom";

interface BlogProps {
  authorName: string
  title: string
  content: string
  publishedDate: string
  blogId: string
}


export const SkeletonBlogCard = () => {
  return (
    <div className="p-4 border-b border-slate-200 animate-pulse w-screen max-w-screen-lg">
      <div className="flex">
        {/* Avatar Skeleton */}
        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        <div className="flex flex-col justify-center pl-2 w-20">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
        <div className="flex flex-col justify-center px-2">
          <div className="h-1 w-1 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex flex-col justify-center w-16">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
      <div className="pt-2">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-200 rounded w-full"></div>
      </div>
      <div className="pt-2">
        {/* Content Skeleton */}
        <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="pt-4">
        {/* Read Time Skeleton */}
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
};
export const BlogCard = ({ authorName, title, content, publishedDate, blogId }: BlogProps) => {
  return (
    <Link to={`/blog/${blogId}`}>
      <div className="p-4 border-b border-slate-200 w-screen max-w-screen-lg">
        <div className="flex">
          <Avatar username={authorName} size="small" />
          <div className="flex flex-col justify-center font-extralight pl-2 text-sm">
            {authorName}
          </div>
          <div className="flex flex-col justify-center">
            <Circle />
          </div>
          <div className="flex flex-col justify-center font-thin text-slate-400 text-sm">
            {publishedDate}
          </div>

        </div>
        <div className="pt-2 text-2xl font-semibold">
          {title}
        </div>
        <div className="text-md font-thin text-slate-500">
          {content.slice(0, 100) + '...'}
        </div>
        <div className="text-sm pt-4 font-light text-slate-500">
          {`${Math.ceil((content.length / 100))} minute(s) read`}
        </div>

      </div>
    </Link>
  )
}

const Circle = () => {
  return (
    <div className="flex flex-col justify-center px-2">
      <div className="h-1 w-1 bg-gray-400 rounded-full">
      </div>
    </div>
  )
}

export function Avatar({ username, size = "small" }: { username: string, size?: "small" | "big" }) {
  return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
      {username[0].toUpperCase()}
    </span>
  </div>
} 
