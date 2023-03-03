import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { SkillManagementRoutingModule } from './skillmanagement-routing.module';
import { SkillManagementComponent } from './skill-management/skill-management.component';

  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  
@NgModule({
  declarations: [SkillManagementComponent],
  imports: [
    CommonModule,
    SkillManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SkillManagementModule { }
