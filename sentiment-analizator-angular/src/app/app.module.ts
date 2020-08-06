import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LexiconComponent } from './lexicon/lexicon.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ResultTextComponent } from './calculator/result-text/result-text.component';
import { ResultFileComponent } from './calculator/result-file/result-file.component';



const routes: Routes = [
  { path: '', redirectTo: 'lexicon', pathMatch: 'full' },
  { path: 'lexicon', component: LexiconComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: ':others', component: LexiconComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LexiconComponent,
    CalculatorComponent,
    HeaderComponent,
    ResultTextComponent,
    ResultFileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
