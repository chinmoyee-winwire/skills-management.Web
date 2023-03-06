import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillManagementComponent } from './skillManagement/skill-management/skill-management.component';
const routes: Routes = [{ path: '', component: SkillManagementComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
