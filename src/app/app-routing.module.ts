import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { SubmitClaimsComponent } from './submit-claims/submit-claims.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'home',component:HomeComponent,
      children: [
        {
          path: '', // child route path
      component: UpdateDetailsComponent, // child route component that the router renders

        },
    {
      path: 'update', // child route path
      component: UpdateDetailsComponent, // child route component that the router renders
    },
    {
      path: 'submitClaims',//child route path
      component: SubmitClaimsComponent, // another child route component that the router renders
    },]
  }
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
