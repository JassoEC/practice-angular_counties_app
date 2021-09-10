import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  findCountry = (term: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url);
  };

  findByCapital = (term: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url);
  };

  findByCode = (code: string): Observable<Country> => {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country>(url);
  };
}
