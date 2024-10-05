import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company-list.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  companys: any[] = [];
  newCompany: any = { name: '', companyName: '' };
  editingCompany: any = null;
  p: number = 1;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanys();
  }

  loadCompanys(): void {
    this.companyService.getAllCompanys().subscribe((data) => {
      this.companys = data;
    });
  }

  createCompany(): void {
    this.companyService.createCompany(this.newCompany).subscribe(() => {
      this.loadCompanys();
      this.newCompany = { name: '', email: '' };
    });
  }
  resetForm(): void {
    this.newCompany = { name: '', email: '' };
    this.editingCompany = null;
  }

  editCompany(company: any): void {
    this.editingCompany = { ...company };
  }

  updateCompany(): void {
    if (this.editingCompany) {
      this.companyService
        .updateCompany(this.editingCompany.id, this.editingCompany)
        .subscribe(() => {
          this.loadCompanys();
          this.editingCompany = null;
        });
    }
  }

  deleteCompany(id: string): void {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.loadCompanys();
    });
  }
}
