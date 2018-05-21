import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    PageNotFoundComponent,
    AboutComponent
  ]
})
export class AppCommonModule { }
