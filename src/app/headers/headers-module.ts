import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { DefaultNavbar } from './navbar/default-navbar';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    Header,
    Navbar,
    DefaultNavbar
  ],
  exports: [
    Header,
    Navbar,
    DefaultNavbar
  ]
})
export class HeadersModule {}
