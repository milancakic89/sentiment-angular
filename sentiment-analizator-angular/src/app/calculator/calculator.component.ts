import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Lexicon } from '../lexicon/lexicon.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  @ViewChild('textArea') textElem: ElementRef;
  @ViewChild('textFile') fileElem: ElementRef;

  analizingStage: number = 0;
  lexiconArray: Lexicon[] = [];

  textResults = {
    pozitive: 0,
    negative: 0,
    neutral: 0,
    total: 0
  }
  fileResults = {
    pozitive: 0,
    negative: 0,
    neutral: 0,
    total: 0
  }

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.lexiconArray = this.service.fetchLocalStorage();
  }
  
  analizeData(text: string, fileText: string) {
    //fileText can receive string or null (if no input provided => null);

    this.resetData(); //if analizing, previous data should't be shown

    let reg = /[^0-9a-zA-Z]+/;
    let textToAnalize = text.toUpperCase().split(reg);

    if (fileText) {
      let textFile = fileText.toUpperCase().split(reg);
      textFile.forEach((word: string) => {
        this.lexiconArray.forEach((lexicon: Lexicon) => {
          if (word.includes(lexicon.word.toUpperCase())) {
            if (lexicon.value === 0) {
              return this.fileResults.neutral++;
            }
            else if (lexicon.value > 0) {
              this.fileResults.total += lexicon.value;
              return this.fileResults.pozitive++;
            }
            else {
              this.fileResults.total += lexicon.value;
              return this.fileResults.negative++;
            }
          }
        })
      })
    }
  
    if (textToAnalize) {
      textToAnalize.forEach((word: string) => {
        this.lexiconArray.forEach((lexicon: Lexicon) => {
          if (word.includes(lexicon.word.toUpperCase())) {
            if (lexicon.value === 0) {
              return this.textResults.neutral++;
            }
            else if (lexicon.value > 0) {
              this.textResults.total += lexicon.value;
              return this.textResults.pozitive++;
            }
            else {
              this.textResults.total += lexicon.value;
              return this.textResults.negative++;
            }
          }
        })
      })
    }
    setTimeout((spinner: void) => {
      this.analizingStage = 2;
    }, 1500);

  }

  analize() {
    const text = this.textElem.nativeElement.value;
    let file = this.fileElem.nativeElement.files[0] || null;
    if (file) {
      let reader = new FileReader();
      reader.onload = () => {
        file = reader.result;
        return this.analizeData(text, file)
      }
      reader.readAsText(file);
    } else {
      this.analizeData(text, null)
    }
  }

  resetData() {
    this.analizingStage = 1;

    this.textResults.pozitive = 0;
    this.textResults.neutral = 0;
    this.textResults.negative = 0;
    this.textResults.total = 0;

    this.fileResults.pozitive = 0;
    this.fileResults.neutral = 0;
    this.fileResults.negative = 0;
    this.fileResults.total = 0;
  }

}

