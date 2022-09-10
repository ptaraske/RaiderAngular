import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Profile} from '../model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class RaiderService {

  constructor(private http: HttpClient) { }

  getProfile(name : string, realm : string) : Observable<Profile>
  {
    return this.http.get<Profile>('https://raider.io/api/v1/characters/profile?region=us&realm=' + realm + '&name=' + name)
  }

}
