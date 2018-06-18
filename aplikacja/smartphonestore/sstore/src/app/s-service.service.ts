import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SServiceService {

  constructor(private http: HttpClient) { }

  sList() {
    return this.http.get('http://localhost:3000/server/smartphonelist');
  }

  sAdd(smartphone) {
    return this.http.post('http://localhost:3000/server/addsmartphone', smartphone, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

}
