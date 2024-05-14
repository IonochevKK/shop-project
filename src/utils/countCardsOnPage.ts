import { CardProgramProps } from "../components/CardProgram/CardProgram";

export function countCardsOnPage(cards: CardProgramProps[]) {
  const result: number[] = [];

  const copyCardsArr = structuredClone(cards);
  console.log(Math.round(copyCardsArr.length / 15));
  const countPage = Math.round(copyCardsArr.length / 15);

  for (let i = 0; i < countPage; i++) {
    result.push(i);
  }

  return result;
}
