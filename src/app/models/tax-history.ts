export interface TaxHistory {
  id: number;
  annualTaxPaid: number;
  grossAnnualSalary: number;
  grossMonthlySalary: number;
  monthlyTaxPaid: number;
  netAnnualSalary: number;
  netMonthlySalary: number;
  createdAt: Date;
}
