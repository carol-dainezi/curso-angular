import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = 'Carol';
  age: number = 19;
  job = 'Dev';
  hobbies = ['Jogar', 'Estudar', 'Programar'];
  car = {
    name: 'Ônix',
    year: 2020
  }
}
