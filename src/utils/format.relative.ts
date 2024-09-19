export const fomratRelativeTime = (date: Date) => {
  const now = new Date();
  const diffInMilliseconds = date.getTime() - now.getTime();

  type Unit = {
    unit: Intl.RelativeTimeFormatUnit;
    milliseconds: number;
  };

  const units: Unit[] = [
    { unit: "year", milliseconds: 1000 * 60 * 60 * 24 * 365 }, // 1 year = 365 days
    { unit: "month", milliseconds: 1000 * 60 * 60 * 24 * 30 }, // Aproximadamente 30 dias por mês
    { unit: "day", milliseconds: 1000 * 60 * 60 * 24 }, // 1 day = 24 hours
    { unit: "hour", milliseconds: 1000 * 60 * 60 }, // 1 hour = 60 minutes
    { unit: "minute", milliseconds: 1000 * 60 }, // 1 minute = 60 seconds
    { unit: "second", milliseconds: 1000 }, // 1 second = 1000 milliseconds
  ];

  for (const { unit, milliseconds } of units) {
    const difference = diffInMilliseconds / milliseconds;
    if (Math.abs(difference) >= 1) {
      const rtf = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });
      return rtf.format(Math.round(difference), unit);
    }
  }

  return "agora";
};
