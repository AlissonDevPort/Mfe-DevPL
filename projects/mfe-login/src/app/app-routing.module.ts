import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
const MFE_APP_URL = 'http://localhost:4300/remoteEntry.js';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
