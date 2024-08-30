import LeftContent from "@/components/new-register/left-content";
import RightContent from "@/components/new-register/right-content";

const newRegister = () => {
  return (
    <div className="lg:h-screen">
      <div className="flex flex-col lg:flex-row justify-between w-full h-full relative">
        <LeftContent />
        <RightContent />
      </div>
      <div className="absolute inset-x-0 bottom-0 pb-8 hidden lg:block">
        <p className=" text-black  text-center font-roboto xl:text-3xl 2xl:text-[50px]">
          Enkleste måten for{" "}
          <span className=" text-[#FFFFFF]">salg & kjøp av bil</span>
        </p>
      </div>
    </div>
  );
};

export default newRegister;
