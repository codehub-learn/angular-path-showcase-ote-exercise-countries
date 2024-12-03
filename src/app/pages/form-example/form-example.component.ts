import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.scss'
})
export class FormExampleComponent implements OnInit {
  propertyForm!: FormGroup;

  ngOnInit(): void {
    this.propertyForm = new FormGroup({
      id: new FormControl("723"),
      e9: new FormControl(),
      address: new FormControl(),
      yearOfConstruction: new FormControl(),
    });
  }

  onSubmit(){
    console.log(this.propertyForm.value);
  }
}
