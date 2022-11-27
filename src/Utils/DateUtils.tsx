import { TimezoneList } from '../Constants/TimezoneList';

function getDateObject(timezoneName: string, isLiveTime: boolean, timeOffsetInSeconds: number): Date {
  // Create original date "Date" object
  const originalDateString = new Date().toLocaleString("en-US", { timeZone: timezoneName });
  const parsedOriginalDate = Date.parse(originalDateString);
  const originalDate = new Date(parsedOriginalDate);
  console.log('here');


  if (isLiveTime) {
    return originalDate;
  }

  // Add offset to time
  const originalDateInMs = originalDate.getTime();
  const dateWithOffsetInMs = originalDateInMs + (timeOffsetInSeconds * 1000);
  const dateWithOffset = new Date(dateWithOffsetInMs);

  return dateWithOffset;
}

export function getHour(timezoneName: string, isLiveTime: boolean, timeOffsetInSeconds: number): string {
  let date = getDateObject(timezoneName, isLiveTime, timeOffsetInSeconds);
  return date.toLocaleString("pt-BR", { hour: '2-digit' });
}

export function getMinute(timezoneName: string, isLiveTime: boolean, timeOffsetInSeconds: number): string {
  let date = getDateObject(timezoneName, isLiveTime, timeOffsetInSeconds);
  return formatMinutesString(date.toLocaleString("pt-BR", { timeZone: timezoneName, minute: '2-digit' }));
}

export function getDate(timezoneName: string, isLiveTime: boolean, timeOffsetInSeconds: number): string {
  let date = getDateObject(timezoneName, isLiveTime, timeOffsetInSeconds);
  return date.toLocaleDateString("pt-BR", { timeZone: timezoneName });
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