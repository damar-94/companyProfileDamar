import { Link } from "react-router";
import { Button } from "./ui/button";

function BlogNotFound() {
  return (
    <div className="flex justify-center flex-col items-center h-screen bg-slate-300">
      <div className="bg-slate-600 px-6 py-4 rounded-2xl flex flex-col items-center">
        <p className="text-3xl text-[#EAB308] font-bold m-4">Article not Found</p>
        <Link to="/blogpage">
          <Button className="bg-[#1E293B] hover:bg-[#EAB308]">
            Go to Articles
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default BlogNotFound;
