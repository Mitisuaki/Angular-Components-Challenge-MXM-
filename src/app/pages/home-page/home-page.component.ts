import { Component } from '@angular/core';
import { HeaderWithoutNavComponent } from "../../components/headers/header-without-nav/header-without-nav.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [HeaderWithoutNavComponent]
})
export class HomePageComponent {

}
