import { CardProgramProps } from "../components/CardProgram/CardProgram";

export function countCardsOnPage(cards: CardProgramProps[]) {
  const result: number[] = [];

  const copyCardsArr = structuredClone(cards);
  const countPage = Math.round(copyCardsArr.length / 15);

  for (let i = 0; i < countPage; i++) {
    result.push(i);
  }

  return result;
}
