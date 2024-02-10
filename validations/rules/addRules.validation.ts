import * as Yup from "yup";

export const addRulesValidationScema = Yup.object({
  title: Yup.string().trim().required("Title required"),
  description: Yup.string().trim().min(10, "minimum 10 characters required"),
});
