import { Footer } from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import type { Blog } from "@/types/blog";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function BlogDetail() {
  const params = useParams();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBlog = async () => {
    try {
      const { data } = await axiosInstance.get<Blog>(
        `data/ComproBlogs/${params.objectId}`,
      );
      setBlog(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getBlog();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-100 items-center justify-center">
        <Loading/>
      </div>
    );
  }

  if (!blog) {
    return (
      <div>
        <p>Blog not Found</p>
        <Link to="/">
          <Button>Go to Homepage</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <section className="bg-[#EAB308] px-6 py-16 sm:px-8 lg:px-20">
          <div className="mx-auto max-w-5xl">
            <span className="inline-block rounded-full bg-[#1E293B] px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white">
              {blog?.category}
            </span>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {blog?.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-700">
              <span className="font-semibold">By {blog?.author}</span>

              <span className="text-slate-500">•</span>

              <span>Article</span>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-20">
          {blog?.thumbnail && (
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="h-62.5 w-full object-cover sm:h-[400px] lg:h-[500px]"
              />
            </div>
          )}

          <div className="mx-auto mt-10 max-w-3xl">
            <p className="text-xl font-medium leading-8 text-slate-700 sm:text-2xl">
              {blog?.description}
            </p>

            <div className="my-8 h-px bg-slate-200" />

            <div className="prose prose-slate max-w-none">
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                {blog?.content}
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
export default BlogDetail;
