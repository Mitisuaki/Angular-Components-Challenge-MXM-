import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface FAQItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-questions-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions-area.component.html',
  styleUrl: './questions-area.component.css'
})

export class QuestionsAreaComponent {

  faqs: FAQItem[] = [
    { question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, iste?', answer: 'Answer 1', open: false },
    { question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, iste?', answer: 'Answer 2', open: false },
    { question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, iste?', answer: 'Answer 3', open: false },
    { question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, iste?', answer: 'Answer 4', open: false },
    // Add more FAQ items as needed
  ];

  toggleAnswer(faq: FAQItem): void {
    faq.open = !faq.open;
  }

}
