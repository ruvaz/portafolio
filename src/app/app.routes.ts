import {provideRoutes, RouterModule, Routes} from '@angular/router';
import {
  AboutComponent,
  PortafolioComponent,
  ProductComponent
} from './components/index.paginas';
import {rootRoute} from '@angular/router/src/router_module';
import {advanceActivatedRoute} from '@angular/router/src/router_state';

const app_routes: Routes = [
  {path: '', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'product', component: ProductComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});

