import React from "react";
import Image from "next/image";
import successIcon from "../../../../public/svg/Featured icon.svg";

interface SuccessModalProps {
  onContinue: () => void;
  message: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onContinue, message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
      <div className="bg-[#fefefe] p-6 rounded-lg shadow-lg w-[90%] max-w-sm">
        <div className="flex flex-col">
          <Image
            src={successIcon}
            alt="successIcon"
            width={0}
            height={0}
            className="mb-1"
          />
        </div>

        <h2 className="text-lg font-medium mt-4 ">Successful</h2>

        <p className="text-gray-800 text-sm font-normal mb-5">{message}</p>

        <button
          onClick={onContinue}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
