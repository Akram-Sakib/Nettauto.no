import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const ValidationMessage = ({
  validations,
}: {
  validations: Record<string, any>;
}) => {
  return (
    <div className="text-black ml-6">
      <div className="mt-4 flex items-center gap-1">
        <span>
          <AiFillCheckCircle
            className={validations.length ? "text-red-500" : "text-gray-400"}
          />
        </span>
        Minst 12 tegn
      </div>
      <div className="mt-4 flex items-center gap-1">
        <span>
          <AiFillCheckCircle
            className={validations.lowercase ? "text-red-500" : "text-gray-400"}
          />
        </span>
        Minst 1 liten bokstav
      </div>
      <div className="mt-4 flex items-center gap-1">
        <span>
          <AiFillCheckCircle
            className={validations.uppercase ? "text-red-500" : "text-gray-400"}
          />
        </span>
        Minst 1 stor bokstav
      </div>
      <div className="mt-4 flex items-center gap-1">
        <span>
          <AiFillCheckCircle
            className={validations.number ? "text-red-500" : "text-gray-400"}
          />
        </span>
        Minst 1 tall
      </div>
      <div className="mt-4 flex items-center gap-1">
        <span>
          <AiFillCheckCircle
            className={validations.symbol ? "text-red-500" : "text-gray-400"}
          />
        </span>
        {"Minst 1 symbol (!“#$%&‘()*+,-./:;<=>?@[]^_`{|}~)"}
      </div>
    </div>
  );
};

export default ValidationMessage;
