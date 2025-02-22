import * as yup from "yup";

export const cardDetailsSchema = yup.object().shape({
  cardName: yup.string().required("Card Name is required"),
  binPrefix: yup
    .string()
    .matches(/^\d{6}$/, "BIN Prefix must be 6 digits")
    .required("BIN Prefix is required"),
  cardScheme: yup.string().required("Card Scheme is required"),
  expiration: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration must be in MM/YY format")
    .required("Expiration date is required"),
  description: yup.string().optional(),
  currency: yup.string().required("Currency is required"),
  branchBlacklist: yup.string().required("branchBlacklist is required"),
});

