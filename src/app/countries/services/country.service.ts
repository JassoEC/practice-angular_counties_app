import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.eu/rest/v2';

  params: HttpParams = new HttpParams().set(
    'fields',
    'name;capital;flag;population;alpha2Code'
  );

  constructor(private http: HttpClient) {}

  findCountry = (term: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url, { params: this.params });
  };

  findByCapital = (term: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url, { params: this.params });
  };

  findByCode = (code: string): Observable<Country> => {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country>(url);
  };

  findByRegion = (region: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.params });
  };
}
