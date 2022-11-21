
export function getHour(timezoneName: string): string {
  return new Date().toLocaleString("pt-BR", { timeZone: timezoneName, hour: '2-digit' });  
}

export function getMinute(timezoneName: string): string {
  return new Date().toLocaleString("pt-BR", { timeZone: timezoneName, minute: '2-digit' });
}

export function getDate(timezoneName: string): string {
  return new Date().toLocaleDateString("pt-BR", { timeZone: timezoneName });
}