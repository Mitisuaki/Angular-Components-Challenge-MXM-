import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface FAQItem {
  title: string;
  body: string;
}

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {

  faqs: FAQItem[] = [
    { title: 'Title 1', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nam dolorem earum obcaecati eius sunt laboriosam, vel sit molestias, tempore quam. Neque placeat, quod ullam non dignissimos deserunt omnis dicta nam voluptate architecto dolor eos. Aliquam ad amet nemo beatae?'},
    { title: 'Title 2', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nam dolorem earum obcaecati eius sunt laboriosam, vel sit molestias, tempore quam. Neque placeat, quod ullam non dignissimos deserunt omnis dicta nam voluptate architecto dolor eos. Aliquam ad amet nemo beatae?'},
    { title: 'Title 3', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nam dolorem earum obcaecati eius sunt laboriosam, vel sit molestias, tempore quam. Neque placeat, quod ullam non dignissimos deserunt omnis dicta nam voluptate architecto dolor eos. Aliquam ad amet nemo beatae?'},
    { title: 'Title 4', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nam dolorem earum obcaecati eius sunt laboriosam, vel sit molestias, tempore quam. Neque placeat, quod ullam non dignissimos deserunt omnis dicta nam voluptate architecto dolor eos. Aliquam ad amet nemo beatae?'},
    { title: 'Title 5', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nam dolorem earum obcaecati eius sunt laboriosam, vel sit molestias, tempore quam. Neque placeat, quod ullam non dignissimos deserunt omnis dicta nam voluptate architecto dolor eos. Aliquam ad amet nemo beatae?'},
    { title: 'Title 6', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nam dolorem earum obcaecati eius sunt laboriosam, vel sit molestias, tempore quam. Neque placeat, quod ullam non dignissimos deserunt omnis dicta nam voluptate architecto dolor eos. Aliquam ad amet nemo beatae?'},
  ];

}
