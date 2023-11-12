import { Component } from '@angular/core';
import { TaxCalculatorService } from '../services/tax-calculator.service';
import { TaxModel } from '../models/tax-model';
import { TaxHistory } from '../models/tax-history';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public tax: number = 0;
  taxModel!: TaxModel;
  taxHistory: TaxHistory[] = [];

  constructor(private taxCalculatorService: TaxCalculatorService) {}

  public calculateTax() {
    this.taxCalculatorService.countTax(this.tax).subscribe((result) => {
      this.taxModel = result;
    });
  }

  public getTaxHistory() {
    this.taxCalculatorService
      .getHistory()
      .subscribe((result) => (this.taxHistory = result));
  }
}
