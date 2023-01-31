import { timeAgo } from "../utils/time";
import { CloseIcon } from "./CloseIcon";

interface HeaderProps {
  nome: string;
  foto: string;
  online?: boolean;
}

export function Header({ nome, foto, online = true }: HeaderProps) {
  return (
    <div>
      <div className="flex items-center gap-4 text-[#E1E1E6]">
        <img
          src={foto}
          alt="Foto de Cecilia Sassaki"
          className="w-12 rounded-full"
        />
        <div className="flex flex-col">
          <a
            href="https://github.com/gian881"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            {nome}
          </a>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#00B37E]" />{" "}
            <p className="select-none text-xs text-[#00B37E]">Online</p>
          </div>
        </div>
        <CloseIcon
          onClick={() => window.location.reload()}
          className="ml-auto cursor-pointer"
        />
      </div>
    </div>
  );
}
