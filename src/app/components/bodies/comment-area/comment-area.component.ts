import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-area',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './comment-area.component.html',
  styleUrl: './comment-area.component.css'
})
export class CommentAreaComponent {
 // formulário
    commentForm = new FormGroup({
      fullname: new FormControl('', [Validators.required ,Validators.pattern(/^[^0-9][^@#]+$/)]),
      grade: new FormControl('', [Validators.required,Validators.pattern(/^\b[1-5]\b/)]),
      comment: new FormControl('', [Validators.required]),
    });


    inputValues: { [key: string]: string } = {
      input_fullname: '',
      input_grade:'',
    };

    inputChanged(inputName: string, event: any) {
      this.inputValues[inputName] = event.target.value;
    }

    submit() {
      if (this.commentForm.valid) {
        console.log(this.commentForm.value);
      }
    }
}
