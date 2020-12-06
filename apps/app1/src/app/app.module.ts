import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  AuthModule,
  authRoutes,
} from '../../../../libs/auth/src/lib/auth.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '../../../../libs/layout/src/lib/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(
      [
        { path: 'auth', children: authRoutes },
        {
          path: 'products',
          loadChildren: () =>
            import('../../../../libs/products/src/lib/products.module').then((module) => module.ProductsModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    AuthModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
