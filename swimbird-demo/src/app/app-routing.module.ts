import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DataViewPageComponent } from './components/data-view-page/data-view-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'data-view', component: DataViewPageComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
