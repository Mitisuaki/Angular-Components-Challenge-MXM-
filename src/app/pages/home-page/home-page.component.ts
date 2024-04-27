import { Component } from '@angular/core';
import { HeaderWithoutNavComponent } from "../../components/headers/header-without-nav/header-without-nav.component";
import { HeaderWithNavComponent } from "../../components/headers/header-with-nav/header-with-nav.component";
import { SideNavbarComponent } from "../../components/bodies/side-navbar/side-navbar.component";
import { StartBodyComponent } from "../../components/bodies/start-body/start-body.component";
import { TextNimg1Component } from "../../components/bodies/text-nimg-1/text-nimg-1.component";
import { TextNimg2Component } from "../../components/bodies/text-nimg-2/text-nimg-2.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [HeaderWithoutNavComponent, HeaderWithNavComponent, SideNavbarComponent, StartBodyComponent, TextNimg1Component, TextNimg2Component]
})
export class HomePageComponent {

}
