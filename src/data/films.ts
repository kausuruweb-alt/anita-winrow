export interface Film {
  id: string;
  title: string;
  year?: string;
  image: string;
  status?: string;
  description?: string;
  aspect?: "portrait" | "landscape" | "square";
}

export const FILMS: Film[] = [
  {
    id: "f1",
    title: "Mother Mary",
    year: "2026",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop",
    aspect: "portrait",
  },
  {
    id: "f2",
    title: "The Drama",
    year: "2026",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    aspect: "landscape",
  },
  {
    id: "f3",
    title: "Undertone",
    year: "2026",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
    aspect: "landscape",
  },
  {
    id: "f4",
    title: "How to Make a Killing",
    year: "2026",
    image: "https://images.unsplash.com/photo-1542204112-1630f824330f?q=80&w=1000&auto=format&fit=crop",
    aspect: "portrait",
  },
  {
    id: "f5",
    title: "Pillion",
    year: "2026",
    image: "https://images.unsplash.com/photo-1611162664215-ca711f44cb4b?q=80&w=1000&auto=format&fit=crop",
    aspect: "square",
  },
  {
    id: "f6",
    title: "The Moment",
    year: "2026",
    image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=1000&auto=format&fit=crop",
    aspect: "portrait",
  },
  {
    id: "f7",
    title: "Marty Supreme",
    year: "2025",
    image: "https://images.unsplash.com/photo-1505373633519-011239250b7b?q=80&w=1000&auto=format&fit=crop",
    aspect: "portrait",
  },
  {
    id: "f8",
    title: "Eternity",
    year: "2025",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
    aspect: "landscape",
  },
  {
    id: "f9",
    title: "If I Had Legs I'd Kick You",
    year: "2025",
    image: "https://images.unsplash.com/photo-1559131397-f94da358f7ca?q=80&w=1000&auto=format&fit=crop",
    aspect: "landscape",
  },
];

export const UPCOMING_FILMS: Film[] = [
  {
    id: "u1",
    title: "Backrooms",
    status: "COMING SOON",
    image: "https://assets-prd.ignimgs.com/2025/03/07/backrooms-supermarket-horror-button-1741368716969.jpg?crop=1:1%2Csmart&format=jpg&auto=webp&quality=80",
    aspect: "landscape",
  },
  {
    id: "u2",
    title: "The Death of Robin Hood",
    status: "COMING SOON",
    image: "https://www.irishfilmcritic.com/wp-content/uploads/2026/01/The-Death-of-Robin-Hood.jpg",
    aspect: "landscape",
  },
  {
    id: "u3",
    title: "The Invite",
    status: "COMING SOON",
    image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/08/TheInvitation.jpg",
    aspect: "landscape",
  },
  {
    id: "u4",
    title: "Tony",
    status: "COMING SOON",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    aspect: "landscape",
  },
];
