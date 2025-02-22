import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

interface SuccessModalProps {
  onContinue: () => void; // Callback function for the "Continue" button
  message: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onContinue, message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 border-2 ">
      {/* Modal Container with light background and black text */}
      <div className="bg-[#fefefe] p-8 px-10 rounded-lg max-w-sm text-center border-2 border-blue-500  ">
        {/* Icon with border and rounded corners */}
        <div className="flex justify-center items-center">
          <div className="border-2 border-green-500 rounded-xl p-3 flex justify-center">
            <IoCheckmarkCircleOutline className="text-green-500 text-4xl" />
          </div>
        </div>
        {/* Title and description with black text */}
        <h2 className="text-xl font-semibold mt-4 text-[#be3e3e]">Successful</h2>
        <p className="text-[#be3e3e] mt-2">{message}</p>
        {/* Continue button */}
        <button
          onClick={onContinue}
          className="mt-6 bg-[#014DAF] text-[#000000] px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;




















