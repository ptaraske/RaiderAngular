import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Profile} from '../model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class RaiderService {

  constructor(private http: HttpClient) { }

  private raiderString = 'https://raider.io/api/characters/us/thunderhorn/Starks?season=season-sl-4&tier=29';

  getProfile(name : string, realm : string) : Observable<Profile>
  {
    return this.http.get<Profile>('https://raider.io/api/v1/characters/profile?region=us&realm=' + realm + '&name=' + name)
  }

  getImage(imageUrl: string): Observable<Blob>{
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  getCharacter(name : string, realm : string): Observable<Response>
  {
    return this.http.get<Response>('https://raider.io/api/characters/us/' + realm + '/' + name + '?season=season-sl-4&tier=29')
  }

}
