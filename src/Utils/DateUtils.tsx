import { TimezoneList } from '../Constants/TimezoneList';

export function getHour(timezoneName: string): string {
  return new Date().toLocaleString("pt-BR", { timeZone: timezoneName, hour: '2-digit' });
}

export function getMinute(timezoneName: string): string {
  return formatMinutesString(new Date().toLocaleString("pt-BR", { timeZone: timezoneName, minute: '2-digit' }));
}

export function getDate(timezoneName: string): string {
  return new Date().toLocaleDateString("pt-BR", { timeZone: timezoneName });
}

export function getFormattedTimezoneName(timezoneName: string): string {
  let formatedTimezoneName: string | undefined = TimezoneList.get(timezoneName);
  let returnString: string = '';

  if (formatedTimezoneName !== undefined) {
    returnString = formatedTimezoneName;
  }

  return returnString;
}

function formatMinutesString(minutesString: string) {
  if (minutesString.length === 1) {
    minutesString = '0' + minutesString;
  }

  return minutesString;
}