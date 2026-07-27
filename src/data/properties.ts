export type GalleryRoom = {
  room: string;
  image: string;
};

export type Property = {
  id: string;
  name: string;
  city: string;
  location: string;
  /** Price in ₹ Crore, used for sorting */
  price: number;
  priceLabel: string;
  beds: number;
  baths: number;
  sqft: number;
  tag: "3D Tour" | "360° Tour";
  image: string;
  gallery: GalleryRoom[];
  description: string;
  amenities: string[];
  status: "Ready to Move" | "Under Construction";
  rera: string;
};

export const properties: Property[] = [
  {
    id: "bandra-sky-residence",
    name: "The Bandra Sky Residence",
    city: "Mumbai",
    location: "Bandra West, Mumbai",
    price: 8.5,
    priceLabel: "₹8.5 Cr",
    beds: 4,
    baths: 5,
    sqft: 3200,
    tag: "360° Tour",
    image: "/properties/bandra-sky-residence/exterior.jpg",
    gallery: [
      { room: "Exterior", image: "/properties/bandra-sky-residence/exterior.jpg" },
      { room: "Living Room", image: "/properties/bandra-sky-residence/living-room.jpg" },
      { room: "Kitchen", image: "/properties/bandra-sky-residence/kitchen.jpg" },
      { room: "Bedroom", image: "/properties/bandra-sky-residence/bedroom.jpg" },
      { room: "Bathroom", image: "/properties/bandra-sky-residence/bathroom.jpg" },
      { room: "Sea View Balcony", image: "/properties/bandra-sky-residence/balcony.jpg" },
    ],
    description:
      "A sky-high residence overlooking the Bandra coastline, where floor-to-ceiling glass frames the Arabian Sea from every room. Fully renovated with Italian marble, a private sky lounge, and smart home controls throughout.",
    amenities: [
      "Sea-Facing Balcony",
      "Clubhouse Access",
      "24x7 Security",
      "Home Automation",
      "Covered Parking",
      "Power Backup",
    ],
    status: "Ready to Move",
    rera: "MahaRERA A51800012345",
  },
  {
    id: "whitefield-green-villa",
    name: "Whitefield Green Villa",
    city: "Bangalore",
    location: "Whitefield, Bangalore",
    price: 3.4,
    priceLabel: "₹3.4 Cr",
    beds: 4,
    baths: 4,
    sqft: 3800,
    tag: "3D Tour",
    image: "/properties/whitefield-green-villa/exterior.jpg",
    gallery: [
      { room: "Exterior", image: "/properties/whitefield-green-villa/exterior.jpg" },
      { room: "Living Room", image: "/properties/whitefield-green-villa/living-room.jpg" },
      { room: "Kitchen", image: "/properties/whitefield-green-villa/kitchen.jpg" },
      { room: "Bedroom", image: "/properties/whitefield-green-villa/bedroom.jpg" },
      { room: "Bathroom", image: "/properties/whitefield-green-villa/bathroom.jpg" },
      { room: "Private Garden", image: "/properties/whitefield-green-villa/garden.jpg" },
    ],
    description:
      "Tucked into a tech-park-adjacent green pocket of Whitefield, this villa pairs a landscaped private garden with light-filled interiors and a modular kitchen built for entertaining.",
    amenities: [
      "Private Garden",
      "Modular Kitchen",
      "Clubhouse Access",
      "Gymnasium",
      "Rainwater Harvesting",
      "Covered Parking",
    ],
    status: "Ready to Move",
    rera: "RERA/KA/RN/1251/446/PR/180622/002145",
  },
  {
    id: "jubilee-hills-manor",
    name: "Jubilee Hills Manor",
    city: "Hyderabad",
    location: "Jubilee Hills, Hyderabad",
    price: 6.2,
    priceLabel: "₹6.2 Cr",
    beds: 5,
    baths: 6,
    sqft: 5500,
    tag: "3D Tour",
    image: "/properties/jubilee-hills-manor/exterior.jpg",
    gallery: [
      { room: "Exterior", image: "/properties/jubilee-hills-manor/exterior.jpg" },
      { room: "Living Room", image: "/properties/jubilee-hills-manor/living-room.jpg" },
      { room: "Kitchen", image: "/properties/jubilee-hills-manor/kitchen.jpg" },
      { room: "Bedroom", image: "/properties/jubilee-hills-manor/bedroom.jpg" },
      { room: "Bathroom", image: "/properties/jubilee-hills-manor/bathroom.jpg" },
      { room: "Private Lawn", image: "/properties/jubilee-hills-manor/lawn.jpg" },
    ],
    description:
      "An address synonymous with old-money Hyderabad, this manor sits on a quiet tree-lined avenue in Jubilee Hills with a private lawn, a formal living wing, and staff quarters.",
    amenities: [
      "Private Lawn",
      "Servant Quarters",
      "Vastu Compliant",
      "24x7 Security",
      "Power Backup",
      "EV Charging Point",
    ],
    status: "Ready to Move",
    rera: "TS RERA P02400002891",
  },
  {
    id: "assagao-courtyard-villa",
    name: "Assagao Courtyard Villa",
    city: "Goa",
    location: "Assagao, North Goa",
    price: 4.8,
    priceLabel: "₹4.8 Cr",
    beds: 4,
    baths: 4,
    sqft: 4200,
    tag: "360° Tour",
    image: "/properties/assagao-courtyard-villa/exterior.jpg",
    gallery: [
      { room: "Exterior", image: "/properties/assagao-courtyard-villa/exterior.jpg" },
      { room: "Living Room", image: "/properties/assagao-courtyard-villa/living-room.jpg" },
      { room: "Kitchen", image: "/properties/assagao-courtyard-villa/kitchen.jpg" },
      { room: "Bedroom", image: "/properties/assagao-courtyard-villa/bedroom.jpg" },
      { room: "Bathroom", image: "/properties/assagao-courtyard-villa/bathroom.jpg" },
      { room: "Plunge Pool", image: "/properties/assagao-courtyard-villa/pool.jpg" },
    ],
    description:
      "A Portuguese-influenced courtyard villa minutes from Assagao's village lanes, built around a private plunge pool and shaded verandas that catch the evening breeze off the Chapora river.",
    amenities: [
      "Private Plunge Pool",
      "Landscaped Garden",
      "Covered Parking",
      "Power Backup",
      "24x7 Security",
      "Rainwater Harvesting",
    ],
    status: "Ready to Move",
    rera: "GOA/RERA/PROJ/2024/00187",
  },
  {
    id: "vasant-vihar-residence",
    name: "Vasant Vihar Residence",
    city: "Delhi",
    location: "Vasant Vihar, New Delhi",
    price: 9.1,
    priceLabel: "₹9.1 Cr",
    beds: 5,
    baths: 5,
    sqft: 4600,
    tag: "3D Tour",
    image: "/properties/vasant-vihar-residence/exterior.jpg",
    gallery: [
      { room: "Exterior", image: "/properties/vasant-vihar-residence/exterior.jpg" },
      { room: "Living Room", image: "/properties/vasant-vihar-residence/living-room.jpg" },
      { room: "Kitchen", image: "/properties/vasant-vihar-residence/kitchen.jpg" },
      { room: "Bedroom", image: "/properties/vasant-vihar-residence/bedroom.jpg" },
      { room: "Bathroom", image: "/properties/vasant-vihar-residence/bathroom.jpg" },
      { room: "Private Pool", image: "/properties/vasant-vihar-residence/pool.jpg" },
    ],
    description:
      "A diplomatic-enclave residence in Vasant Vihar built around a private pool and terraced lawn, with a formal dining wing suited to hosting and a discreet, security-forward layout.",
    amenities: [
      "Private Pool",
      "Landscaped Garden",
      "24x7 Security",
      "Home Automation",
      "Power Backup",
      "Covered Parking",
    ],
    status: "Ready to Move",
    rera: "DLRERA2024P0034521",
  },
  {
    id: "koregaon-park-estate",
    name: "Koregaon Park Estate",
    city: "Pune",
    location: "Koregaon Park, Pune",
    price: 3.9,
    priceLabel: "₹3.9 Cr",
    beds: 4,
    baths: 4,
    sqft: 3600,
    tag: "3D Tour",
    image: "/properties/koregaon-park-estate/exterior.jpg",
    gallery: [
      { room: "Exterior", image: "/properties/koregaon-park-estate/exterior.jpg" },
      { room: "Living Room", image: "/properties/koregaon-park-estate/living-room.jpg" },
      { room: "Kitchen", image: "/properties/koregaon-park-estate/kitchen.jpg" },
      { room: "Bedroom", image: "/properties/koregaon-park-estate/bedroom.jpg" },
      { room: "Bathroom", image: "/properties/koregaon-park-estate/bathroom.jpg" },
      { room: "Private Courtyard", image: "/properties/koregaon-park-estate/courtyard.jpg" },
    ],
    description:
      "Set on a leafy Koregaon Park lane, this estate blends Pune's old-world charm with a fully modernised interior — exposed wood beams, a sunken living room, and a private courtyard garden.",
    amenities: [
      "Private Courtyard",
      "Modular Kitchen",
      "Gymnasium",
      "24x7 Security",
      "Power Backup",
      "Covered Parking",
    ],
    status: "Ready to Move",
    rera: "P52100012876",
  },
];

export const cities = ["All Cities", ...properties.map((p) => p.city)];
