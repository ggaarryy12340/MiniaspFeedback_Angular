import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { AuthComponent } from './login/auth/auth.component';
import { ListComponent } from './feedback/list/list.component';
import { EditComponent } from './feedback/edit/edit.component';
import { CreateComponent } from './feedback/create/create.component';
import { EndComponent } from './feedback/end/end.component';
import { BackendComponent } from './login/backend/backend.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: MainComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: 'list',
//         pathMatch: 'full'
//       },
//       {
//         path: 'list',
//         component: ListComponent
//       },
//       {
//         path: 'edit/:id',
//         component: EditComponent
//       },
//       {
//         path: 'create',
//         component: CreateComponent
//       }
//     ]
//   },
//   {
//     path: 'login',
//     component: AuthComponent
//   },
//   {
//     path: 'end',
//     component: EndComponent
//   },
//   {
//     path: 'backendLogin',
//     component: BackendComponent
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'backendLogin',
    component: BackendComponent
  },
  {
    path: 'end',
    component: EndComponent
  },
  {
    path: 'feedback',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      },
      {
        path: 'create',
        component: CreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
