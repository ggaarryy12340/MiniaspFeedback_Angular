import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CreateComponent,
    EditComponent,
    ListComponent
  ],
  declarations: [CreateComponent, EditComponent, ListComponent]
})
export class FeedbackModule { }
