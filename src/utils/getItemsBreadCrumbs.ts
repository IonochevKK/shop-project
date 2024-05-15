import { BreadCrumbItemProps } from "../components/UI Kit/BreadCrubms/BreadCrumbItem/BreadCrumbItem";
import { routes } from "../data/dataProgramm";

export const getItemsBreadCrumbs = () => {
  const result: BreadCrumbItemProps[] = [
    {
      href: "/",
      text: "Главная",
    },
  ];
  const locationHref = location.href
    .split("/")
    .splice(3, 5000)
    .map((e) => `/${e}`);
  locationHref.forEach((e) => {
    const foundRoute = routes?.find((e_) => e === e_.href);
    if (foundRoute) {
      result.push(foundRoute);
    }
  });
  return result;
};
