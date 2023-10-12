"use client";
import posthog from "@/utils/posthog";
import Image, { StaticImageData } from "next/image";
import { toast, Toaster } from "react-hot-toast";

const Card = ({
  person,
}: {
  person: {
    image: StaticImageData;
    name: string;
    about: string;
  };
}) => {
  return (
    <div
      className="w-max rounded-2xl border-[1.8px] border-[#484848] mt-10 cursor-pointer"
      onClick={async () => {
        await posthog.capture("person_click", {
          name: person.name.toLowerCase(),
        });
        toast.error(`${person.name} ai still in progress`);

        // if (person.name === "ANDREW HUBERMAN")
        //   window.location.href = "/chat/andrew-huberman";
      }}
    >
      <Toaster position="bottom-center" />
      <div className="w-80 lg:w-[30rem]">
        <Image
          src={person.image}
          alt={person.name}
          className="rounded-t-2xl"
          priority
        />
        <div className="p-5 px-6">
          <div className="text-3xl font-semibold text-white">{person.name}</div>
          <div className="max-w-xs text-[#999999] font-inter font-normal mt-0.5">
            {person.about}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
