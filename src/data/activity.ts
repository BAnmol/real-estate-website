export type ActivityEvent = {
  text: string;
  meta: string;
};

const names = [
  "Ananya",
  "Karan",
  "Priya",
  "Rohan",
  "Neha",
  "Aditya",
  "Ishaan",
  "Meera",
];

const properties = [
  "The Bandra Sky Residence",
  "Whitefield Green Villa",
  "Jubilee Hills Manor",
  "Assagao Courtyard Villa",
  "Vasant Vihar Residence",
  "Koregaon Park Estate",
];

const actions = [
  (n: string, p: string) => `${n} just booked a 3D tour of ${p}`,
  (n: string, p: string) => `${n} started exploring ${p} in 3D`,
  (n: string, p: string) => `${n} added ${p} to their shortlist`,
  (_n: string, p: string) => `3 people are viewing ${p} right now`,
  (n: string, p: string) => `${n} requested a callback about ${p}`,
];

const metas = ["Just now", "1 min ago", "2 min ago", "Just now", "Live"];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateActivity(): ActivityEvent {
  const name = pick(names);
  const property = pick(properties);
  const action = pick(actions);
  return {
    text: action(name, property),
    meta: pick(metas),
  };
}
