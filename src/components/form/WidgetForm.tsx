import { useCallback, useState } from "react";
import { Feedback } from "../../utils";
import {
  FeedbackContentStep,
  FeedbackSuccessStep,
  FeedbackTypeStep,
} from "./steps";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<Feedback | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const handleFeedbackRestart = useCallback(() => {
    setFeedbackType(null);
    setFeedbackSent(false);
  }, []);
  const handleFeedbackSent = useCallback(() => setFeedbackSent(true), []);
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent && (
        <FeedbackSuccessStep onFeedbackRestarted={handleFeedbackRestart} />
      )}
      {!feedbackType && !feedbackSent && (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      )}
      {feedbackType && !feedbackSent && (
        <FeedbackContentStep
          feedback={feedbackType}
          onFeedbackRestarted={handleFeedbackRestart}
          onFeedbackSent={handleFeedbackSent}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela
        <a
          className="underline underline-offset-1"
          href="https://nextlevelweek.com/"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
