import bugImgUrl from "../assets/bug.svg";
import ideaImgUrl from "../assets/idea.svg";
import thoughtImgUrl from "../assets/thought.svg";

export type Feedback = keyof typeof feedbackTypes;

export interface FeedbackType {
  title: string;
  image: FeedbackImage;
}
export interface FeedbackImage {
  source: string;
  alt: string;
}

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImgUrl,
      alt: "imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImgUrl,
      alt: "imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImgUrl,
      alt: "imagem de um balão de pensamento",
    },
  },
};
