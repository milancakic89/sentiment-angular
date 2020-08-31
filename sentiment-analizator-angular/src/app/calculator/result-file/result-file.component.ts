import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-file',
  templateUrl: './result-file.component.html',
  styleUrls: ['./result-file.component.css']
})
export class ResultFileComponent implements OnInit {
  @Input() fileResults;
  constructor() { }

  ngOnInit(): void {
  }

}
