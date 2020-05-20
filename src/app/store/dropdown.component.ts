import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown.component.html'
})
export class NgbdDropdownBasic {

  sortELement: number[] = [10, 20, 50, 100];
  selectNumberItem: number;

  changeElement(nElement: number) {
    this.selectNumberItem = nElement;
  }
}
