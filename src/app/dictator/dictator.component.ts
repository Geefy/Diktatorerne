import { Component, OnInit } from '@angular/core';
import { Dictator } from './Dictator'
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dictator',
  templateUrl: './dictator.component.html',
  styleUrls: ['./dictator.component.css']
})
export class DictatorComponent implements OnInit {
  dictators: Dictator[] = [];
  dictatorData: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.dictatorData = new FormGroup({
      fName: new FormControl(),
      lName: new FormControl(),
      gender: new FormControl(),
      birthYear: new FormControl(),
      yearofDeath: new FormControl(),
      description: new FormControl()
    });
  }
  onLoginTest() {
    alert('Yes');
  }
  CreateDictator() {
    let dictator = new Dictator(this.dictatorData.get('fName').value,
      this.dictatorData.get('lName').value,
      this.dictatorData.get('gender').value,
      this.dictatorData.get('birthYear').value,
      this.dictatorData.get('yearofDeath').value,
      this.dictatorData.get('description').value);
    this.dictators.push(dictator);
  }

  DeleteDictator(dic: Dictator) {
    const index = this.dictators.indexOf(dic, 0);
    if (index > -1) {
      this.dictators.splice(index, 1);
    }
  }
}


