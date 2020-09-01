import { Lexicon } from './lexicon/lexicon.model';
import { of } from 'rxjs';

export class AppService {

  lexiconArray: Lexicon[] = [];

  saveLexicon(lexicon: Lexicon[]): void {
    this.lexiconArray = lexicon;
  }

  addNewLexicon(word: string, value: number) {
    this.lexiconArray.push(new Lexicon(word, value));
    return this.getUpdatedLexicon();
  }

  getUpdatedLexicon() {
    return this.lexiconArray.slice();
  }
  deleteFromLexicon(index: number) {
    this.lexiconArray.splice(index, 1);
    return this.getUpdatedLexicon();
  }
  getAllWordsAmount() {
    return this.lexiconArray.length;
  }
  getPositiveWordsAmount() {
    let positive = 0;
    for (const lex of this.lexiconArray) {
      if (lex.value > 0) {
        positive++;
      }
    }
    // for (let i = 0; i < this.lexiconArray.length; i++) {
    //   if (this.lexiconArray[i].value > 0) {
    //     positive++;
    //   }
    // }
    return positive;
  }
  getNegativeWordsAmount() {
    let negative = 0;
    for (const lex of this.lexiconArray) {
      if (lex.value < 0) {
        negative++;
      }
    }
    return negative;
  }
  getNeutralWordsAmount() {
    let neutral = 0;
    for (const lex of this.lexiconArray) {
      if (lex.value === 0) {
        neutral++;
      }
    }
    return neutral;
  }
  filterWords(param: string) {
    let filteredWords: Lexicon[] = [];
    if (param === 'neutral') {
      filteredWords = this.lexiconArray.filter(lexicon => {
        return lexicon.value === 0;
      });
    } else if (param === "positive") {
      filteredWords = this.lexiconArray.filter(lexicon => {
        return lexicon.value > 0;
      });
    } else if (param === "negative") {
      filteredWords = this.lexiconArray.filter(lexicon => {
        return lexicon.value < 0;
      });
    } else {
      filteredWords = this.lexiconArray.slice();
    }

    return filteredWords;
  }

  fetchLocalStorage() {
    let lexicon = localStorage.getItem('lexicon');
    let lexiconParsed = JSON.parse(lexicon);
    this.lexiconArray = lexiconParsed;
    if (lexiconParsed) {
      return this.lexiconArray = lexiconParsed;
    }
    return [];
  }
}
