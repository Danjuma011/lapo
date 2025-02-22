"use client";
import React, { useState } from "react";
import Inputs from "@/utils/Inputs";
import { CardRequest } from "@/utils/type";
import ActionButton from "@/utils/ActionButton";
import {
  FaCheck,
  FaCheckCircle,
  FaDownload,
  FaSpinner,
  FaTruck,
} from "react-icons/fa";
import SuccessModal from "@/utils/modal/SuccessModal";

const cardRequestDetails = {
  branchName: "corporate",
  Initiator: "RootUser",
  cardType: "Classic Debit",
  cardCharges: "corporate",
  quantity: 10,
  batch: "847264905",
  dateRequested: "11/14/2024 10:27:43",
  status: "Pending",
};

const Page: React.FC<CardRequest> = () => {
  const [showProductionModal, setShowProductionModal] = useState<boolean>(false);
  const [dispatchModal, setDispatchModal] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number>(1);

  const handleInProgress = () => {
    setCurrentStage(3);
    cardRequestDetails.status = "In Progress";
  };

  const handleReady = () => {
    setCurrentStage(4);
    cardRequestDetails.status = "ready";
  };

  const handleDispatch = () => {
    setTimeout(() => {
      setDispatchModal(true);
      setCurrentStage(5); 
      cardRequestDetails.status = "ready";
    }, 1000);
  };



  const handleAcknowledged = () => {
    setCurrentStage(6);
    cardRequestDetails.status = "Acknowledged";
  };

  const handleDownload = () => {
    setTimeout(() => {
      setShowProductionModal(true);
      setCurrentStage(2); 
      cardRequestDetails.status = "pending";
    }, 1000);
  };

  const handleContinue = () => {
    setShowProductionModal(false);
  };
  const handleDispatchContinue = () => {
    setDispatchModal(false);
  };

  return (
    <div className="bg-[#fefefe] rounded-lg px-3 pb-5 pt-3 mr-44">
      <h1 className="font-bold text-lg mb-1">Request Details</h1>
      <p className="text-[#475467] font-normal text-sm">
        Perform predetermined actions on card requests here.
      </p>

      <div className="flex flex-wrap gap-4 w-[100%] justify-between ">
        {/* Branch Name */}
        <div className="min-w-[42%]">
          <Inputs
            type="no-edit"
            value={cardRequestDetails.branchName}
            placeholder="Read-only input"
            label="Branch Name"
          />
        </div>

        {/* Initiator */}
        <div className="min-w-[42%]">
          <Inputs
            type="no-edit"
            value={cardRequestDetails.Initiator}
            placeholder="Read-only input"
            label="Initiator"
          />
        </div>

        {/* Card Type */}
        <div className="min-w-[42%]">
          <Inputs
            type="no-edit"
            value={cardRequestDetails.cardType}
            placeholder="Read-only input"
            label="Card Type"
          />
        </div>

        {/* Card Charges */}
        <div className="min-w-[42%]">
          <Inputs
            type="no-edit"
            value={cardRequestDetails.cardCharges}
            placeholder="Read-only input"
            label="Card Charges"
          />
        </div>

        {/* Quantity */}
        <div className="min-w-[42%]">
          <Inputs
            type="no-edit"
            value={cardRequestDetails.quantity}
            placeholder="Read-only input"
            label="Quantity"
          />
        </div>

        {/* Batch */}
        <div className="min-w-[42%]">
          <Inputs
            type="no-edit"
            value={cardRequestDetails.batch}
            placeholder="Read-only input"
            label="Batch"
          />
        </div>

        {/* Date Requested */}
        <div className="min-w-[42%]">
          <p className="text-sm font-normal mb-2">Date Requested</p>
          <p className="text-base font-medium">
            {cardRequestDetails.dateRequested}
          </p>
        </div>

        {/* Status */}
        <div className="min-w-[42%] text-sm font-normal">
          <p className="text-sm font-normal mb-3">Status</p>
          <span className="text-base font-medium py-2 px-4 bg-[#EAECF0] rounded-3xl">
            {cardRequestDetails.status}
          </span>
        </div>
      </div>

      <div className="mt-6 ">
        <p className="mb-2">Action</p>

        <div className="flex space-x-6">
          <ActionButton
            text="Download for Production"
            bgColor="#344054"
            icon={<FaDownload />}
            onClick={handleDownload}
            disabled={currentStage !== 1}
          />
          <ActionButton
            text="Mark as In Progress"
            bgColor="#B54708"
            icon={<FaSpinner />}
            onClick={handleInProgress}
            disabled={currentStage !== 2}
          />
          <ActionButton
            text="Mark as Ready"
            bgColor="#067647"
            icon={<FaCheck />}
            onClick={handleReady}
            disabled={currentStage !== 3}
          />
          <ActionButton
            text="Send to Dispatch"
            bgColor="#8020E7"
            icon={<FaTruck />}
            onClick={handleDispatch}
            disabled={currentStage !== 4}
          />
          <ActionButton
            text="Mark as Acknowledged"
            bgColor="#014DAF"
            icon={<FaCheckCircle />}
            onClick={handleAcknowledged}
            disabled={currentStage !== 5}
          />
        </div>
      </div>

      {showProductionModal && <SuccessModal message="Production file has been downloaded." onContinue={handleContinue} />}
      {dispatchModal && <SuccessModal message="Card batch successfully sent to dispatch." onContinue={handleDispatchContinue} />}
    </div>
  );
};

export default Page;