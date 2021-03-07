import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public apiurl = "" ;

  constructor(private http : HttpClient) { }

  loadConfig() {
    return new Promise<void>((resolve, reject) => {
      this.http.get('assets/config.json').toPromise().then((response: any) => {
        this.apiurl = response.apiurl;
        resolve() ;
        /*
        this.http.get(this.apiurl + '/config').subscribe((response: any) => {

          this.userInfo = response ;
          // console.log('userInfo',this.userInfo,response) ;
          resolve() ;
        }) ;
        */
      });
    });
  }


}
