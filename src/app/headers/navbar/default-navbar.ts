import { Component } from '@angular/core';

@Component({
  selector: 'default-navbar',
  template: `
    <a [routerLink]="['']">Home</a>
    <a [routerLink]="['about']">About</a>
  `
})
export class DefaultNavbar {
  constructor() {}

}
