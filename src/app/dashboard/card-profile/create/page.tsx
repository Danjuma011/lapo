"use client";
import React, { useState } from "react";
import { CardDetails, CardProfile } from "@/app/utils/type";

import { usePathname } from "next/navigation";
// import { schemas } from '@/app/utils/__data/validations';
import { cardDetailsSchema } from "@/app/utils/validation/card";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type Resolver, type SubmitHandler } from "react-hook-form";
import Input from "@/app/utils/Inputs";
import Dropdown from "@/app/utils/dropDown";
import { FaPlus } from "react-icons/fa";
import Table from "@/app/utils/Table";
import FeeModal from "@/app/utils/modal/FeeModal";
// import { cardProfile } from "@/utils/db";

const Page: React.FC<CardProfile> = () => {
  const [showFeeModal, setShowFeeModal] = useState(false);

  //   useEffect(() => {
  //     if (deletedMessage) {
  //       setShowFeeModal(false);
  //         router.push(route);
  //     }
  // }, [deletedMessage])

  const headers = [
    "Name",
    "Value",
    "Frequency",
    "Currency",
    "Time",
    "Account Pad",
    "Account",
  ];
  const data = [
    ["John Doe", 28, "Developer", "USD", "Monthly", "12345678", "12345678"],
  ] ;

  const {
    register,
    handleSubmit,
    formState: { errors },
    // clearErrors,
    watch,
    setValue,
  } = useForm<CardDetails>({
    // defaultValues,
    resolver: yupResolver(
      cardDetailsSchema
    ) as unknown as Resolver<CardDetails>,
    // any
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<CardDetails> = (data) => {
    console.log({
      cardName: data.cardName,
      binPrefix: data.binPrefix,
      cardScheme: data.cardScheme,
      expiration: data.expiration,
      description: data.description,
      currency: data.currency,
      branchBlacklist: data.branchBlacklist,
    });
  };

  const pathName = usePathname();
  console.log("path", pathName);
  // const router = useRouter()

  return (
    <div className=" rounded-lg px-3 pb-5 pt-3 ">
      <h1 className="font-bold text-lg mb-1">Create Profile</h1>
      <p className="text-[#475467] font-normal text-sm mb-5">
        Fill in profile details and add card fee.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className=" rounded-lg pl-4 py-3 lg:pr-44 pr-4">
          <p className="mb-5">Profile Details</p>
          {/* TaskFormValues */}
          <div className="flex flex-wrap gap-4 w-[100%] justify-between ">
            <div className="min-w-[42%]">
              <Input
                type="edit"
                inputType="text"
                label="Card Name*"
                placeholder="Enter card name"
                {...register("cardName")}
                error={errors?.cardName?.message}
              />
            </div>
            <div className="min-w-[42%]">
              <Input
                type="edit"
                inputType="text"
                label="Bin Prefix*"
                placeholder="00000000"
                {...register("binPrefix")}
                error={errors?.binPrefix?.message}
              />
            </div>
            <div className="min-w-[42%]">
              <Dropdown
                type="edit"
                value={watch("cardScheme")}
                {...register("cardScheme")}
                onChange={(e) => setValue("cardScheme", e.target.value)}
                options={["Verve", "MasterCard", "Visa"]}
                placeholder="Select Card Scheme"
                label="Card Scheme"
                error={errors?.cardScheme?.message}
              />
            </div>
            <div className="min-w-[42%]">
              <Input
                type="edit"
                inputType="number"
                label="Expiration*"
                placeholder="0"
                {...register("expiration")}
                error={errors?.expiration?.message}
              />
            </div>
            <div className="min-w-[42%]">
              <Input
                type="edit"
                inputType="text"
                label="Description*"
                placeholder="description"
                {...register("description")}
                error={errors?.description?.message}
              />
            </div>
            <div className="min-w-[42%]">
              <Dropdown
                type="edit"
                value={watch("currency")}
                {...register("currency")}
                onChange={(e) => setValue("currency", e.target.value)}
                options={["NGN", "USD", "POUNDS"]}
                placeholder="Select Currency"
                label="Currency"
                error={errors?.currency?.message}
              />
            </div>
            <div className="min-w-[42%]">
              <Dropdown
                type="edit"
                value={watch("branchBlacklist")}
                {...register("branchBlacklist")}
                onChange={(e) => setValue("branchBlacklist", e.target.value)}
                options={["Head Office", "Branch"]}
                placeholder="Branch Blacklist"
                label="branchBlacklist"
                error={errors?.branchBlacklist?.message}
              />
            </div>
          </div>
        </div>

        <div className=" mt-2 rounded-lg pt-4 px-3 pb-20">
          <p className="mb-4">Fees</p>
          <button
            onClick={() => setShowFeeModal(true)}
            className="mb-[10px] bg-[#014DAF]  text-[#fefefe] text-sm font-semibold py-2.5 px-5 rounded-md flex items-center gap-2 whitespace-nowrap hover:bg-[#013B82]"
          >
            <FaPlus className="flex-shrink-0" />
            <span>Add Fee</span>
          </button>
          <Table headers={headers} data={data} />;
        </div>

        <button
          type="submit"
          className="bg-[#014DAF] py-2 px-24 rounded text-[#fefefe] mt-10"
        >
          Create Profile
        </button>
      </form>

      {showFeeModal && (
        <FeeModal
          setShowModal={setShowFeeModal}
          // addFee={"Add Fee"}
        />
      )}
    </div>
  );
};

export default Page;
