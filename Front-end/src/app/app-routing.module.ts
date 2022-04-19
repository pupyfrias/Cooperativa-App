import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';
import { LogoutPage } from './pages/logout/logout.page';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'cuentas',
    loadChildren: () => import('./pages/cuentas/cuentas.module').then( m => m.CuentasPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'prestamos',
    loadChildren: () => import('./pages/prestamos/prestamos.module').then( m => m.PrestamosPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'inversiones',
    loadChildren: () => import('./pages/inversiones/inversiones.module').then( m => m.InversionesPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./pages/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'descuentos',
    loadChildren: () => import('./pages/descuentos/descuentos.module').then( m => m.DescuentosPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./pages/sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'tasas',
    loadChildren: () => import('./pages/tasas/tasas.module').then( m => m.TasasPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-cuenta',
    loadChildren: () => import('./pages/recuperar-cuenta/recuperar-cuenta.module').then( m => m.RecuperarCuentaPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'logout',
    component: LogoutPage
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
