import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAuth } from "@/stores/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "@/schemas/login";
import { axiosInstance } from "@/lib/axios";
import { Link, useNavigate } from "react-router";

function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { login } = useAuth();

  const { register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const handleLogin = async (values: LoginSchema) => {
    setIsLoading(true);
    try {
      const { data } = await axiosInstance.post("/users/login", {
        login: values.email,
        password: values.password,
      });

      login({
        name: data.name,
        email: data.email,
        objectId: data.objectId,
        token: data["user-token"],
      });

      alert("Login Success!");
      navigate("/blogpage");
    } catch (error) {
      console.log(error);
      alert("Login Failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="bg-slate-100 h-screen">
        <Navbar />
        <section className="w-100 mx-auto mt-20 p-8 space-y-4 shadow-2xl rounded-2xl text-[#1E293B]">
          <h1 className="text-[#EAB308] text-3xl">Login Page</h1>

          <Label>Email</Label>
          <Input type="email" {...register("email")} />
          {formState.errors.email && (
            <p className="text-red-500 text-sm">
              {formState.errors.email.message}
            </p>
          )}

          <Label>Password</Label>
          <Input type="password" {...register("password")} />
          {formState.errors.password && (
            <p className="text-red-500 text-sm">
              {formState.errors.password.message}
            </p>
          )}
          <div className="flex justify-center flex-col mt-10">
            <Button
              type="submit"
              className="bg-[#1E293B] hover:bg-[#EAB308]"
              disabled={isLoading}
            >
              {isLoading ? "Loading" : "Submit"}
            </Button>

            <Button
              className="bg-slate-300 text-[#1E293B] hover:bg-[#EAB308] mt-10"
              disabled={isLoading}
            >
              <Link to="/register">
                {isLoading ? "Loading" : "Create Account"}
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </form>
  );
}

export default LoginPage;
