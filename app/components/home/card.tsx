"use client";
import posthog from "@/utils/posthog";
import Image, { StaticImageData } from "next/image";
import { toast, Toaster } from "react-hot-toast";
import { CommentIcon, CommentIconMobile } from "@/app/icons";
import UsersImage from "../../../public/users.png";

const Card = ({
  person,
}: {
  person: {
    image: StaticImageData;
    name: string;
    about: string;
    users: string;
  };
}) => {
  return (
    <div
      className="w-max rounded-2xl border-[1.8px] border-[#484848] mt-10 cursor-pointer"
      onClick={async () => {
        await posthog.capture("person_click", {
          name: person.name.toLowerCase(),
        });

        if (person.name === "ANDREW HUBERMAN")
          window.location.href = "/chat/andrew-huberman";
        else {
          toast.error(
            <div className="w-full text-base lg:text-xl text-center font-medium text-black bg-white max-w-none">
              {person.name} AI STILL IN PROGRESS
            </div>,
            {
              icon: null,
              style: {
                maxWidth: "none",
              },
            },
          );
        }
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
        <div className="p-4 px-5 lg:p-5 lg:px-6 mt-2">
          <div className="text-white text-3xl font-semibold">{person.name}</div>
          <div className="max-w-xs text-[#999999] font-inter font-normal mt-0.5">
            {person.about}
          </div>
          <div className="flex items-center gap-x-1 lg:gap-x-2 mt-1 lg:mt-2">
            <div className="w-5 h-5 lg:w-6 lg:h-6">
              <Image src={UsersImage} alt="" />
            </div>
            {/* <div className="hidden lg:block">
              <CommentIcon />
            </div>
            <div className="lg:hidden">
              <CommentIconMobile />
            </div> */}
            <div className="text-[#999999] ml-0.5 font-medium text-base lg:text-xl tracking-wide">
              {person.users}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
