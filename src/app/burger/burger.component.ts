import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";


@Component({
    selector: 'app-burger',
    templateUrl: './burger.component.html',
    styleUrls: ['./burger.component.scss'],
    imports: [CommonModule]
})
export class BurgerComponent {
  @Input() open: boolean = false;
  @Input() color = '#000';

  constructor() {}

  public getClassForFirstLine() {
    return this.open ? 'rotateFirstLine' : '';
  }

  public getClassForSecondLine() {
    return this.open ? 'rotateSecondLine' : '';
  }

  public getClassForLastLine() {
    return this.open ? 'rotateLastLine' : '';
  }
}
