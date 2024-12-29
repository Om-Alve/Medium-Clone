import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const AppBar = () => {
  return (
    <div className="sticky top-0 border-b border-gray-300 flex justify-between px-10 py-4 bg-white z-50">
      <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">Medium Clone</Link>
      <div>
        <Link to={'/publish'}>
          <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New Blog</button>
        </Link>
        <Avatar username="Om" size="big" />
      </div>
    </div>
  );
};

