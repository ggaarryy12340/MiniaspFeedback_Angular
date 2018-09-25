import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { BackendComponent } from './backend/backend.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AuthComponent,
    BackendComponent
  ],
  declarations: [AuthComponent, BackendComponent]
})
export class LoginModule { }
