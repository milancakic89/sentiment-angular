import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
stage: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
analize(){
  this.stage++;
}
}
