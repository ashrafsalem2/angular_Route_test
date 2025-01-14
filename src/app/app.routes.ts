import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent, title:'Home Page'},
    {path:'about', component:AboutComponent, title:'About Page'},
    {path:'portfolio', component:PortfolioComponent, title:'Portfolio Page'},
    {path:'contact', component:ContactComponent, title:'Contact Page'},
    {path:'**', component:NotFoundComponent, title:'Page Not Found'}
];
