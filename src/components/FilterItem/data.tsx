type filterType = {
  title: string;
  value: "author" | "genre" | "order";
};

export const filters: filterType[] = [
  {
    title: "Автору",
    value: "author",
  },
  {
    title: "Жанру",
    value: "genre",
  },
  {
    title: "Году выпуска",
    value: "order",
  },
];

export const order = ["По умолчанию", "Сначала новые", "Сначала старые"];
