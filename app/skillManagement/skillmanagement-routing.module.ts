import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillManagementComponent } from './skill-management/skill-management.component';


  
const routes: Routes = [
  { path: 'skillmanagement', redirectTo: 'skillmanagement/index', pathMatch: 'full'},
  { path: 'skillmanagement/index', component: SkillManagementComponent }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillManagementRoutingModule { }
