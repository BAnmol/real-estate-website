export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "ananya",
    quote:
      "We toured twelve homes in one evening without leaving our couch. Found the one in 3D, confirmed it in person the next day. ARIS changed how we house-hunt.",
    name: "Ananya Sharma",
    role: "Homebuyer, Bangalore",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "karan",
    quote:
      "The 3D staging sold our listing in nine days. Buyers could picture themselves in the space instantly — no guesswork, no empty rooms.",
    name: "Karan Mehta",
    role: "Seller, Pune",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "priya",
    quote:
      "As an NRI buyer based in Dubai, the virtual walkthroughs were the entire reason I could commit with confidence before flying in.",
    name: "Priya Nair",
    role: "Homebuyer, Chennai",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];
