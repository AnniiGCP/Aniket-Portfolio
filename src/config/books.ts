export type Book = {
  title: string;
  author: string;
  cover: string;
};

export const books: Book[] = [
  {
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    cover: "/assets/books/ikigai.png",
  },
  {
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    cover: "/assets/books/the-power-of-your-subconscious-mind.png",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "/assets/books/the-psychology-of-money.png",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "/assets/books/the-alchemist.png",
  },
];
