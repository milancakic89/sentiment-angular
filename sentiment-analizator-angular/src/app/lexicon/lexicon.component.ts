import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lexicon } from './lexicon.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.css']
})
export class LexiconComponent implements OnInit {


  lexiconArray: Lexicon[] = []

  applyClass: string = '';

  allWords: number = 0;
  positiveAmount: number = 0;
  neutralAmount: number = 0;
  negativeAmount: number = 0;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getUpdatedLexicon();
    this.getWordsAmount();

  }


  getWordsAmount() {
    this.positiveAmount = this.service.getPositiveWordsAmount();
    this.neutralAmount = this.service.getNeutralWordsAmount();
    this.negativeAmount = this.service.getNegativeWordsAmount();
    this.allWords = this.service.getAllWordsAmount();
  }

  onAddWord(form: NgForm) {
    const values = form.value;
    const word: string = values.word;
    const value: number = values.value;
    if (form.valid) {
      this.lexiconArray = this.service.addNewLexicon(word, value);
      this.getWordsAmount();
    }


  }
  deleteItem(index: number) {
    this.lexiconArray = this.service.deleteFromLexicon(index);
    this.getWordsAmount();
  }
  // add 'neutral' as param to filter neutral words. 'positive' to filter positive number, 'negative' for negative.
  filterWords(param: string) {
    this.lexiconArray = this.service.filterWords(param)
    this.applyClass = param;
  }

  onSave() {
    console.log('Saving... To local storage');
  }
}
