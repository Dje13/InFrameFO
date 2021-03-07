import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient, private configService : ConfigService) {
  }
  getTicketTypes() {
    return this.http.get<any>(this.configService.apiurl + '/ticket/ListType' ) ;
  }
}
