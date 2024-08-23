import Left_content from "@/components/privet-registration/Left_content";
import Right_content from "@/components/privet-registration/Right_content";
import React from "react";

const PrivetRegistration = () => {
  return (
    <div className="my-10">
      <div className="flex justify-between min-h-screen mx-12">
        <Left_content />
        <Right_content />
      </div>
    </div>
  );
};

export default PrivetRegistration;
