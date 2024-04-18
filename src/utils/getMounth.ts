export const changeDataMouth = (createdAt: Date) => {
  const months: string[] = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Майя",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  const day: number = createdAt.getDate();
  const month: number = createdAt.getMonth();
  const year: number = createdAt.getFullYear();
  return `${day} ${months[month]} ${year}`;
};
