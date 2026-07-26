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
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      {
        room: "Exterior",
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Living Room",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Kitchen",
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Bathroom",
        image:
          "https://images.unsplash.com/photo-1600607688066-890987f18a86?q=80&w=1400&auto=format&fit=crop",
      },
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
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      {
        room: "Exterior",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Living Room",
        image:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Kitchen",
        image:
          "https://images.unsplash.com/photo-1601760561441-16420502c7e0?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Bathroom",
        image:
          "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=1400&auto=format&fit=crop",
      },
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
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      {
        room: "Exterior",
        image:
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Living Room",
        image:
          "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Kitchen",
        image:
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Bathroom",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1400&auto=format&fit=crop",
      },
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
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      {
        room: "Exterior",
        image:
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Living Room",
        image:
          "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Kitchen",
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Bathroom",
        image:
          "https://images.unsplash.com/photo-1600607688066-890987f18a86?q=80&w=1400&auto=format&fit=crop",
      },
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
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      {
        room: "Exterior",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Living Room",
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Kitchen",
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Bedroom",
        image:
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1400&auto=format&fit=crop",
      },
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
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      {
        room: "Exterior",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Living Room",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Kitchen",
        image:
          "https://images.unsplash.com/photo-1601760561441-16420502c7e0?q=80&w=1400&auto=format&fit=crop",
      },
      {
        room: "Bathroom",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1400&auto=format&fit=crop",
      },
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
