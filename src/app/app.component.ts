import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {RaiderService} from './services/raider.service';
import { MatTableDataSource } from '@angular/material/table';
import {Profile} from './model/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCore';
  name = 'Starks';
  realm = 'Thunderhorn';
  profileReponse    : any;
  characterResponse : any;
  loadProfile = true;

  dataSource = new MatTableDataSource<Profile>();
  
  formGroup = this.formBuilder.group({
    'characterName': [null, Validators.required],
    'Region': [null, Validators.required],
    'validate': ''
  });

  constructor(private formBuilder: FormBuilder, private raiderService :RaiderService) { 

  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){

    this.loadProfile = false;
    this.raiderService.getProfile(this.name, this.realm)
        .subscribe(response => { this.profileReponse = response; this.loadProfile = true});
  }
  
  getCharacter(){
    this.raiderService.getCharacter(this.name, this.realm)
        .subscribe(response => { this.characterResponse = response; });

        console.log(this.characterResponse);
  }

  createForm() {    
    this.formGroup = this.formBuilder.group({
      'characterName': [null, Validators.required],
      'Region': [null, Validators.required],
      'validate': ''
    });
  }

}
