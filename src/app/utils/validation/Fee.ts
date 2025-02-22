import * as yup from "yup";

export const feeSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  value: yup.number().typeError("Value must be a number").required("Value is required"),
  frequency: yup.string().required("Frequency is required"),
  currency: yup.string().required("Currency is required"),
  time: yup.string().required("Time is required"),
  accountPad: yup.string().required("Account Pad is required"),
  account: yup.string().required("Account is required"),
});
