import { Component } from '@angular/core';
import { HeaderWithoutNavComponent } from "../../components/headers/header-without-nav/header-without-nav.component";
import { HeaderWithNavComponent } from "../../components/headers/header-with-nav/header-with-nav.component";
import { SideNavbarComponent } from "../../components/bodies/side-navbar/side-navbar.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [HeaderWithoutNavComponent, HeaderWithNavComponent, SideNavbarComponent]
})
export class HomePageComponent {

}
