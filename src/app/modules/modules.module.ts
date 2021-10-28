import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { DataComponent } from './data/data.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    AddComponent,
    EditComponent,
    DataComponent
  ]
})
export class ModulesModule { }
