import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { Link } from "react-router";


function RegisterPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axiosInstance.post("/users/register", {
        name,
        email,
        password,
      });
      alert("register success!");
    } catch (error) {
      console.log(error);
      alert("register failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-100 h-screen">
      <Navbar />
      <section className="w-100 mx-auto mt-20 p-8 space-y-4 shadow-2xl rounded-2xl text-[#1E293B]">
        <h1 className="text-[#EAB308] text-3xl">Register Page</h1>
        <Label>Name</Label>
        <Input type="text" onChange={(e) => setName(e.target.value)} />

        <Label>Email</Label>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />

        <Label>Password</Label>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />

        <div className="flex justify-center flex-col mt-10">
          <Button
            className="bg-[#1E293B] hover:bg-[#EAB308]"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Loading" : "Submit"}
          </Button>
          <Button
            className="bg-slate-300 text-[#1E293B] hover:bg-[#EAB308] mt-10"
            disabled={isLoading}
          >
            <Link to="/login">
            {isLoading ? "Loading" : "Login"}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;
