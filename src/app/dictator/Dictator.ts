export class Dictator {

  fName: string;
  lName: string;
  gender: string;
  birthYear: number;
  yearofDeath: number;
  description: string;

  constructor(fName: string, lName: string, gender: boolean, birthYear: number, yearofDeath: number, description: string) {
    this.fName = fName;
    this.lName = lName;
    if (gender == false) {

    this.gender = 'male';
    } else {
      this.gender = 'female';
    }
    this.birthYear = birthYear;
    this.yearofDeath = yearofDeath;
    this.description = description;
  }
}
