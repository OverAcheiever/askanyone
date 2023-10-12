import Card from "./components/home/card";
import { people } from "./people";

const getPeople = () => {
  const userCount = () => {
    const users = Math.floor(Math.random() * (14 - 9 + 1) + 9) * 100;
    return users >= 1000 ? `${users / 1000}k` : users.toString();
  };

  return people.map((person) => ({ ...person, users: userCount() }));
};

const Page = () => {
  const people = getPeople();

  return (
    <div className="flex flex-col items-center justify-start w-full py-32 bg-black h-max">
      <div>
        <div className="max-w-[30rem] lg:max-w-80">
          <div className="text-2xl font-semibold text-white lg:text-6xl">
            ASKANYONE
          </div>
          <div className="text-[#999999] mt-2 text-base lg:text-2xl font-medium">
            AI holograms created from hours of <br /> interviews and real
            conversations.
          </div>
        </div>
        {people.map((person, index) => (
          <Card person={person} />
        ))}
      </div>
    </div>
  );
};

export default Page;

export const revalidate = 3600;
