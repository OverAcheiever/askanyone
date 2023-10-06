import Image from 'next/image';
import Andrew from "../../public/andrew.png";
import Kanye from "../../public/kanye.png";
import Jordan from "../../public/jordan.png";

const people = [
    {
        image: Andrew,
        name: "ANDREW HUBERMAN",
        about: "a neuroscientist and tenured professor in the Department of Neurobiology",
        comments: "1.2k"
    },
    {
        image: Kanye,
        name: "KANYE WEST",
        about: "American rapper, singer, songwriter, record producer, and fashion designer.",
        comments: "1.3k"
    },
    {
        image: Jordan,
        name: "JORDAN PETERSON",
        about: "Canadian clinical psychologist, Professor of Psychology at the University of Toronto and author.",
        comments: "1.4k"
    }
];

const Page = () => {
    return (
        <div className="bg-black w-full h-max flex flex-col justify-start items-center py-32">
            <div>
                <div className="text-white text-2xl lg:text-6xl">
                    ASKANYONE
                </div>
                <div className="text-[#999999] mt-2 text-base lg:text-4xl">
                    AI holograms created from hours of <br /> interviews and real conversations.
                </div>
                {people.map((person, index) => (

                <div className="w-max rounded-2xl border-[1.8px] border-[#484848] mt-10">
                        <div key={index} className="w-80 lg:w-[30rem]">
                            <Image src={person.image} alt={person.name} className="rounded-t-2xl" />
                            <div className="p-4">
                                <div className="text-white text-3xl">{person.name}</div>
                                <div className="max-w-xs text-[#999999]">{person.about}</div>
                                <div className="flex gap-x-2 items-center pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 37 37" fill="none">  <g clip-path="url(#clip0_3_1483)">
    <path d="M9.41169 7.39584C15.285 3.22969 23.679 3.57022 29.1093 8.20345C34.6346 12.915 35.3895 20.616 30.8451 26.1292C26.563 31.3229 18.8439 33.0346 12.4161 30.3556L12.0666 30.2034L5.47457 31.6062L5.36156 31.6258L5.19582 31.6393L5.02556 31.6333L4.95926 31.6258L4.79352 31.5956L4.63531 31.5444L4.48463 31.4781L4.37012 31.4148L4.20739 31.2988L4.08535 31.1873L3.97536 31.0623L3.8955 30.9493L3.79756 30.776L3.73428 30.6163L3.68757 30.446L3.66798 30.333L3.65442 30.1673L3.66045 29.997L3.66798 29.9307L3.69811 29.765L3.73126 29.6565L5.46402 24.4567L5.43087 24.4025C2.10097 18.7567 3.60922 11.7579 9.06363 7.65048L9.41018 7.39734L9.41169 7.39584Z" fill="#484848"/>
   </g>
  <defs>
     <clipPath id="clip0_3_1483">
       <rect width="36.1618" height="36.1618" fill="white" transform="translate(0.641663 -0.000854492)"/>
    </clipPath>
   </defs>
 </svg>
                                    <div className="max-w-[10rem] text-[#999999]">{person.comments}</div>
                                </div>
                            </div>
                        </div>
                </div>
                    ))}

            </div>
        </div>
    );
}

export default Page;

