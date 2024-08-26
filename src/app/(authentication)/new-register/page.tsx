import LeftContent from "@/components/new-register/left-content";
import RightContent from "@/components/new-register/right-content";

const newRegister = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between w-full h-full relative">
        <LeftContent />
        <RightContent />
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <p className=" text-black  text-center font-roboto text-[50px]">
          Enkleste måten for{" "}
          <span className=" text-[#FFFFFF]">salg & kjøp av bil</span>
        </p>
      </div>
    </div>
  );
};

export default newRegister;
