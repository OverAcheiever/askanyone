import Andrew from "../public/andrew.png";
import Kanye from "../public/kanye.png";
import Jordan from "../public/jordan.png";
import Card from "./components/home/card";

export const people = [
  {
    image: Andrew,
    name: "ANDREW HUBERMAN",
    about:
      "a neuroscientist and tenured professor in the Department of Neurobiology",
  },
  {
    image: Kanye,
    name: "KANYE WEST",
    about:
      "American rapper, singer, songwriter, record producer, and fashion designer.",
  },
  {
    image: Jordan,
    name: "JORDAN PETERSON",
    about:
      "Canadian clinical psychologist, Professor of Psychology at the University of Toronto and author.",
  },
];

const getPeople = () => {
  const userCount = () => {
    const users = Math.floor(Math.random() * (14 - 9 + 1) + 9) * 100;
    return users > 1000 ? `${users / 1000}k` : users.toString();
  };

  return people.map(person => ({ ...person, users: userCount() }));
};

const Page = () => {
  const people = getPeople();

  return (
    <div className="flex flex-col items-center justify-start w-full py-32 bg-black h-max">
      <div>
        <div className="text-2xl font-semibold text-white lg:text-6xl">
          ASKANYONE
        </div>
        <div className="text-[#999999] mt-2 text-base lg:text-4xl font-medium">
          AI holograms created from hours of <br /> interviews and real
          conversations.
        </div>
        {people.map((person, index) => (
          <Card person={person} />
        ))}
      </div>
    </div>
  );
};

export default Page;
