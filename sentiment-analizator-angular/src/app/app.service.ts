import { Lexicon } from './lexicon/lexicon.model';

export class AppService {

  lexiconArray: Lexicon[] = [];
  test() {
    console.log('huraaaayyy');
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
  getPositiveWordsAmount() {
    let positive: number = 0;
    for (let i = 0; i < this.lexiconArray.length; i++) {
      if (this.lexiconArray[i].value > 0) {
        positive++;
      }
    }
    return positive;
  }
  getNegativeWordsAmount() {
    let negative: number = 0;
    for (let i = 0; i < this.lexiconArray.length; i++) {
      if (this.lexiconArray[i].value < 0) {
        negative++;
      }
    }
    return negative;
  }
  getNeutralWordsAmount() {
    let neutral: number = 0;
    for (let i = 0; i < this.lexiconArray.length; i++) {
      if (this.lexiconArray[i].value == 0) {
        neutral++;
      }
    }
    return neutral;
  }

}