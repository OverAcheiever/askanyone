import Image from 'next/image';
import Andrew from "../public/andrew.png";
import Kanye from "../public/kanye.png";
import Jordan from "../public/jordan.png";
import Card from './components/home/card';

export const people = [
    {
        image: Andrew,
        name: "ANDREW HUBERMAN",
        about: "a neuroscientist and tenured professor in the Department of Neurobiology",
        users: "1.2k"
    },
    {
        image: Kanye,
        name: "KANYE WEST",
        about: "American rapper, singer, songwriter, record producer, and fashion designer.",
        users: "1.3k"
    },
    {
        image: Jordan,
        name: "JORDAN PETERSON",
        about: "Canadian clinical psychologist, Professor of Psychology at the University of Toronto and author.",
        users: "1.4k"
    }
];

const Page = () => {
    return (
        <div className="bg-black w-full h-max flex flex-col justify-start items-center py-32">
            <div>
                <div className="text-white text-2xl lg:text-6xl font-semibold">
                    ASKANYONE
                </div>
                <div className="text-[#999999] mt-2 text-base lg:text-4xl font-medium">
                    AI holograms created from hours of <br /> interviews and real conversations.
                </div>
                {people.map((person, index) => (

                   <Card person={person} />
                ))}

            </div>
        </div>
    );
}

export default Page;
