import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { CalculatorComponent} from './pages/calculator/calculator.component';
import { DatatableComponent } from './pages/datatable/datatable.component'
import { RestComponent } from './pages/rest/rest.component'

const routes: Routes = [
  {path: "home", component: HomeComponent},
  // {path: 'about', component: AboutComponent},
  {path: 'theme', component: ThemeComponent},
  {path: 'layouts', component: LayoutsComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'datatable', component: DatatableComponent },
  {path: 'rest', component: RestComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
