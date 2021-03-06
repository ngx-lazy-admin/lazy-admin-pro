import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutBasicComponent } from './layouts/basic/basic.component';
import { ActivateGuard } from './guards/activate.guard';
import { ActivateChildGuard } from './guards/activate-child.guard';
import { GlobalDeactivateGuard } from './guards/global-deactivate.guard';
import { LayoutBlankComponent } from './layouts/blank/blank.component';
// import { loadMicroApp, registerMicroApps, start } from 'qiankun';

// const loader = (loading: any) => render({ loading });

// registerMicroApps([
//   {
//     name: 'app',
//     // entry: 'https://wujie-react17.pages.woa.com',
//     entry: 'https://qiankun.umijs.org',
//     // entry: '//localhost:51012',
//     // entry: 'https://mytable.woa.com/worksheet/ieg_cpm_v2/create_epo_order_log/wbp/20/111?group_by=thing_id',
//     container: '#qiankun',
//     activeRule: location => location.pathname.startsWith('/iframe'),
//     props: {
//       page_url: `//localhost:7105` // 自定义页面需要传 page_url字段，值为在MyTable中自定义页面的路径
//     }
//   },
// ]);

const routes: Routes = [
  {
    path: 'blank',
    canActivate: [ActivateGuard],
    canActivateChild: [ActivateChildGuard],
    canDeactivate: [GlobalDeactivateGuard],
    data: {},
    children: [
      { path: '**', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
    ]
  },
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [ActivateGuard],
    canActivateChild: [ActivateChildGuard],
    canDeactivate: [GlobalDeactivateGuard],
    data: {},
    children: [
      { path: 'swagger', loadChildren: () => import('./pages/swagger/swagger.module').then(m => m.SwaggerModule) },
      { path: 'micro', loadChildren: () => import('./pages/micro/micro.module').then(m => m.MicroModule) },
      { path: 'code', loadChildren: () => import('./pages/code/code.module').then(m => m.CodeModule) },
      { path: 'graphql', loadChildren: () => import('./pages/graphql/graphql.module').then(m => m.GraphqlModule) },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard/analysis' },
      { path: '**', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } 
    )
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
