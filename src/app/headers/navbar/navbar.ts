import { Component } from '@angular/core';

@Component({
  selector: 'navbar-component',
  template: `<nav><ng-content></ng-content></nav>`
})
export class Navbar {
  constructor() { }
}
