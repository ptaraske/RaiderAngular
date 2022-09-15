import { Component, OnInit, Input } from '@angular/core';
import {Profile} from '../model/profile.model';
import {RaiderService} from '../services/raider.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profile : Profile;
  imageToShow: any;
  constructor(private raiderService :RaiderService) { 

  }

  ngOnInit(): void {
    
  }

}
