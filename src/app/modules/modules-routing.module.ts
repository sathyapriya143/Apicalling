import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DataComponent } from './data/data.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },

  {
    path: 'edit', component: EditComponent
  },
  {
    path: 'data', component: DataComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
