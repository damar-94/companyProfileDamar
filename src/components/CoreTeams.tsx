import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";

interface CoreTeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
}

const ROLE_DETAILS = [
  {
    role: "Founder & Executive Pastry Chef",
    bio: "Trained in classic French pâtisserie in Paris with over 12 years of culinary experience. She founded ECA to blend slow-fermentation techniques with authentic Javanese flavors.",
  },
  {
    role: "Head Baker / Production Manager",
    bio: "A master of artisan sourdoughs and viennoiseries. He oversees daily oven operations, managing 36-hour cold fermentations and sourcing 100% pure natural butter.",
  },
];

export default function CoreTeams() {
  const [team, setTeam] = useState<CoreTeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTeam = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${ROLE_DETAILS.length}&inc=name,email,phone,location,picture,login`,
      );

      const formattedMembers: CoreTeamMember[] = response.data.results.map(
        (user: any, index: number) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          role: ROLE_DETAILS[index].role,
          bio: ROLE_DETAILS[index].bio,
          photo: user.picture.large,
        }),
      );

      setTeam(formattedMembers);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch team data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-slate-600 font-medium">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <main className="grow bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#EAB308] text-center py-2 rounded-2xl bg-[#1E293B]">
              The Founders
            </h2>
            <p className="mt-3 text-lg text-[#1E293B]">
              Meet the leaders driving our vision and operations forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-slate-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-slate-200"
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

                <p className="text-xs text-slate-600 leading-relaxed mb-4 px-2">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
