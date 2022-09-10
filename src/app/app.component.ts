import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {RaiderService} from './services/raider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCore';
  name = 'Starks';
  realm = 'Thunderhorn';
  profileReponse : any;
  
  formGroup = this.formBuilder.group({
    'characterName': [null, Validators.required],
    'Region': [null, Validators.required],
    'validate': ''
  });

  constructor(private formBuilder: FormBuilder, private raiderService :RaiderService) { }

  ngOnInit() {
    this.raiderService.getProfile(this.name, this.realm).subscribe((result: any) => {
      this.profileReponse = result;
      console.log(result);

    }, (error) => {
      console.log(error);
    });

  }


  createForm() {    
    this.formGroup = this.formBuilder.group({
      'characterName': [null, Validators.required],
      'Region': [null, Validators.required],
      'validate': ''
    });
  }

}
