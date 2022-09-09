import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCore';
  
  formGroup = this.formBuilder.group({
    'characterName': [null, Validators.required],
    'Region': [null, Validators.required],
    'validate': ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    //this.createForm();
  }


  createForm() {    
    this.formGroup = this.formBuilder.group({
      'characterName': [null, Validators.required],
      'Region': [null, Validators.required],
      'validate': ''
    });
  }

}
