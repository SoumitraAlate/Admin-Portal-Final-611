import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from 'src/app/hero';
import { heroURL } from 'src/app/heroURL';
import { heroWithDate } from 'src/app/HeroWithDate';

@Injectable({
  providedIn: 'root'
})
export class CreateServiceService {
  dialogData: Hero;
  dialogId: string;
  dialogById: string;
  dialogUrlData: heroURL;
  herowithDate: heroWithDate;
  postUrl =
    'https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/createCategory';

  postUrllibrary = 'https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/posturl';

  deleteUrl =
    'https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/deleteContent';

  deleteUrllibrary = 'https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/deleteurl';

  getUrl = ' ';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    })
  };

  constructor(private http: HttpClient) {}
  getItem(id: string): Observable<Hero> {
    const url = `${this.getUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  createCategory(category: Hero) {
    console.log('id in service');

    const data = {
      id: category.id,
      content: category.content
    };
    console.log(data);
    // tslint:disable-next-line: variable-name
    const JSON_String =  JSON.stringify(data);
    return this.http.post(this.postUrl, JSON_String, this.httpOptions);
  }

  createURL(category: heroURL) {
    // const Jsobj = JSON.parse(category);
    // tslint:disable-next-line: variable-name

    // tslint:disable-next-line: variable-name
    console.log('inside service');
    console.log(category.id);
    const data = {
      id: category.id,
      URLLink: category.URLLink
    };
    // tslint:disable-next-line: variable-name
    const JSON_String =  JSON.stringify(data);

    console.log(data);
    return this.http.post(this.postUrllibrary, JSON_String, this.httpOptions);
  }

  createGetAll(): Observable<Hero[]> {

    return this.http.get<Hero[]>(
      'https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/getAllContent'
    );
  }

  createGetAllURL(): Observable<heroURL[]> {
    return this.http.get<heroURL[]>(
      'https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/getallurls'
    );
  }

  deleteCateogryById(id: string) {
      this.dialogId = id;

  }
  deleteURLById(id: string) {
    this.dialogById = id;
  }

  getDialogId() {
    return this.dialogId;
  }
  getDialogUrlId() {
    return this.dialogById;
  }
  deleteCategory(id: string) {
    const url = `${this.deleteUrl}/${id}`;
    return this.http.delete(url, this.httpOptions);
  }

  deleteURL(id: string) {
    const url = `${this.deleteUrllibrary}/${id}`;
    return this.http.delete(url, this.httpOptions);
  }

  addContent(hero: Hero): void {
    this.dialogData = hero;
  }

  addUrl(heroUrl: heroURL): void {
    console.log('getDialogData');
    console.log(heroUrl.id);
    this.dialogUrlData = heroUrl;
  }

  getDialogData() {
    console.log('getDialogData');
    console.log(this.dialogData.content);
    return this.dialogData;
  }

  getDialogUrlData() {
    console.log('getDialogUrlData');
    console.log(this.dialogUrlData.id);
    return this.dialogUrlData;
  }



  updateContent(hero: Hero): void {
    this.dialogData = hero;
  }

  updateContentUrl(hero: heroURL): void {
    this.dialogUrlData = hero;
  }

}
