import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-with-nav',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header-with-nav.component.html',
  styleUrl: './header-with-nav.component.css'
})
export class HeaderWithNavComponent {

  openModal(){
    console.log("teste");

  }
}
