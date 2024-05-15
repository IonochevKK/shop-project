import { CardProgramProps } from "../components/CardProgram/CardProgram";
import { Option } from "../components/UI Kit/DropDown/DropDown";

export const getCountHoursDropDown = (cards: CardProgramProps[]) => {
  const uniqueOptions = new Set<string>();
  const result: Option[] = [{ value: "Choose", label: "Выбрать" }];

  cards.forEach((card) => {
    if (!uniqueOptions.has(card.labelText)) {
      uniqueOptions.add(card.labelText);
      result.push({ value: card.labelText, label: card.labelText });
    }
  });
  
  return result;
};
