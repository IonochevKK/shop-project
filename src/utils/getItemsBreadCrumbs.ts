import { CardNewsList } from "../components/CardNews/CardNews";
import { CardProgramProps } from "../components/CardProgram/CardProgram";
import { BreadCrumbItemProps } from "../components/UI Kit/BreadCrubms/BreadCrumbItem/BreadCrumbItem";
import { routes } from "../data/dataProgramm";

type CardProps = CardNewsList | CardProgramProps;

export const getItemsBreadCrumbs = (card: CardProps[]) => {
  const result: BreadCrumbItemProps[] = [
    {
      href: "/",
      text: "Главная",
    },
  ];

  const locationHref = location.href
    .split("/")
    .splice(3)
    .map((e) => `/${e}`);

  locationHref.forEach((e) => {
    const foundRoute = routes?.find((route) => e === route.href);
    if (foundRoute) {
      result.push(foundRoute);
    }
  });

  if ('title' in card) {
    result.push({ href: `${card.id}`, text: `${card.title}` });
  } else if ('titleText' in card) {
    result.push({ href: `${card.id}`, text: `${card.titleText}` });
  }

  return result;
};
