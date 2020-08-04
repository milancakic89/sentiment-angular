import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.css']
})
export class LexiconComponent implements OnInit {
lexicon: string[] = ['Hello', 'Hola', 'Hi', 'Mufasa', 'Jelena', 'Marija', 'Zika', 'Mika']
  constructor() { }

  ngOnInit(): void {
  }

}
