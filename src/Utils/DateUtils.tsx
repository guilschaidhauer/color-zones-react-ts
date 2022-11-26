
export function getHour(timezoneName: string): string {
  return new Date().toLocaleString("pt-BR", { timeZone: timezoneName, hour: '2-digit' });  
}

export function getMinute(timezoneName: string): string {
  return formatMinutesString(new Date().toLocaleString("pt-BR", { timeZone: timezoneName, minute: '2-digit' }));
}

export function getDate(timezoneName: string): string {
  return new Date().toLocaleDateString("pt-BR", { timeZone: timezoneName });
}

function formatMinutesString(minutesString: string) {
  if (minutesString.length === 1) {
      minutesString = '0' + minutesString;
  }

  return minutesString;
}