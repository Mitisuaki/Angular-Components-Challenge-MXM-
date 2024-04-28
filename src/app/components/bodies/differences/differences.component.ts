import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface LineItem {
  talkie: string;
  others: string;
}

@Component({
  selector: 'app-differences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './differences.component.html',
  styleUrl: './differences.component.css'
})

export class DifferencesComponent {

  lines: LineItem[] = [
    { talkie: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius earum? Aliquid?', others: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius earum? Aliquid?'},
    { talkie: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius earum? Aliquid?', others: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius earum? Aliquid?'},
    { talkie: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius earum? Aliquid?', others: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius earum? Aliquid?'},
    { talkie: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius earum? Aliquid?', others: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius earum? Aliquid?'},
    { talkie: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius earum? Aliquid?', others: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius earum? Aliquid?'},

  ];

}
