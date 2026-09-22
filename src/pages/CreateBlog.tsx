import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { axiosInstance } from "@/lib/axios";
import { createBlogSchema, type CreateBlogSchema } from "@/schemas/createBlog";
import type { ResponseFileService } from "@/types/backendless";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function CreateBlog() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const form = useForm<CreateBlogSchema>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      author: "",
      content: "",
      thumbnail: undefined,
    },
  });

  async function onSubmit(data: CreateBlogSchema) {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", data.thumbnail);
      const fileName = Date.now() + Math.floor(Math.random() * 1000);
      const folderName = "images";

      const response = await axiosInstance.post<ResponseFileService>(
        `/files/${folderName}/${fileName}`,
        formData,
      );

      await axiosInstance.post("/data/ComproBlogs", {
        title: data.title,
        description: data.description,
        category: data.category,
        author: data.author,
        content: data.content,
        thumbnail: response.data.fileURL,
      });

      alert("Create Article success");

      navigate("/blogpage");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center bg-[url('/cake2.jpg')] bg-cover p-8">
        <h2 className="text-3xl font-bold text-[#EAB308] text-center py-2 px-10 rounded-2xl bg-[#1E293B]">
            Create Article
          </h2>

        <Card className="w-full md:max-w-md bg-white mt-4">
          <CardHeader>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <form id="form-create-blog" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-title">Title</FieldLabel>
                      <Input
                        {...field}
                        id="form-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your title"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="description"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-description">
                        Description
                      </FieldLabel>
                      <Textarea
                        {...field}
                        id="form-description"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your Description"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="category"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-category">Category</FieldLabel>
                      <Input
                        {...field}
                        id="form-category"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your category"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="author"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-author">Author</FieldLabel>
                      <Input
                        {...field}
                        id="form-author"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your author"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="content"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-content">Content</FieldLabel>
                      <Textarea
                        {...field}
                        id="form-content"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your content"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="thumbnail"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-thumbnail">
                        Thumbnail
                      </FieldLabel>
                      <Input
                        type="file"
                        id="form-thumbnail"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your thumbnail"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) field.onChange(file);
                        }}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter>
            <Field orientation="horizontal">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button
                type="submit"
                form="form-create-blog"
                disabled={isLoading}
              >
                {isLoading ? "Loading" : "Submit"}
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </div>
      <Footer/>
    </div>
  );
}

export default CreateBlog;
