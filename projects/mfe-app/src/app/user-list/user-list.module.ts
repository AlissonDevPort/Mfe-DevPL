import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importar o módulo HttpClient
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserListComponent,
      },
    ]),
  ],
})
export class UserListModule {}
