import { SendIcon } from "./SendIcon";

interface MessageSenderProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function MessageSender({
  value,
  onChange,
  onSubmit,
}: MessageSenderProps) {
  return (
    <form
      className="flex w-full rounded-full bg-[#282843] px-6 py-4 ring-violet-400 focus-within:ring-1"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="flex-1 bg-transparent text-xs text-[#E1E1E6] outline-none placeholder:text-[#bebec5] md:text-sm"
        placeholder="Digite uma mensagem"
        value={value}
        onChange={onChange}
      />
      <button type="submit" aria-label="Enviar mensagem">
        <SendIcon />
      </button>
    </form>
  );
}
