"use client";
import React, { useState, useEffect } from "react";
import { CardRequest } from "@/app/utils/type";
import ActionButton from "@/app/utils/ActionButton";
import Image from "next/image";
import SuccessModal from "@/app/utils/modal/SuccessModal";
import { useParams } from "next/navigation";

import checkCircle from "@public/svg/check-circle-broken.svg";
import loading from "@public/svg/loading-02.svg";
import check from "@public/svg/package-check.svg";
import sent from "@public/svg/package-sent.svg";
import fileDownload from "@public/svg/file-download-02.svg";
import { cardRequests } from "@/app/utils/db";
import Input from "@/app/utils/Inputs";
import RequestDetailsHeader from "@/app/components/request-details-header";

const Page: React.FC<CardRequest> = () => {
  const [showProductionModal, setShowProductionModal] = useState<boolean>(false);
  const [dispatchModal, setDispatchModal] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [cardRequestDetails, setCardRequestDetails] = useState<CardRequest>();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const request = cardRequests.find((req) => req.batch === id);
    if (request) {
      setCardRequestDetails(request);
    }
  }, [id]);

  if (!cardRequestDetails) {
    return <div>Loading...</div>;
  }

  const handleInProgress = () => {
    setCurrentStage(3);
    setCardRequestDetails({ ...cardRequestDetails, status: "In Progress" });
  };

  const handleReady = () => {
    setCurrentStage(4);
    setCardRequestDetails({ ...cardRequestDetails, status: "Ready" });
  };

  const handleDispatch = () => {
    setTimeout(() => {
      setDispatchModal(true);
      setCurrentStage(5);
      setCardRequestDetails({ ...cardRequestDetails, status: "Ready" });
    }, 1000);
  };

  const handleAcknowledged = () => {
    setCurrentStage(6);
    setCardRequestDetails({ ...cardRequestDetails, status: "Acknowledged" });
  };

  const handleDownload = () => {
    setTimeout(() => {
      setShowProductionModal(true);
      setCurrentStage(2);
      setCardRequestDetails({ ...cardRequestDetails, status: "Pending" });
    }, 1000);
  };

  const handleContinue = () => {
    setShowProductionModal(false);
  };
  const handleDispatchContinue = () => {
    setDispatchModal(false);
  };

  return (
    <div>
    <RequestDetailsHeader/>

    <div className="px-3 pb-5 pt-3">
      <h1 className="font-bold text-lg mb-1">Request Details</h1>
      <p className="text-[#475467] font-normal text-sm mb-3">
        Perform predetermined actions on card requests here.
      </p>

      <div className="bg-[#fefefe] rounded-lg py-3 xl:pr-40 pl-3 pr-3 pb-8">
        <p className="text-lg font-medium mb-5">Card Request Details</p>

        {/* Inputs Section */}
        <div className="flex flex-wrap gap-4 w-full justify-between">
          <div className="w-full sm:w-[48%] lg:w-[45%]">
            <Input
              type="no-edit"
              value={cardRequestDetails.branch}
              placeholder="Read-only input"
              label="Branch Name"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[45%]">
            <Input
              type="no-edit"
              value={cardRequestDetails.initiator}
              placeholder="Read-only input"
              label="Initiator"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[45%]">
            <Input
              type="no-edit"
              value={cardRequestDetails.cardType}
              placeholder="Read-only input"
              label="Card Type"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[45%]">
            <Input
              type="no-edit"
              value={`₦${cardRequestDetails.cardCharges}`}
              placeholder="Read-only input"
              label="Card Charges"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[45%]">
            <Input
              type="no-edit"
              value={cardRequestDetails.quantity}
              placeholder="Read-only input"
              label="Quantity"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[45%]">
            <Input
              type="no-edit"
              value={cardRequestDetails.batch}
              placeholder="Read-only input"
              label="Batch"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[45%]">
            <p className="text-sm font-normal mb-2">Date Requested</p>
            <p className="text-base font-medium">
              {cardRequestDetails.dateRequested}
            </p>
          </div>

          <div className="w-full sm:w-[48%] lg:w-[45%] text-sm font-normal">
            <p className="text-sm font-normal mb-3">Status</p>
            <span
              className={`text-base font-medium py-2 px-4 rounded-3xl border ${
                cardRequestDetails.status === "in progress"
                  ? "border-[#FEDF89] bg-[#FFFAEB] text-[#B54708]"
                  : cardRequestDetails.status === "ready"
                  ? "border-[#ABEFC6] bg-[#ECFDF3] text-[#067647]"
                  : cardRequestDetails.status === "acknowledged"
                  ? "border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3]"
                  : "border-[#EAECF0] bg-[#F9FAFB] text-[#344054]"
              }`}
            >
              {cardRequestDetails.status}
            </span>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="mt-6">
          <p className="mb-2 text-sm font-bold">Action</p>

          <div className="w-full overflow-x-auto lg:overflow-visible">
            <div className="flex space-x-6 lg:space-x-4 w-max lg:w-full">
              <ActionButton
                text="Download for Production"
                bgColor="#344054"
                icon={
                  <Image
                    src={fileDownload}
                    alt="manageCard"
                    width={20}
                    height={20}
                    className="mb-1"
                  />
                }
                onClick={handleDownload}
                disabled={currentStage !== 1}
              />
              <ActionButton
                text="Mark as In Progress"
                bgColor="#B54708"
                icon={
                  <Image
                    src={loading}
                    alt="manageCard"
                    width={20}
                    height={20}
                    className="mb-1"
                  />
                }
                onClick={handleInProgress}
                disabled={currentStage !== 2}
              />
              <ActionButton
                text="Mark as Ready"
                bgColor="#067647"
                icon={
                  <Image
                    src={check}
                    alt="manageCard"
                    width={20}
                    height={20}
                    className="mb-1"
                  />
                }
                onClick={handleReady}
                disabled={currentStage !== 3}
              />
              <ActionButton
                text="Send to Dispatch"
                bgColor="#8020E7"
                icon={
                  <Image
                    src={sent}
                    alt="manageCard"
                    width={20}
                    height={20}
                    className="mb-1"
                  />
                }
                onClick={handleDispatch}
                disabled={currentStage !== 4}
              />
              <ActionButton
                text="Mark as Acknowledged"
                bgColor="#014DAF"
                icon={
                  <Image
                    src={checkCircle}
                    alt="manageCard"
                    width={20}
                    height={20}
                    className="mb-1"
                  />
                }
                onClick={handleAcknowledged}
                disabled={currentStage !== 5}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showProductionModal && (
        <SuccessModal
          message="Production file has been downloaded."
          onContinue={handleContinue}
        />
      )}
      {dispatchModal && (
        <SuccessModal
          message="Card batch successfully sent to dispatch."
          onContinue={handleDispatchContinue}
        />
      )}
    </div>
    </div>
  );
};

export default Page;




