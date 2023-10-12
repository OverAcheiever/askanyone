'use client'
import Image, { StaticImageData } from "next/image";

const Card = ({ person }: {
    person: {
        image: StaticImageData,
        name: string,
        about: string,
    }
}) => {

    const handleClick = () => {
        if (person.name === "ANDREW HUBERMAN") {
            window.location.href = "/chat/andrew-huberman"
        }

        else {
            
        }
    }

    return (
        <div className="w-max rounded-2xl border-[1.8px] border-[#484848] mt-10 cursor-pointer"
            onClick={handleClick}
        >
            <div className="w-80 lg:w-[30rem]">
                <Image src={person.image} alt={person.name} className="rounded-t-2xl" />
                <div className="p-5 px-6">
                    <div className="text-white text-3xl font-semibold">{person.name}</div>
                    <div className="max-w-xs text-[#999999] font-inter font-normal mt-0.5">{person.about}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
