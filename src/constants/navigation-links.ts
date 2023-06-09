import { PageLinkData, SubmenuData } from "@/types/navigation";

const PAGES: Array<PageLinkData | SubmenuData> = [
  {
    name: "Лечение",
    href: "/treatment",
  },
  {
    name: "Отзывы",
    href: "/reviews",
  },
  {
    name: "Комплекты приборов",
    href: "/kits",
  },
  {
    globalName: "Схемы приборов",
    pages: [
      {
        name: "Катушка Мишина",
        href: "/mishin-coil-schema",
      },
      {
        name: "Генератор синуса",
        href: "/sinus-generator-schema",
      },
    ],
  },
  {
    name: "Cтатьи",
    href: "/articles",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
];

export default PAGES;
