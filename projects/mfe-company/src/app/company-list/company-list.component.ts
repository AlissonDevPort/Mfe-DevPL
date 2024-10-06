import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company-list.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  searchId: string = '';

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const page = +params['page'];
      if (page && page > 0) {
        this.p = page;
      }
      return (this.p = 1);
    });
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
      this.newCompany = { name: '', companyName: '' };
    });
  }

  resetForm(): void {
    this.newCompany = { name: '', companyName: '' };
    this.editingCompany = null;
    this.searchId = '';
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

  searchCompany(): void {
    if (this.searchId) {
      this.companyService.getCompanyById(this.searchId).subscribe(
        (data) => {
          this.companys = [data];
        },
        (error) => {
          console.error('Empresa não encontrada', error);
          this.companys = [];
        }
      );
    } else {
      this.loadCompanys();
    }
  }
}
