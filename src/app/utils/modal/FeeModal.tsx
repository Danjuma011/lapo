import React from "react";
import ModalCard from "./modal-card";
import RadioGroup from "../radio-button";
import Input from "../Inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type Resolver, type SubmitHandler } from "react-hook-form";
import { Fee } from "../type";
import { feeSchema } from "../validation/Fee";

interface FeeModalProps {
  setShowModal: (showModal: boolean) => void;
  addFee?: () => string;
}

const FeeModal: React.FC<FeeModalProps> = ({ setShowModal, addFee }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Fee>({
    resolver: yupResolver(feeSchema) as unknown as Resolver<Fee>,
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Fee> = (data) => {
    console.log({
      name: data.name,
      value: data.value,
      currency: data.currency,
      frequency: data.frequency,
      accountPad: data.accountPad,
      account: data.account,
      feeImpact: data.feeImpact
    });
  };

  return (
    <ModalCard setShowModal={setShowModal} title="Add Fee" subTitle="Fill in fee details." className="text-[#101828] font-semibold text-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-4">
          <Input
            type="edit"
            inputType="text"
            label="Fee Name*"
            placeholder="Maintenance"
            {...register("name")}
            error={errors?.name?.message}
          />

          <Input
            type="edit"
            inputType="number"
            label="Value*"
            placeholder="0"
            {...register("value")}
            error={errors?.value?.message}
          />
        </div>

        {/* Radio Groups */}
        <div className="space-y-4 mt-4">
          <h2 className="text-sm font-medium">Currency</h2>
          <RadioGroup
            name="currency"
            options={["NGN", "USD"]}
            selectedValue={watch("currency", "NGN")}
            onChange={(value) => setValue("currency", value)}
          />

          <h2 className="text-sm font-medium">Fee Currency</h2>
          <RadioGroup
            name="feeCurrency"
            options={["NGN", "USD"]}
            selectedValue={watch("frequency", "NGN")}
            onChange={(value) => setValue("frequency", value)}
          />

          <h2 className="text-sm font-medium">Fee Impact</h2>
          <RadioGroup
            name="feeImpact"
            options={["Positive", "Negative"]}
            selectedValue={watch("feeImpact", "Positive")}
            onChange={(value) => setValue("feeImpact", value)}
          />

          <h2 className="text-sm font-medium">Account Pad</h2>
          <RadioGroup
            name="accountPad"
            options={["Yes", "No"]}
            selectedValue={watch("accountPad", "No")}
            onChange={(value) => setValue("accountPad", value)}
          />
        </div>

        <div className="mt-4">
          <Input
            type="edit"
            inputType="text"
            label="Account*"
            placeholder=""
            {...register("account")}
            error={errors?.account?.message}
          />
        </div>

        <div className="mt-10">
        
          <button
            type="submit"
            onClick={addFee}
            className="px-4 py-2 w-full bg-[#014DAF] text-white rounded-md hover:bg-blue-700"
          >
            Add Fee
          </button>
        </div>
      </form>
    </ModalCard>
  );
};

export default FeeModal;
