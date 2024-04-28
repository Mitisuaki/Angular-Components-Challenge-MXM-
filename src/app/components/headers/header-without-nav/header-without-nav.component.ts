import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-without-nav',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header-without-nav.component.html',
  styleUrl: './header-without-nav.component.css'
})
export class HeaderWithoutNavComponent {

  openModal(){
    console.log("teste");

  }

}
