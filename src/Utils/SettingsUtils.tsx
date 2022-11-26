//let savedTimezones = localStorage.getItem('savedTimezones');

/*export function loadSettings() {
  let savedTimezones = getSavedTimezones();

  for (let i=0; i<savedTimezones.length; i++) {
      createTimezoneCard(savedTimezones[i]);
  }
}*/

export function addTimezoneToSavedTimezones(timezoneName: string): void {
  let savedTimezones: string[] = getSavedTimezones();

  savedTimezones.push(timezoneName);

  parseAndSaveTimezonesArray(savedTimezones);
}

export function removeTimezoneFromSavedTimezones(timezoneName: string): void {
  let savedTimezones: string[] = getSavedTimezones();

  for(var i=0; i<savedTimezones.length; i++){ 
      if (savedTimezones[i] === timezoneName) { 
          savedTimezones.splice(i, 1); 
      }
  }

  parseAndSaveTimezonesArray(savedTimezones);
}

export function getSavedTimezones(): string[] {
  let savedTimezonesString: string | null = localStorage.getItem('savedTimezones');
  let savedTimezones;

  if (savedTimezonesString === null) {
      savedTimezones = [];
  } else {
      savedTimezones = JSON.parse(savedTimezonesString);
  }

  return savedTimezones;
}

export function parseAndSaveTimezonesArray(timezones: string[]) {
  const string = JSON.stringify(timezones);

  localStorage.setItem('savedTimezones', string);
}