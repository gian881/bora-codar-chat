import { forwardRef } from "react";
import { timeAgo } from "../utils/time";

interface ChatMessageProps {
  data: Date;
  mensagem: string;
  quemEnviou: "eu" | "outro";
  nome?: string;
  bold?: boolean;
}

export const ChatMessage = forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ data, mensagem, quemEnviou, nome = "Você", bold = false }, ref) => {
    return (
      <div
        className={`flex flex-col ${quemEnviou === "eu" ? "items-end" : ""}`}
      >
        <p
          className={`text-xs text-[#E1E1E6] ${
            quemEnviou === "eu" ? "text-right" : ""
          }`}
        >
          {nome} - {timeAgo(data)}
        </p>
        <div
          className={`w-fit max-w-[40vw] p-[14px] text-xs md:text-sm ${
            bold ? "font-bold" : ""
          } ${
            quemEnviou === "eu"
              ? "rounded-tl-lg bg-[#07847E]"
              : "rounded-br-lg bg-[#633BBC]"
          } mt-2 rounded-tr-lg rounded-bl-lg text-[#E1E1E6]`}
        >
          {mensagem}
          <div ref={ref} />
        </div>
      </div>
    );
  }
);
