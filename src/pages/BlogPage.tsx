import { Footer } from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@/stores/useAuth";
import type { Blog } from "@/types/blog";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { user, logout } = useAuth();

  console.log("ini isi state blogs: ", blogs);

  const getBlogs = async () => {
    try {
      const { data } = await axiosInstance.get<Blog[]>("/data/ComproBlogs");
      setBlogs(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-[#1E293B]/60 bg-[url('/cake3.jpg')] bg-cover bg-blend-multiply">
      <Navbar />

      <section className="bg-slate-300 px-6 py-10 md:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1E293B]">
              Blog
            </p>

            <h1 className="mt-1 text-4xl font-bold tracking-tight text-[#1E293B] md:text-5xl">
              Articles
            </h1>

            <p className="mt-2 max-w-xl text-[#1E293B]">
              Discover our latest articles, tips, and insights.
            </p>
          </div>

          <div>
            {user ? (
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="rounded-xl bg-white/80 px-5 py-3 shadow-sm">
                  <p className="text-sm text-slate-600">Welcome back,</p>

                  <h2 className="font-bold text-[#1E293B]">{user.name}</h2>
                </div>

                <div className="flex gap-2">
                  <Link to="/createblog">
                    <Button className="bg-[#1E293B] text-white hover:bg-[#EAB308] hover:text-[#1E293B]">
                      Create Article
                    </Button>
                  </Link>

                  <Button
                    onClick={logout}
                    variant="destructive"
                    
                  >
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <Button className="bg-[#1E293B] text-white hover:bg-[#EAB308] hover:text-[#1E293B]">
                  Login Here
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-12 md:px-20">
        {isLoading ? (
          <div className="flex h-100 items-center justify-center">
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {blogs.map((blog) => {
              return (
                <Link
                  key={blog.objectId}
                  to={`/blogs/${blog.objectId}`}
                  className="group"
                >
                  <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-300 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl">
                    <div className="mb-4">
                      <span className="rounded-full bg-[#1E293B] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#EAB308]">
                        {blog.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#1E293B]transition-colors group-hover:text-[#EAB308]">
                      {blog.title}
                    </h2>

                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">
                      {blog.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <p className="text-sm font-medium text-[#1E293B]">
                        By {blog.author}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Read article →
                      </p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </main>
      <Footer/>
    </div>
  );
}

export default BlogPage;
