import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-forms.component.html',
  styleUrl: './contact-forms.component.css'
})
export class ContactFormsComponent {
    // formulário
    contactForm = new FormGroup({
      fullname: new FormControl('', [Validators.required ,Validators.pattern(/^[^0-9][^@#]+$/)]),
      phoneNumber: new FormControl('', [Validators.required,Validators.pattern(/^\d{10}/)] ),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      termos: new FormControl('', [Validators.required])
    });


    inputValues: { [key: string]: string } = {
      input_fullname: '',
      input_email: '',
      input_phoneNumber:'',
    };

    inputChanged(inputName: string, event: any) {
      this.inputValues[inputName] = event.target.value;
    }

    submit() {
      if (this.contactForm.valid) {
        console.log(this.contactForm.value);
      }
    }

}
