import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyService } from '../../shared/services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.scss'
})
export class FormExampleComponent implements OnInit {
  propertyForm!: FormGroup;

  constructor(private propertyService: PropertyService, private router: Router){}

  ngOnInit(): void {
    this.propertyForm = new FormGroup({
      id: new FormControl("723"),
      e9: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      yearOfConstruction: new FormControl("", [Validators.required, Validators.min(2000), Validators.max(2050)]),
    });
  }

  onSubmit(){
    console.log(this.propertyForm);
    console.log(this.propertyForm.value);
    console.log(this.propertyForm.value.id);
    console.log(this.propertyForm.get("id")!.value);
    if(this.propertyForm.valid){
      console.log("form is valid");
      // post property
      this.propertyService.postProperty(this.propertyForm.value).subscribe(() => {
        this.router.navigate(["..."]); // ... = your URL
      })
    }
  }
}
