export interface ShopItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: "fashion" | "music" | "books" | "objects";
  price: string;
  tag?: string;
}

export const SHOP_DATA: ShopItem[] = [
  {
    id: "s1",
    title: "Anita Winrow LOGO TEE: FOREST",
    subtitle: "Classic logo on heavyweight cotton",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    category: "fashion",
    price: "$35.00",
    tag: "ESSENTIAL",
  },
  {
    id: "s2",
    title: "TALK TO ME SOUNDTRACK LP",
    subtitle: "Original score by Cornel Wilczek",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop",
    category: "music",
    price: "$28.00",
    tag: "VINYL",
  },
  {
    id: "s3",
    title: "BEAU IS AFRAID PAJAMAS",
    subtitle: "As seen on Arthur Fleck",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    category: "fashion",
    price: "$95.00",
    tag: "RESTOCK",
  },
  {
    id: "s4",
    title: "STOP MAKING SENSE BLU-RAY",
    subtitle: "4K Restoration of the concert film",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
    category: "music",
    price: "$40.00",
    tag: "NEW",
  },
  {
    id: "s5",
    title: "MAY DECEMBER SCREENPLAY",
    subtitle: "By Samy Burch",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop",
    category: "books",
    price: "$50.00",
    tag: "BOOKS",
  },
  {
    id: "s6",
    title: "Anita Winrow LOGO HAT: BLACK",
    subtitle: "Classic logo embroidery",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
    category: "fashion",
    price: "$30.00",
    tag: "ACCESSORIES",
  },
  {
    id: "s7",
    title: "X ORIGINAL SCORE LP",
    subtitle: "By Tyler Bates & Chelsea Wolfe",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop",
    category: "music",
    price: "$32.00",
    tag: "VINYL",
  },
  {
    id: "s8",
    title: "PEARL POSTER TEE",
    subtitle: "Limited edition graphics",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    category: "fashion",
    price: "$48.00",
    tag: "NEW",
  },
];
