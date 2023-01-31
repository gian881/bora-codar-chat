const units = [
  { label: "ano", seconds: 31536000 },
  { label: "mês", seconds: 2592000 },
  { label: "semana", seconds: 604800 },
  { label: "dia", seconds: 86400 },
  { label: "hora", seconds: 3600 },
  { label: "minuto", seconds: 60 },
  { label: "segundo", seconds: 1 },
];

const calculateTimeDifference = (time: number) => {
  for (let { label, seconds } of units) {
    const interval = Math.floor(time / seconds);
    if (interval >= 1) {
      return {
        interval: interval,
        unit: label,
      };
    }
  }
  return {
    interval: 0,
    unit: "",
  };
};

export const timeAgo = (date: string | number | Date) => {
  const time = Math.floor(
    (new Date().valueOf() - new Date(date).valueOf()) / 1000
  );

  const { interval, unit } = calculateTimeDifference(time);

  if (interval > 1 && unit === "mês") return `${interval} meses atrás`;
  if ((unit === "segundo" || unit === "") && interval <= 10) return "agora";

  const suffix = interval === 1 ? "" : "s";

  return `${interval} ${unit}${suffix} atrás`;
};
