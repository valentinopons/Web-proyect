import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {path:'log-in', component: LoginComponent}
];
export const routing = RouterModule.forRoot(routes);
