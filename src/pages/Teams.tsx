import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Loading from "@/components/Loading";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
}

const ROLES = [
  "Founder & Executive Pastry Chef",
  "Head Baker / Production Manager",
  "Lead Cake Decorator",
  "Bakery Operations Manager",
  "Quality Assurance & Food Safety Lead",
  "Retail & Front-of-House Manager",
];

export default function Teams() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchTeam = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?results=6&inc=name,email,phone,location,picture,login",
      );

      const formattedMembers: TeamMember[] = response.data.results.map(
        (user: any, index: number) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          role: ROLES[index % ROLES.length],
          email: user.email,
          phone: user.phone,
          location: `${user.location.city}, ${user.location.country}`,
          photo: user.picture.large,
        }),
      );

      setTeam(formattedMembers);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <div className="flex h-100 items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="min-h-screen bg-slate-200 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#EAB308] text-center py-2 rounded-2xl bg-[#1E293B]">
                Our Teams
              </h2>
              <p className="mt-3 text-lg text-[#1E293B]">
                Meet the leaders driving our vision and operations forward.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="bg-slate-300 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-28 h-28 rounded-2xl object-cover mb-4 shadow-2xl"
                  />
                  <h3 className="text-xl font-bold text-[#1E293B]">
                    {member.name}
                  </h3>
                  <span className="text-sm font-semibold text-[#1E293B] mb-3">
                    {member.role}
                  </span>

                  <div className="w-full  pt-3 text-xs text-[#1E293B] space-y-1">
                    <p className="truncate">
                      <span className="font-medium text-[#1E293B]">Email:</span>
                      {member.email}
                    </p>
                    <p>
                      <span className="font-medium text-[#1E293B]">Phone:</span>
                      {member.phone}
                    </p>
                    <p>
                      <span className="font-medium text-[#1E293B]">
                        Location:
                      </span>
                      {member.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
