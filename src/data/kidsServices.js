import { menServices } from "./menServices";

export const kidsServices = menServices.filter((service) =>
  service.name.startsWith("KIDS ")
);

export const kidsCategories = [...new Set(kidsServices.map((service) => service.category))];
