import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lexicon } from './lexicon.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.css']
})
export class LexiconComponent implements OnInit, AfterViewInit {


  lexiconArray: Lexicon[] = []

  positiveAmount: number = 0;
  neutralAmount: number = 0;
  negativeAmount: number = 0;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getUpdatedLexicon();

  }
  ngAfterViewInit() {
    this.getWordsAmount()
  }

  getWordsAmount() {
    this.positiveAmount = this.service.getPositiveWordsAmount();
    this.neutralAmount = this.service.getNeutralWordsAmount();
    this.negativeAmount = this.service.getNegativeWordsAmount();
  }

  onAddWord(form: NgForm) {
    const values = form.value;
    const word: string = values.word;
    const value: number = values.value;
    this.lexiconArray = this.service.addNewLexicon(word, value);
    this.getWordsAmount();

  }
  deleteItem(index: number) {
    this.lexiconArray = this.service.deleteFromLexicon(index);
    this.getWordsAmount();
  }

}
