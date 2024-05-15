import { CardProgramProps } from "../components/CardProgram/CardProgram";
import { BreadCrumbItemProps } from "../components/UI Kit/BreadCrubms/BreadCrumbItem/BreadCrumbItem";
import { Option } from "../components/UI Kit/DropDown/DropDown";

export const KursView: Option[] = [
  {
    value: "all",
    label: "Всё",
  },
  {
    value: "kurs-dly-medikov",
    label: "Курсы для медиков",
  },
  {
    value: "nmo-dly-vrachey",
    label: "НМО для врачей",
  },
  {
    value: "nmo-dly-srednih-rabotnikov",
    label: "НМО для для средних работников",
  },
  {
    value: "professional-perepodgotovka",
    label: "Профессиональная переподготовка",
  },
  {
    value: "professional-obychenie",
    label: "Профессиональная обучение",
  },
];

export const ViewSpecial: Option[] = [
  {
    value: "all",
    label: "Всё",
  },
  {
    value: "11",
    label: "Б",
  },
];
export const CountHours: Option[] = [
  {
    value: "сhoose",
    label: "Выбрать",
  },
];

export const cards: CardProgramProps[] = [
  {
    id: 1,
    titleText:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    nameSpecial:
      "Sovremennie-aspecty-sestrinsoy-pomochi-v-razlichih-otdeleniah",
    price: "1 500",
    priceSale: "2 450",
    HMOlabel: false,
    labelText: "144 ак. ч.",
  },
  {
    id: 2,
    titleText: "Протозоозы и гельминтозы",
    nameSpecial: "protozy-i-gelmitozy",
    price: "2 500",
    priceSale: "5 450",
    HMOlabel: true,
    labelText: "144 ак. ч. (ЗЕТ)",
  },
  {
    id: 3,
    titleText:
      "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
    nameSpecial: "Bronxialnay-astma-i-xronucheskay-obstrycrivnay-bolez",
    price: "1 500",
    HMOlabel: false,
    labelText: "16 ак. ч.",
  },
  {
    id: 4,
    titleText:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    nameSpecial:
      "Sovremennie-aspecty-sestrinsoy-pomochi-v-razlichih-otdeleniah",
    price: "1 500",
    priceSale: "2 450",
    HMOlabel: false,
    labelText: "144 ак. ч.",
  },
  {
    id: 5,
    titleText: "Протозоозы и гельминтозы",
    nameSpecial: "protozy-i-gelmitozy",
    price: "2 500",
    priceSale: "5 450",
    HMOlabel: false,
    labelText: "144 ак. ч. (ЗЕТ)",
  },
  {
    id: 6,
    titleText:
      "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
    nameSpecial: "Bronxialnay-astma-i-xronucheskay-obstrycrivnay-bolez",
    price: "1 500",
    HMOlabel: false,
    labelText: "16 ак. ч.",
  },
  {
    id: 7,
    titleText:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    nameSpecial:
      "Sovremennie-aspecty-sestrinsoy-pomochi-v-razlichih-otdeleniah",
    price: "1 500",
    priceSale: "2 450",
    HMOlabel: false,
    labelText: "144 ак. ч.",
  },
  {
    id: 8,
    titleText: "Протозоозы и гельминтозы",
    nameSpecial: "protozy-i-gelmitozy",
    price: "2 500",
    priceSale: "5 450",
    HMOlabel: false,
    labelText: "144 ак. ч. (ЗЕТ)",
  },
  {
    id: 9,
    titleText:
      "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
    nameSpecial: "Bronxialnay-astma-i-xronucheskay-obstrycrivnay-bolez",
    price: "1 500",
    HMOlabel: false,
    labelText: "16 ак. ч.",
  },
  {
    id: 10,
    titleText:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    nameSpecial:
      "Sovremennie-aspecty-sestrinsoy-pomochi-v-razlichih-otdeleniah",
    price: "1 500",
    priceSale: "2 450",
    HMOlabel: false,
    labelText: "144 ак. ч.",
  },
  {
    id: 11,
    titleText: "Протозоозы и гельминтозы",
    nameSpecial: "protozy-i-gelmitozy",
    price: "2 500",
    priceSale: "5 450",
    HMOlabel: false,
    labelText: "144 ак. ч. (ЗЕТ)",
  },
  {
    id: 12,
    titleText:
      "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
    nameSpecial: "Bronxialnay-astma-i-xronucheskay-obstrycrivnay-bolez",
    price: "1 500",
    HMOlabel: false,
    labelText: "16 ак. ч.",
  },
  {
    id: 13,
    titleText:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    nameSpecial:
      "Sovremennie-aspecty-sestrinsoy-pomochi-v-razlichih-otdeleniah",
    price: "1 500",
    priceSale: "2 450",
    HMOlabel: false,
    labelText: "144 ак. ч.",
  },
  {
    id: 14,
    titleText: "Протозоозы и гельминтозы",
    nameSpecial: "protozy-i-gelmitozy",
    price: "2 500",
    priceSale: "5 450",
    HMOlabel: false,
    labelText: "144 ак. ч. (ЗЕТ)",
  },
  {
    id: 15,
    titleText: "Test",
    nameSpecial: "Bronxialnay-astma-i-xronucheskay-obstrycrivnay-bolez",
    price: "1 500",
    HMOlabel: false,
    labelText: "16 ак. ч.",
  },
  {
    id: 16,
    titleText:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    nameSpecial:
      "Sovremennie-aspecty-sestrinsoy-pomochi-v-razlichih-otdeleniah",
    price: "1 500",
    priceSale: "2 450",
    HMOlabel: false,
    labelText: "144 ак. ч.",
  },
  {
    id: 17,
    titleText: "Протозоозы и гельминтозы",
    nameSpecial: "protozy-i-gelmitozy",
    price: "2 500",
    priceSale: "5 450",
    HMOlabel: true,
    labelText: "144 ак. ч. (ЗЕТ)",
  },
  {
    id: 18,
    titleText:
      "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
    nameSpecial: "Bronxialnay-astma-i-xronucheskay-obstrycrivnay-bolez",
    price: "1 500",
    HMOlabel: false,
    labelText: "16 ак. ч.",
  },
  {
    id: 4,
    titleText:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    nameSpecial:
      "Sovremennie-aspecty-sestrinsoy-pomochi-v-razlichih-otdeleniah",
    price: "1 500",
    priceSale: "2 450",
    HMOlabel: false,
    labelText: "144 ак. ч.",
  },
  {
    id: 5,
    titleText: "Протозоозы и гельминтозы",
    nameSpecial: "protozy-i-gelmitozy",
    price: "2 500",
    priceSale: "5 450",
    HMOlabel: false,
    labelText: "144 ак. ч. (ЗЕТ)",
  },
  {
    id: 6,
    titleText:
      "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
    nameSpecial: "Bronxialnay-astma-i-xronucheskay-obstrycrivnay-bolez",
    price: "1 500",
    HMOlabel: false,
    labelText: "16 ак. ч.",
  },
  {
    id: 7,
    titleText:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    nameSpecial:
      "Sovremennie-aspecty-sestrinsoy-pomochi-v-razlichih-otdeleniah",
    price: "1 500",
    priceSale: "2 450",
    HMOlabel: false,
    labelText: "144 ак. ч.",
  },
  {
    id: 8,
    titleText: "Протозоозы и гельминтозы",
    nameSpecial: "protozy-i-gelmitozy",
    price: "2 500",
    priceSale: "5 450",
    HMOlabel: false,
    labelText: "144 ак. ч. (ЗЕТ)",
  },
  {
    id: 9,
    titleText:
      "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
    nameSpecial: "Bronxialnay-astma-i-xronucheskay-obstrycrivnay-bolez",
    price: "1 500",
    HMOlabel: false,
    labelText: "16 ак. ч.",
  },
  {
    id: 10,
    titleText:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    nameSpecial:
      "Sovremennie-aspecty-sestrinsoy-pomochi-v-razlichih-otdeleniah",
    price: "1 500",
    priceSale: "2 450",
    HMOlabel: false,
    labelText: "144 ак. ч.",
  },
  {
    id: 11,
    titleText: "Протозоозы и гельминтозы",
    nameSpecial: "protozy-i-gelmitozy",
    price: "2 500",
    priceSale: "5 450",
    HMOlabel: false,
    labelText: "144 ак. ч. (ЗЕТ)",
  },
  {
    id: 12,
    titleText:
      "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
    nameSpecial: "Bronxialnay-astma-i-xronucheskay-obstrycrivnay-bolez",
    price: "1 500",
    HMOlabel: false,
    labelText: "16 ак. ч.",
  },
  {
    id: 13,
    titleText:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    nameSpecial:
      "Sovremennie-aspecty-sestrinsoy-pomochi-v-razlichih-otdeleniah",
    price: "1 500",
    priceSale: "2 450",
    HMOlabel: false,
    labelText: "144 ак. ч.",
  },
  {
    id: 14,
    titleText: "Протозоозы и гельминтозы",
    nameSpecial: "protozy-i-gelmitozy",
    price: "2 500",
    priceSale: "5 450",
    HMOlabel: false,
    labelText: "144 ак. ч. (ЗЕТ)",
  },
  {
    id: 15,
    titleText:
      "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
    nameSpecial: "Bronxialnay-astma-i-xronucheskay-obstrycrivnay-bolez",
    price: "1 500",
    HMOlabel: false,
    labelText: "16 ак. ч.",
  },
];

export const routes: BreadCrumbItemProps[] = [
  {
    href: "/programms",
    text: "Программы",
  },
  {
    href: "/novosti",
    text: "Новости",
  },
  {
    href: "/kontact",
    text: "Контакты",
  },
  {
    href: "/svedenia-ob-organizazii",
    text: "Сведения об организации",
  },
];
