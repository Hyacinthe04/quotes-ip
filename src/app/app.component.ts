import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
      new Quote('Dr Seuss', 'Dont cry because its over, smile because it happened', 'Ndayiragije Hyacinthe', 0, 0),
      new Quote('Oscar Wilde', 'Be yourself; everyone else is already taken.', 'Ndayiragije Hyacinthe', 0, 0),
      new Quote('Frank Zappa', 'So many books, so little time.', 'Ndayiragije Hyacinthe', 0, 0),
      new Quote('Mae West', 'You only live once, but if you do it right, once is enough.', 'Ndayiragije Hyacinthe', 0, 0)
    ]
}