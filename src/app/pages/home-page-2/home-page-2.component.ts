import { Component } from '@angular/core';
import { HeaderWithoutNavComponent } from "../../components/headers/header-without-nav/header-without-nav.component";
import { HeaderWithNavComponent } from "../../components/headers/header-with-nav/header-with-nav.component";
import { SideNavbarComponent } from "../../components/bodies/side-navbar/side-navbar.component";
import { StartBodyComponent } from "../../components/bodies/start-body/start-body.component";
import { TextNimg1Component } from "../../components/bodies/text-nimg-1/text-nimg-1.component";
import { TextNimg2Component } from "../../components/bodies/text-nimg-2/text-nimg-2.component";
import { CarouselComponent } from "../../components/bodies/carousel/carousel.component";
import { ContactFormsComponent } from "../../components/bodies/contact-forms/contact-forms.component";
import { CommentAreaComponent } from "../../components/bodies/comment-area/comment-area.component";
import { QuestionsAreaComponent } from "../../components/bodies/questions-area/questions-area.component";
import { Footer1Component } from "../../components/footers/footer-1/footer-1.component";
import { TextComponent } from "../../components/bodies/text/text.component";
import { DifferencesComponent } from "../../components/bodies/differences/differences.component";

@Component({
  selector: 'app-home-page-2',
  standalone: true,
  imports: [HeaderWithoutNavComponent, HeaderWithNavComponent, SideNavbarComponent, StartBodyComponent, TextNimg1Component, TextNimg2Component, CarouselComponent, ContactFormsComponent, CommentAreaComponent, QuestionsAreaComponent, Footer1Component, TextComponent, DifferencesComponent],
  templateUrl: './home-page-2.component.html',
  styleUrl: './home-page-2.component.css'
})
export class HomePage2Component {

}
