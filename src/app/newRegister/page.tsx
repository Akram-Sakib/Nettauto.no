import Left_Content from "@/components/newRegister/Left_Content";
import Right_content from "@/components/newRegister/Right_Content";
import Image from "next/image";

const newRegister = () => {
  return (
    <div className="h-[1080px] ">
      <Image
        className="ml-[133px] mt-[28px]"
        src={"/logo.png"}
        alt="Anne"
        width={300}
        height={57.47}
      />
      <div className="flex justify-between w-full h-full relative">
        <Left_Content />
        <Right_content />
      </div>
      <div className=" absolute top-[1050px] left-[250px]">
        <p className=" text-black  text-center font-roboto text-[50px]">
          Enkleste måten for{" "}
          <span className=" text-[#FFFFFF]">salg & kjøp av bil</span>
        </p>
      </div>
    </div>
  );
};

export default newRegister;
