import { CardProgramProps } from "../components/CardProgram/CardProgram";
import { Option } from "../components/UI Kit/DropDown/DropDown";

export const getSpecialDropDown = (cards: CardProgramProps[]) => {
  const uniqueOptions = new Set<string>();
  const result: Option[] = [{ value: "all", label: "Всё" }];

  cards.forEach((card) => {
    if (!uniqueOptions.has(card.nameSpecial)) {
      uniqueOptions.add(card.nameSpecial);
      result.push({ value: card.nameSpecial, label: card.titleText });
    }
  });
  
  return result;
};
