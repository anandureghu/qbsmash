import * as Yup from "yup";

export const addAnnouncementsValidationScema = Yup.object({
  title: Yup.string().trim().required("Title required"),
  // imageUrl: Yup.string().trim().required("Image url required"),
});
