import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = 'http://localhost:4300/remoteEntry.js';
const MFE_COMPANY_URL = 'http://localhost:4400/remoteEntry.js';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'user-list',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MFE_APP_URL,
        remoteName: 'mfeApp',
        exposedModule: './UserListModule',
      })
        .then((m) => m.UserListModule)
        .catch((err) => console.log(err));
    },
  },
  {
    path: 'company-list',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MFE_COMPANY_URL,
        remoteName: 'mfeCompany',
        exposedModule: './CompanyListModule',
      })
        .then((m) => m.CompanyListModule)
        .catch((err) => console.log(err));
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routeCompArr = [HomeComponent];
