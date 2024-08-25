import LeftContent from "@/components/private-registration/left-content";
import RightContent from "@/components/private-registration/right-content";
import React from "react";

const PrivetRegistration = () => {
  return (
    <div className="my-10">
      <div className="flex justify-between min-h-screen mx-12 gap-[62px]">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
};

export default PrivetRegistration;
