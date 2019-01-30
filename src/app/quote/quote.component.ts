import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Dr Seuss', 'Dont cry because its over, smile because it happened', 'Ndayiragije Hyacinthe', 0, 0),
    new Quote('Oscar Wilde', 'Be yourself; everyone else is already taken.', 'Ndayiragije Hyacinthe', 0, 0),
    new Quote('Frank Zappa', 'So many books, so little time.', 'Ndayiragije Hyacinthe', 0, 0),
    new Quote('Mae West', 'You only live once, but if you do it right, once is enough.', 'Ndayiragije Hyacinthe', 0, 0),

  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}
  toogleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }
}
