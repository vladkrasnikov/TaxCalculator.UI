import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TaxModel } from '../models/tax-model';
import { TaxHistory } from '../models/tax-history';

@Injectable({
  providedIn: 'root',
})
export class TaxCalculatorService {
  private _baseUrl: string = `${environment.apiBaseUrl}TaxIncome/`;
  constructor(private httpClient: HttpClient) {}

  public countTax(tax: number): Observable<TaxModel> {
    return this.httpClient.post<TaxModel>(this._baseUrl, tax);
  }

  public getHistory(): Observable<TaxHistory[]> {
    return this.httpClient.get<TaxHistory[]>(this._baseUrl);
  }
}
