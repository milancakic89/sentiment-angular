import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-text',
  templateUrl: './result-text.component.html',
  styleUrls: ['./result-text.component.css']
})
export class ResultTextComponent implements OnInit {
  @Input() textResults;
  constructor() { }

  ngOnInit(): void {
  }

}
