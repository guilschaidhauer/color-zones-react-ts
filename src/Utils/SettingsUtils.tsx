//let savedTimezones = localStorage.getItem('savedTimezones');

import { getDateObject } from "./DateUtils";

/*export function loadSettings() {
  let savedTimezones = getSavedTimezones();

  for (let i=0; i<savedTimezones.length; i++) {
      createTimezoneCard(savedTimezones[i]);
  }
}*/

export type Timezone = {
  name: string,
  date: Date,
}

export function addTimezoneToSavedTimezones(timezoneName: string): void {
  let savedTimezones: Timezone[] = getSavedTimezones();

  savedTimezones.push({
      name: timezoneName,
      date: getDateObject(timezoneName, true, 0)
    }
  );

  parseAndSaveTimezonesArray(savedTimezones);
}

export function removeTimezoneFromSavedTimezones(timezoneName: string): void {
  let savedTimezones: Timezone[] = getSavedTimezones();

  for(var i=0; i<savedTimezones.length; i++){ 
      if (savedTimezones[i].name === timezoneName) { 
          savedTimezones.splice(i, 1); 
      }
  }

  parseAndSaveTimezonesArray(savedTimezones);
}

export function getSavedTimezones(): Timezone[] {
  let savedTimezonesString: string | null = localStorage.getItem('savedTimezones');
  let savedTimezones: Timezone[] = [];
  let parsedTimezones: string[] = [];

  if (savedTimezonesString === null) {
    savedTimezones = [];
  } else {
    parsedTimezones = JSON.parse(savedTimezonesString);

    for (let i: number=0; i<parsedTimezones.length; i++) {
      savedTimezones.push({
        name: parsedTimezones[i],
        date: getDateObject(parsedTimezones[i], true, 0)
      });
    }
  }

  return savedTimezones;
}

export function parseAndSaveTimezonesArray(timezones: Timezone[]) {
  let timezonesString: string[] = [];

  for (let i: number=0; i<timezones.length; i++) {
    timezonesString.push(timezones[i].name);
  }

  const string = JSON.stringify(timezonesString);

  localStorage.setItem('savedTimezones', string);
}