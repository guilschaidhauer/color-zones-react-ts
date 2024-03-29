import { TimezoneList } from '../Constants/TimezoneList';

export function getDateObject(timezoneName: string, isLiveTime: boolean, timeOffsetInSeconds: number): Date {
  // Create original date "Date" object
  const originalDateString = new Date().toLocaleString("en-US", { timeZone: timezoneName });
  const parsedOriginalDate = Date.parse(originalDateString);
  const originalDate = new Date(parsedOriginalDate);

  if (isLiveTime) {
    return originalDate;
  }

  // Add offset to time
  const originalDateInMs = originalDate.getTime();
  const dateWithOffsetInMs = originalDateInMs + (timeOffsetInSeconds * 1000);
  const dateWithOffset = new Date(dateWithOffsetInMs);

  return dateWithOffset;
}

export function getHour(date: Date): string {
  return date.toLocaleString("pt-BR", { hour: '2-digit' });
}

export function getMinute(date: Date, timezoneName: string): string {
  return formatMinutesString(date.toLocaleString("pt-BR", { timeZone: timezoneName, minute: '2-digit' }));
}

export function getDate(date: Date): string {
  return date.toLocaleDateString("pt-BR");
}

export function getFormattedTimezoneName(timezoneName: string): string {
  let formatedTimezoneName: string | undefined = TimezoneList.get(timezoneName);
  let returnString: string = '';

  if (formatedTimezoneName !== undefined) {
    returnString = formatedTimezoneName;
  }

  return returnString;
}

export function getTimeUntilNextSecond(): number {
  // Get the current date and time
  let now: Date = new Date();

  // Calculate the start of the next hour
  let nextSecond: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds() + 1, 0);

  // Calculate the time until the start of the next second
  return nextSecond.getTime() - now.getTime();
}

export function getTimeUntilNextMinute(): number {
  // Get the current date and time
  let now: Date = new Date();

  // Calculate the start of the next minute
  let nextMinute: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 0, 0);

  // Calculate the time until the start of the next minute
  return nextMinute.getTime() - now.getTime();
}

export function getTimeUntilNextHour(): number {
  // Get the current date and time
  let now: Date = new Date();

  // Calculate the start of the next hour
  let nextMinute: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, now.getMinutes(), 0, 0);

  // Calculate the time until the start of the next hour
  return nextMinute.getTime() - now.getTime();
}

export function getTimezoneAbbreviation(timezoneName: string): string {
  const zone = new Date().toLocaleTimeString('pt-BR',{timeZone: timezoneName, timeZoneName:'short'}).split(' ')[1]
  return zone;
}

function formatMinutesString(minutesString: string) {
  if (minutesString.length === 1) {
    minutesString = '0' + minutesString;
  }

  return minutesString;
}