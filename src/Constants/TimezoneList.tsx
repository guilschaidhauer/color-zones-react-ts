
export const TimezoneList = new Map([
  ['Australia/Melbourne', 'Melbourne'],
  ['Australia/Sydney', 'Sydney'],

  ['Asia/Tokyo', 'Tokyo'],
  ['Asia/Seoul', 'Seoul'],

  ['Asia/Taipei', 'Taipei'],
  ['Asia/Shanghai', 'Beijing'],
  ['Asia/Hong_Kong', 'Hong Kong'],

  ['Asia/Kolkata', 'Bangalore'],

  ['Europe/Paris', 'Paris'],
  ['Europe/Berlin', 'Mülheim'],
  ['Europe/Budapest', 'Budapest'],
  ['Europe/Madrid', 'Madrid'],
  ['Europe/Zurich', 'Zurich'],
  ['Europe/Rome', 'Rome'],

  ['Europe/London', 'London'],
  ['Europe/Dublin', 'Dublin'],

  ['America/Sao_Paulo', 'São Leopoldo'],
  ['America/Argentina/Buenos_Aires', 'Buenos Aires'],

  ['America/Manaus', 'Manaus'],

  ['America/Vancouver', 'Vancouver'],
  ['America/Toronto', 'Toronto'],
  ['America/New_York', 'New York'],

  ['America/Los_Angeles', 'Los Angeles']
]);

export function getTimezoneByValue(searchValue: string): string {
  let timezoneFullName: string = '';

  // Is there a way to break out of this forEach? Maybe not use a forEach?
  TimezoneList.forEach((value: string, key: string) => {
    if (value === searchValue) {
      timezoneFullName = key;
    }
  });

  return timezoneFullName;
}