export function formatDate(date: Date) {
  let horas = date.getHours();
  let minutes = date.getMinutes();

  const amPm = horas >= 12 ? "PM" : "AM";

  horas = horas % 12;
  horas = horas ? horas : 12;

  minutes = minutes < 10 ? minutes : minutes;

  return `${horas.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${amPm}`;
}
