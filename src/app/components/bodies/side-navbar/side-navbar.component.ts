import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {

  toggleSideNavabar():void{
    const button:any = document.querySelector("#openCloseBtn");
    const sideNavbar:any = document.querySelector("#side-navbar");
    const main:any = document.querySelector("#main");

    const checkStateBtn:boolean =  button.classList.contains("fa-angle-left");
    const checkStateNav:boolean =  sideNavbar.classList.contains("d-none");
    if (checkStateBtn) {
      button.classList.replace("fa-angle-left", "fa-angle-right");
    } else{
      button.classList.replace("fa-angle-right", "fa-angle-left");
    }

    if (!checkStateNav) {
      sideNavbar.classList.add("d-none");
      button.style.left = "0px";
      button.style.zIndex = "1";
      main.style.minWidth = "100%";
    } else{
      sideNavbar.classList.remove("d-none");
      button.style.left = "145px";
      main.style.minWidth = "calc(100vw - 160px)";
    }
  }
}
