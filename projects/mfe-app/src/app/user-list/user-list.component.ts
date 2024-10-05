import { Component, OnInit } from '@angular/core';
import { UserService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
   partners: any[] = [];
   newPartner: any = { name: '', description: '' };
   editingPartner: any = null;
   p: number = 1;

   constructor(private userService: UserService) {}

   ngOnInit(): void {
     this.loadPartners();
   }

  loadPartners(): void {
     this.userService.getAllPartners().subscribe(data => {
       this.partners = data;
     });
  }

   createPartner(): void {
     this.userService.createPartner(this.newPartner).subscribe(() => {
       this.loadPartners();
       this.newPartner = { name: '', email: '' };
     });
   }
  resetForm(): void {
     this.newPartner = { name: '', email: '' };
     this.editingPartner = null; 
  }

   editPartner(partner: any): void {
     this.editingPartner = { ...partner };
 }

   updatePartner(): void {
     if (this.editingPartner) {
       this.userService.updatePartner(this.editingPartner.id, this.editingPartner).subscribe(() => {
         this.loadPartners();
         this.editingPartner = null;
       });
     }
   }

   deletePartner(id: string): void {
     this.userService.deletePartner(id).subscribe(() => {
       this.loadPartners();
     });
  }
}