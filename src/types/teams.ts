export interface RandomUserApiResponse {
  results: Array<{
    gender: string;
    name: { first: string; last: string; title: string };
    location: { city: string; state: string; country: string };
    email: string;
    phone: string;
    picture: { large: string; medium: string; thumbnail: string };
    login: { uuid: string };
  }>;
}

export interface ManagementMember {
  id: string;
  fullName: string;
  roleTitle: string;
  department: 'Executive' | 'Engineering' | 'Product' | 'Design' | 'People & HR';
  email: string;
  phone: string;
  location: string;
  country: string;
  avatar: string;
  largeAvatar: string;
  joinedYear: number;
  bio: string;
  skills: string[];
}