import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "./components/ChatMessage";
import { Header } from "./components/Header";
import { MessageSender } from "./components/MessageSender";
import foto from "./assets/foto.png";
import { timeAgo } from "./utils/time";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Mensagem {
  quemEnviou: "eu" | "outro";
  mensagem: string;
  data: Date;
  nome?: string;
  bold?: boolean;
}

export function App() {
  const [mensagem, setMensagem] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const [animationParent] = useAutoAnimate();

  const [mensagens, setMensagens] = useState<Mensagem[]>([
    {
      quemEnviou: "outro",
      mensagem: "Tive uma ideia incrível para um projeto! 😍",
      data: new Date("2023-01-26T14:30:00.948Z"),
      nome: "Cecilia",
    },
    {
      quemEnviou: "eu",
      mensagem: "Sério? Me conta mais.",
      data: new Date("2023-01-26T14:32:00.948Z"),
    },
    {
      quemEnviou: "outro",
      mensagem:
        "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?",
      data: new Date("2023-01-26T14:34:00.948Z"),
      nome: "Cecilia",
    },
    {
      quemEnviou: "eu",
      mensagem: "#boraCodar! 🚀",
      data: new Date("2023-01-26T14:36:00.948Z"),
      bold: true,
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const data = new Date();

    if (mensagem.trim() === "") return;
    setMensagens([
      ...mensagens,
      {
        quemEnviou: "eu",
        mensagem,
        data: new Date(),
      },
    ]);
    setMensagem("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens]);

  return (
    <div className="flex h-full max-w-7xl flex-1 flex-col gap-8 px-8 py-6 sm:px-16 sm:py-8 md:px-20 md:py-9">
      <Header nome="Gian" foto={foto} online />
      <main
        ref={animationParent}
        className="relative flex flex-1 flex-col gap-8 overflow-y-auto px-0.5 pt-6 sm:px-1"
      >
        <p className="absolute top-1 left-0 right-0 mx-auto w-fit rounded-xl bg-[#2d2a3c] py-1 px-2 text-center text-xs text-[#E1E1E6] ">
          {timeAgo(new Date("2023-01-26T14:30:00.948Z"))}
        </p>
        {mensagens.map((mensagem) => {
          if (mensagem.quemEnviou === "eu") {
            return (
              <ChatMessage
                data={mensagem.data}
                quemEnviou={mensagem.quemEnviou}
                mensagem={mensagem.mensagem}
                bold={mensagem.bold}
                key={mensagem.mensagem + mensagem.data}
                ref={bottomRef}
              />
            );
          }
          return (
            <ChatMessage
              data={mensagem.data}
              quemEnviou={mensagem.quemEnviou}
              mensagem={mensagem.mensagem}
              nome={mensagem.nome}
              bold={mensagem.bold}
              key={mensagem.data + mensagem.mensagem}
              ref={bottomRef}
            />
          );
        })}
      </main>
      <MessageSender
        onChange={(e) => setMensagem(e.target.value)}
        value={mensagem}
        onSubmit={handleSendMessage}
      />
    </div>
  );
}
